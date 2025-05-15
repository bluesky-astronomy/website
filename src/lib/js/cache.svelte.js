/* Cached information about the feeds. */

import { getActorFeeds } from './bsky-api';
import { getFeedList } from './flask-api';

let feedInfo = $state([]);

export async function getFeedInfo() {
	if (feedInfo.length > 0) {
		return feedInfo;
	}

	// Perform fetches
	const flaskInfo = await getFeedList();
	const blueskyInfo = await getActorFeeds();

	// Combine into two arrays & set
	blueskyInfo.data.feeds.forEach((feed) => {
		const id = feed.uri.split('/').at(-1);
		feedInfo.push({ feed: id, ...flaskInfo[id], ...feed });
	});

	return feedInfo;
}
