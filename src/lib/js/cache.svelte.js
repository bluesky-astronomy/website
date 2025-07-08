/* Cached information about the feeds. */

import { getActorFeeds } from './bsky-api';
import { getFeedList } from './flask-api';
import { feeds } from '../assets/json/feedInfo.json';

export async function getFeedInfo() {
	// Todo: refactor to remove
	return feeds;
}

export function getFeedInfoSync() {
	// This function is to be preferred going forwards.
	return feeds;
}
