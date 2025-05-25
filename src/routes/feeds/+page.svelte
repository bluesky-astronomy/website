<script>
	import FeedCard from '$lib/components/feeds/FeedCard.svelte';
	import { onMount } from 'svelte';
	import { getFeedInfo } from '$lib/js/cache.svelte';

	let feeds = undefined;
	let sortedFeeds = new Array();

	onMount(async () => {
		feeds = await getFeedInfo();
		sortedFeeds = Object.values(feeds).sort((a, b) => b.likeCount - a.likeCount);
	});
</script>

<h1>All of our feeds</h1>

<p>We run an ecosystem of custom astronomy, astrophysics, and space science feeds.</p>

<p>Click on the links below to find out more.</p>

{#if sortedFeeds}
	{#each sortedFeeds as feed}
		<FeedCard feed={feed.feed} />
	{/each}

{:else}
	<em>Loading...</em>
{/if}
