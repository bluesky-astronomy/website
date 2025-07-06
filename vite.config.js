import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import Icons from 'unplugin-icons/vite';
import {
	getFeedListWithBskyInfo,
	prodServerEndpoint,
	devServerEndpoint
} from './src/lib/js/flask-api';
import { renderSocialCard } from './src/lib/js/social-card';
import { writeFile, readFileSync } from 'fs';

export default defineConfig({
	plugins: [
		sveltekit(),
		Icons({
			compiler: 'svelte'
		}),
		APIPreQuery(),
		generateSocialCards()
	]
});

// Pre-queries the feed APIs and saves a copy of the data to a JSON file in /static.
function APIPreQuery() {
	let endpoint = prodServerEndpoint;
	if (process.env.NODE_ENV === 'development') {
		endpoint = devServerEndpoint;
	}
	return {
		name: 'api-pre-query',
		buildStart: (options) => {
			console.log('APIPreQuery: Fetching current feed list. Mode =', process.env.NODE_ENV);
			Promise.resolve(getFeedListWithBskyInfo(endpoint)).then((feedInfo) => {
				feedInfo = { feeds: feedInfo };
				writeFile('./src/lib/assets/json/feedInfo.json', JSON.stringify(feedInfo), (error) => {
					if (error) {
						throw error;
					}
				});
			});
		}
	};
}

async function generateSocialCards() {
	return {
		name: 'generate-social-cards',
		buildStart: writeSocialCards
	};
}

async function writeSocialCards(options) {
	// Does not run in development mode.
	if (process.env.NODE_ENV === 'development') {
		return;
	}

	console.log('GenerateSocialCards: Generating social cards for feeds.');
	const fontData = [
		{
			name: 'Rethink Sans',
			data: readFileSync('./src/lib/assets/fonts/RethinkSans-Medium.ttf'),
			style: 'normal'
		}
		// {
		// 	name: 'Bold',
		// 	data: boldData,
		// 	style: 'bold'
		// }
	];

	// Fetch list of feeds
	const feedInfo = JSON.parse(readFileSync('./src/lib/assets/json/feedInfo.json')).feeds;

	// Render an image for each feed
	for (const feed in feedInfo) {
		const name = `The ${feedInfo[feed].displayName.replaceAll('The ', '').replaceAll('&', 'and')} Feed`;
		let image = await renderSocialCard(name, undefined, fontData);
		writeFile(`./static/social-cards/${feed}.png`, image, (error) => {
			if (error) {
				throw error;
			}
		});
	}
}
