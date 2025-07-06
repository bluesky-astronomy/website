/* Cached information about the feeds. */

import { getActorFeeds } from './bsky-api';
import { getFeedList } from './flask-api';
import { feeds } from '../assets/json/feedInfo.json';

let feedInfo = $state({});

export async function getFeedInfo() {
	if (Object.keys(feedInfo).length > 0) {
		return feedInfo;
	}
	feedInfo = feeds;
	return feedInfo;
}
