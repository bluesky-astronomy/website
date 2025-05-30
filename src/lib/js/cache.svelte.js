/* Cached information about the feeds. */

import { getActorFeeds } from './bsky-api';
import { getFeedList } from './flask-api';

let feedInfo = $state({});

export async function getFeedInfo() {
	if (Object.keys(feedInfo).length > 0) {
		return feedInfo;
	}

	// Perform fetches
	const [flaskInfo, blueskyInfo] = await Promise.all([getFeedList(), getActorFeeds()]);

	// Combine into two arrays & set various data
	blueskyInfo.data.feeds.forEach((feed) => {
		let id = feed.uri.split('/').at(-1);

		// Todo: Remove this one-off fix for the Astrosky feed
		if (id === 'astro-all') {
			id = 'all';
		}

		// Only discuss feeds exported by the Flask server
		if (flaskInfo[id] !== undefined) {
			feedInfo[id] = { feed: id, ...flaskInfo[id], ...feed };
		}
	});

	return feedInfo;
}
