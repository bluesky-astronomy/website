<!-- svelte-ignore non_reactive_update -->
<script>
	import Image from '$lib/blocks/Image.svelte';
	import Icon from '$lib/blocks/Icon.svelte';
	import Card from '$lib/blocks/Card.svelte';
	import Flex from '$lib/blocks/Flex.svelte';
	import { onMount } from 'svelte';
	import { numberFormatter } from '$lib/js/format';
	import { getFeedInfo } from '$lib/js/cache.svelte';
	import { getFeedStatsByMonth } from '$lib/js/flask-api';

	let { data } = $props();

	const feed = data.feed;
	const cardWidth = 'min(300px, 80vw)';

	// All the feed info we grab from the backends
	let feedInfo = $state(0);
	let feedName = $state('');
	let feedCriteria = $state('');
	let feedURL = $state('/');

	// All the feed statistics stuff
	let viewsLastMonth = $state(-1);
	const currentMonthNumber = new Date().getMonth() + 1;

	onMount(async () => {
		// Feed information
		const allFeedInfo = await getFeedInfo();
		feedInfo = allFeedInfo[feed];

		// Setup some neater things about the feed
		feedName = feedInfo.displayName.replace('The', '');
		const feedCriteriaArray = feedInfo.emoji.concat(feedInfo.words);
		feedCriteriaArray[feedCriteriaArray.length - 1] =
			'or ' + feedCriteriaArray[feedCriteriaArray.length - 1];
		feedCriteria = feedCriteriaArray.join(feedCriteriaArray.length > 2 ? ', ' : ' ');

		const feedURISplit = feedInfo.uri.split('/');
		feedURL = `https://bsky.app/profile/${feedURISplit[2]}/feed/${feedURISplit[4]}`;

		// Feed request statistics
		const feedStats = await getFeedStatsByMonth(feed);
		const oneMonthAgo = new Date();
		oneMonthAgo.setUTCMonth(oneMonthAgo.getUTCMonth() - 1);

		viewsLastMonth = feedStats.filter(
			(stats) =>
				stats.month === oneMonthAgo.getUTCMonth() + 1 && stats.year === oneMonthAgo.getUTCFullYear()
		)[0].num_requests;
	});
</script>

{#if feedInfo}
	<!-- TITLE -->
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

	<!-- ABOUT -->
	<p><strong>{feedInfo.description.split('.')[0].split('!')[0]}.</strong></p>

	<!-- INSTRUCTIONS -->
	<p>
		Like all of our feeds, the {feedName} feed is
		<strong>opt-in.</strong> Your posts will only be able to appear here after
		<a href="/about/signup">signing up</a>.
	</p>
	<p style="margin-bottom: 30px">
		After that, you can post to the feed by including <strong>{feedCriteria}</strong> in your post.
	</p>

	<!-- STATISTICS -->
	<Flex>
		<Card width={cardWidth}>
			<p class="card-text">❤️ {numberFormatter.format(feedInfo.likeCount)} likes</p>
		</Card>
		<Card width={cardWidth}>
			<p class="card-text">
				🔎
				{#if viewsLastMonth >= 0}
					{numberFormatter.format(viewsLastMonth)}
				{:else}
					(loading)
				{/if}
				views last month
			</p>
		</Card>
	</Flex>
{:else}
	<p>Loading...</p>
{/if}

<p style="margin-top: 50px; font-size: 22px"><a href="/feeds/">↻ Return to feed list</a></p>

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
	.card-text {
		font-weight: 500;
		font-size: 25px;
		padding: 0px;
		margin: 0px;
		text-align: center;
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
