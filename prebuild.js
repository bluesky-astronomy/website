import {
	getFeedListWithBskyInfo,
	prodServerEndpoint,
	devServerEndpoint
} from './src/lib/js/flask-api.js';
import { writeFileSync } from 'fs';

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

console.log('Performing pre-build steps...');
performAPIPreQuery();
