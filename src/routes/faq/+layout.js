import { getFeedInfoSync } from '$lib/js/cache.svelte.js';

export async function load({ params }) {
	const feedInfo = getFeedInfoSync();

	// Set feed name
	let feed = 'astro';
	if ((params.feed !== undefined) & Object.hasOwn(feedInfo, feed)) {
		feed = params.feed;
	}

	// Return metadata (which sets social graph) & feed param
	const feedDisplayName = feedInfo[feed].displayName.replace('The', '');
	return {
		feed: feed,
		pageMeta: {
			title: params.feed + `The ${feedDisplayName} Feed - FAQ`,
			image: `/social-cards/feeds/${feed}.png`
		}
	};
}
