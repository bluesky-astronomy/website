/* Contains a number of pre-build steps that are ran outside of the Vite ecosystem.
This includes:
- Pre-querying certain API routes
- Pre-generating social cards

Running these with node only ensures that everything is already in place when Vite
starts the build. N.B.: These aren't ran as Vite plugins because certain steps MUST
happen first, and the async nature of Vite plugins seems to get fucked up with that.
*/

import {
	getFeedListWithBskyInfo,
	prodServerEndpoint,
	devServerEndpoint
} from './src/lib/js/flask-api.js';
import { writeFileSync, writeFile, readFileSync, existsSync } from 'fs';
import { renderSocialCard, readImageBase64 } from './src/lib/js/social-card.js';

async function preBuildSteps() {
	// API steps
	await performAPIPreQuery();

	// Social card steps
	await writeSocialCards();
}

async function performAPIPreQuery() {
	let endpoint = prodServerEndpoint;
	if (process.env.NODE_ENV === 'development') {
		endpoint = devServerEndpoint;
	}
	console.log('APIPreQuery: Fetching current feed list. Mode =', process.env.NODE_ENV);

	let feedInfo = await getFeedListWithBskyInfo(endpoint);
	writeAPIPreQueryToFile(feedInfo);
}

function writeAPIPreQueryToFile(feedInfo) {
	writeFileSync('./src/lib/assets/json/feedInfo.json', JSON.stringify({ feeds: feedInfo }));
}

async function writeSocialCards() {
	// Does not run in development mode.
	if (process.env.NODE_ENV === 'development') {
		return;
	}

	console.log('GenerateSocialCards: Generating social cards for feeds.');
	const feedInfo = getFeedInfo();
	const fontData = getFontData();
	const defaultImage = getDefaultImage();

	for (const feed in feedInfo) {
		const name = getFeedName(feedInfo, feed);
		const image = getImageForFeed(defaultImage, feed);
		const renderedCard = await renderSocialCard(name, image, fontData);
		writeFile(`./static/social-cards/feeds/${feed}.png`, renderedCard, (error) => {
			if (error) {
				throw error;
			}
		});
	}
}

function getFeedName(feedInfo, feed) {
	return `The ${feedInfo[feed].displayName.replaceAll('The ', '').replaceAll('&', 'and')} Feed`;
}

function getImageForFeed(defaultImage, feed) {
	let image = defaultImage;
	const imagePath = `./static/assets/feed-headers/${feed}.png`;
	if (existsSync(imagePath)) {
		image = readImageBase64(imagePath);
	}
	return image;
}

function getDefaultImage() {
	return readImageBase64('./static/social-cards/default.png');
}

function getFeedInfo() {
	return JSON.parse(readFileSync('./src/lib/assets/json/feedInfo.json')).feeds;
}

function getFontData() {
	return [
		{
			name: 'Rethink Sans',
			data: readFileSync('./src/lib/assets/fonts/RethinkSans-Medium.ttf'),
			style: 'normal'
		}
	];
}

console.log('Performing pre-build steps...');
preBuildSteps();
