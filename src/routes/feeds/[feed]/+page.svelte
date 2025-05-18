<!-- svelte-ignore non_reactive_update -->
<script>
	import { getFeedInfo } from '$lib/js/cache.svelte';
	import { onMount } from 'svelte';
	import Image from '$lib/blocks/Image.svelte';
	// import { siteTitle } from '$lib/config.js';
	// import { formatDate } from '$lib/js/dates';
	let { data } = $props();

	const feed = data.feed;
	let feedInfo = $state(0);

	onMount(async () => {
		const allFeedInfo = await getFeedInfo();
		feedInfo = allFeedInfo[feed];
		// console.log(feedInfo);
	});
</script>

{#if feedInfo}
	<Image
		src={feedInfo.avatar}
		style="width: 100px; border-radius: 35px; margin-top: 20px; margin-bottom: 0px"
	/>
	<h1 style="margin-top: 10px">The {feedInfo.displayName.replace('The', '')} Feed</h1>

	<!-- <h2>About the feed</h2> -->
	<p><strong>{feedInfo.description.split('.')[0].split('!')[0]}.</strong></p>

	<!-- <h2>How to post to the feed</h2> -->

	<p>
		Like all of our feeds, the {feedInfo.displayName.replace('The', '')} feed is
		<strong>opt-in.</strong> Your posts will only be able to appear here after
		<a href="/about/signup">signing up</a>.
	</p>

	<p>
		After that, you can post to the feed by including <strong
			>{feedInfo.emoji.concat(feedInfo.words).join(', ')}</strong
		> in your post.
	</p>

	
{:else}
	<p>Loading...</p>
{/if}
