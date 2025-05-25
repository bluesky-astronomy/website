/* Functions for interacting with our Flask API endpoint. */

import { dev } from '$app/environment';

// Set endpoint - different on dev or not dev
let flaskEndpoint = 'https://feed-all.astronomy.blue';
// flaskEndpoint = 'http://127.0.0.1:8000';
if (dev) {
	flaskEndpoint = 'http://127.0.0.1:8000';
}

export async function getFeedList() {
	// const response = await fetch('https://feed-all.astronomy.blue/api/app.getFeedList');
	const response = await fetch(`${flaskEndpoint}/api/app.getFeedList`);
	const json = await response.json();

	Object.keys(json).forEach((key) => {
		// Edge case where some feeds don't come as an object
		// Todo: backend should be improved here
		if (json[key] === null) {
			json[key] = new Object();
			json[key].emoji = new Array();
			json[key].words = ['All posts from all feeds'];
		}
	});

	return json;
}

export async function getFeedStatsByMonth(feed) {
	if (feed === undefined) {
		feed = 'all';
	}
	const response = await fetch(
		`${flaskEndpoint}/api/app.getFeedStats?` +
			new URLSearchParams({
				feed: feed,
				group_by_year: true,
				group_by_month: true
			})
	);
	const json = await response.json();
	return Object.values(json.stats).filter((stats) => stats.feed === feed);
}
