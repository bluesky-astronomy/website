import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import Icons from 'unplugin-icons/vite';
import {
	getFeedListWithBskyInfo,
	prodServerEndpoint,
	devServerEndpoint
} from './src/lib/js/flask-api';
import { renderSocialCard } from './src/lib/js/social-card';
import { writeFileSync, writeFile, readFileSync } from 'fs';

export default defineConfig({
	plugins: [
		sveltekit(),
		Icons({
			compiler: 'svelte'
		}),
		// pluginAPIPreQuery(),  // TODO: see if there is a better way to integrate this! It hasn't worked so far though, as it's async.
		pluginGenerateSocialCards()
	]
});

// Pre-queries the feed APIs and saves a copy of the data to a JSON file.
function pluginAPIPreQuery() {
	return {
		name: 'api-pre-query',
		buildStart: performAPIPreQuery
	};
}

// Generates bespoke social cards for all pages that require one.
function pluginGenerateSocialCards() {
	return {
		name: 'generate-social-cards',
		buildStart: writeSocialCards
	};
}

function performAPIPreQuery(options) {
	let endpoint = prodServerEndpoint;
	if (process.env.NODE_ENV === 'development') {
		endpoint = devServerEndpoint;
	}
	console.log('APIPreQuery: Fetching current feed list. Mode =', process.env.NODE_ENV);
	Promise.resolve(getFeedListWithBskyInfo(endpoint)).then((feedInfo) => {
		feedInfo = { feeds: feedInfo };
		writeFileSync('./src/lib/assets/json/feedInfo.json', JSON.stringify(feedInfo));
	});
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
		Promise.resolve(renderSocialCard(name, undefined, fontData)).then((image) => {
			writeFile(`./static/social-cards/feeds/${feed}.png`, image, (error) => {
				if (error) {
					throw error;
				}
			});
		});
	}
}
