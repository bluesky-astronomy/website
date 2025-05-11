<script>
	import { getFeedList } from '$lib/js/flask-api';
	import { onMount } from 'svelte';

	let feeds;

	onMount(async () => {
		feeds = await getFeedList();
        console.log(feeds)
	});
</script>

<h1>All of our feeds</h1>

{#if feeds}
	{feeds}
{/if}
