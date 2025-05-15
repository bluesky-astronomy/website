<script>
	import { getFeedInfo } from '$lib/js/cache.svelte';
	import { onMount } from 'svelte';

	let feeds = $state(0);

	onMount(async () => {
		feeds = await getFeedInfo()
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
				<!-- {feed.words} -->
				<p style="color: var(--color-grey); margin-top: 0px">
					<!-- {feed.emoji.concat(feed.words).join(', ')} -->
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
