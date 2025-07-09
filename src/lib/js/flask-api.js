import { getActorFeeds } from './bsky-api.js';

export const prodServerEndpoint = 'https://feed-all.astronomy.blue';
export const devServerEndpoint = 'http://127.0.0.1:8000';

// Fetches the current list of feeds from Bluesky.
export async function getFeedList(flaskEndpoint) {
	if (flaskEndpoint === undefined) {
		flaskEndpoint = prodServerEndpoint;
	}
	// const response = await fetch('https://feed-all.astronomy.blue/api/app.getFeedList');
	const response = await fetch(`${flaskEndpoint}/api/app.getFeedList`);
	if (!response.ok) {
		throw new Error(`Failed to download getFeedList API route. Status: ${response.status}`);
	}
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

// Runs getFeedList, AND also mixes in any additional Bluesky info.
// This function is intended for use for pre-caching feed information.
export async function getFeedListWithBskyInfo(flaskEndpoint) {
	const [flaskInfo, blueskyInfo] = await Promise.all([getFeedList(), getActorFeeds()]);

	let feedInfo = new Object();

	// Combine into two arrays & set various data
	// Todo: I think I'd prefer if we used the Flask list instead.
	blueskyInfo.data.feeds.forEach((feed) => {
		let id = feed.uri.split('/').at(-1);

		// Todo: Remove this one-off fix for the Astrosky feed
		if (id === 'astro-all') {
			id = 'all';
		}

		// Remove oft-duplicated information
		delete feed.creator;

		// Only discuss feeds exported by the Flask server
		const feedURISplit = feed.uri.split('/');
		const feedURL = `https://bsky.app/profile/${feedURISplit[2]}/feed/${feedURISplit[4]}`;
		if (flaskInfo[id] !== undefined) {
			feedInfo[id] = {
				feed: id,
				url: feedURL,
				...flaskInfo[id],
				...feed
			};
		}
	});

	return feedInfo;
}

export async function getFeedStatsByMonth(feed, flaskEndpoint) {
	if (feed === undefined) {
		feed = 'all';
	}
	if (flaskEndpoint === undefined) {
		flaskEndpoint = prodServerEndpoint;
		console.log(import.meta.env.DEV);
		if (import.meta.env.DEV) {
			flaskEndpoint = devServerEndpoint;
		}
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
