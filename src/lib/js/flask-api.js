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
		if (json[key] === null) {
			json[key] = new Object();
			json[key].emoji = new Array();
			json[key].words = ['All posts from all feeds'];
		}
	});

	return json;
}
