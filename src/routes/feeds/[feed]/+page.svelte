<!-- svelte-ignore non_reactive_update -->
<script>
	import { getFeedInfo } from '$lib/js/cache.svelte';
	import { onMount } from 'svelte';
	import Image from '$lib/blocks/Image.svelte';
	import Icon from '$lib/blocks/Icon.svelte';

	let { data } = $props();

	const feed = data.feed;
	let feedInfo = $state(0);
	let feedName = $state('');
	let feedCriteria = $state('');
	let feedURL = $state('/');

	onMount(async () => {
		const allFeedInfo = await getFeedInfo();
		feedInfo = allFeedInfo[feed];

		// Setup some neater things about the feed
		feedName = feedInfo.displayName.replace('The', '');
		const feedCriteriaArray = feedInfo.emoji.concat(feedInfo.words);
		feedCriteriaArray[feedCriteriaArray.length - 1] =
			'or ' + feedCriteriaArray[feedCriteriaArray.length - 1];
		feedCriteria = feedCriteriaArray.join(', ');

		const feedURISplit = feedInfo.uri.split('/');
		feedURL = `https://bsky.app/profile/${feedURISplit[2]}/feed/${feedURISplit[4]}`;
	});
</script>

{#if feedInfo}
	<div class="container" style="margin-top: 20px">
		<img class="feed-avatar" src={feedInfo.avatar} alt="{feedInfo.displayName}'s avatar" />
		<div class="social-logo">
			<h1>The {feedName} Feed</h1>
			<p
				style="margin-top: -5px; margin-left: 5px; margin-bottom: 0px; padding: 0px; font-size: 20px"
			>
				<a href={feedURL} target="_blank">
					<!-- <Icon name="bluesky" style="height: 20px;" />  -->
					View on Bluesky
				</a>
			</p>
		</div>
	</div>

	<!-- <h2>About the feed</h2> -->
	<p><strong>{feedInfo.description.split('.')[0].split('!')[0]}.</strong></p>

	<!-- <h2>How to post to the feed</h2> -->

	<p>
		Like all of our feeds, the {feedName} feed is
		<strong>opt-in.</strong> Your posts will only be able to appear here after
		<a href="/about/signup">signing up</a>.
	</p>

	<p>
		After that, you can post to the feed by including <strong>{feedCriteria}</strong> in your post.
	</p>

	<!-- TODO: add statistics here -->
	<!-- <h3><em>Statistics</em></h3> -->
<!-- {:else}
	<p>Loading...</p> -->
	<p style="margin-top: 50px; font-size: 22px"><a href="/feeds/">↻ Return to feed list</a></p>
{/if}


<style>
	.feed-avatar {
		width: 70px;
		border-radius: 15px;
		margin-top: 20px;
		margin-bottom: 0px;
	}
	.container {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-wrap: nowrap;
		gap: 10px;
	}
	h1 {
		margin-bottom: 0px;
		margin-top: 15px;
		padding-bottom: 0px;
	}

	/* Computers
	/* @media only screen and (min-width: 1000px) {
	} */
	/* Tablets */
	/* @media screen and (min-width: 801px) and (max-width: 999px) {
	} */
	/* Phones */
	@media screen and (max-width: 800px) {
		.container {
			flex-flow: column;
			gap: 0px;
			text-align: center;
		}
		.feed-avatar {
			width: 120px;
			border-radius: 30px;
		}
		h1 {
			font-size: 40px;
		}
	}
</style>
