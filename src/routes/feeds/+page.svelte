<script>
	import { getFeedList } from '$lib/js/flask-api';
	import { onMount } from 'svelte';

	let feeds;

	onMount(async () => {
		const feedsObject = await getFeedList();

		// TODO a lot of the below should go in getFeedList(), or the backend should change
		// Assign feed name to object itself for convenience
		Object.keys(feedsObject).forEach((key) => {
			// Edge case where some feeds don't come as an object
			if (feedsObject[key] === null) {
				feedsObject[key] = new Object();
				feedsObject[key].emoji = new Array();
				feedsObject[key].words = ['All posts from all feeds'];
			}
			feedsObject[key].feed = key;
		});

		// Make into array
		feeds = Object.values(feedsObject);
	});
</script>

<h1>All of our feeds</h1>

<p>We run an ecosystem of custom astronomy, astrophysics, and space science feeds.</p>

<p>Click on the links below to find out more.</p>

{#if feeds}
	{#each feeds as feed}
		<a href={`/feeds/${feed.feed}`}>
			<div class="feed-card">
				<h3 style="margin-bottom: 10px">{feed.feed}</h3>
				<p style="color: var(--color-grey); margin-top: 0px">
					{feed.emoji.concat(feed.words).join(', ')}
				</p>
			</div>
		</a>
	{/each}
{/if}

<style>
	.feed-card {
		background-color: var(--color-offwhite);
		padding: 0px 10px 0px 10px;
		margin-top: 10px;
		margin-bottom: 10px;
		width: 50%;
		min-width: 450px;
	}
</style>
