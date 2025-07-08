<script>
	import { Accordion } from 'bits-ui';
	import Question from './Question.svelte';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { getFeedInfoSync } from '$lib/js/cache.svelte.js';
	import { siteURL } from '$lib/config.js';

	let { data, children } = $props();

	const feedInfo = getFeedInfoSync();
	const feed = data.feed;
	const feedName = feedInfo[feed].displayName.replace('The', '');

	function feedDescription(feed) {
		// Todo this is a mess. We should export a simple description for every feed that can be used instead
		const string = feedInfo[feed].description.split('.')[0].split('!')[0];
		return string[0].toLowerCase() + string.slice(1);
	}
</script>

<svelte:head>
	<!-- Capitalize the page name -->
	<title>FAQ - The Astrosky Ecosystem</title>
	<meta name="title" content="FAQ - The Astrosky Ecosystem" />
	<meta property="og:title" content="FAQ - The Astrosky Ecosystem" />
	<meta name="twitter:title" content="FAQ - The Astrosky Ecosystem" />

	<!-- Set custom social graph image -->
	<meta property="og:image" content="{siteURL}/social-cards/feeds/{feed}.png" />
	<meta name="twitter:image" content="{siteURL}/social-cards/feeds/{feed}.png" />
</svelte:head>

<h1>Frequently Asked Questions</h1>

<Accordion.Root type="multiple">
	<Question title="What is the {feedName} feed?">
		The <a href={feedInfo[feed].url}>{feedName}</a> feed is a custom feed that contains {feedDescription(
			feed
		)}.
		<br /><br />
		It's moderated to only contain posts from scientists, hobbyists, and organizations who have applied
		to be able to post to the feed.
	</Question>

	<Question title="How can I use (or 'follow') the feed?">
		Anyone with a Bluesky account can view <a href={feedInfo[feed].url}>the feed!</a>
		<br /><br />
		We recommend <strong>pinning the feed to your home screen</strong>, which you can do by
		<a href={feedInfo[feed].url}>going to the URL of the feed</a> and pressing the pin icon in the top-right.
		That puts it on the main home screen of your Bluesky app.
	</Question>

	<Question title="Wait... what even is a custom feed?"
		>Custom feeds are <a href="https://bsky.social/about/blog/7-27-2023-custom-feeds"
			>a great feature on Bluesky</a
		>. They allow anyone to host a feed of posts on any topic.
		<br /><br />
		We host <a href="/feeds">over a dozen feeds</a> about topics relating to astronomy,
		astrophysics, astrophotography, and planetary science. Our feeds are
		<strong>moderated</strong>, making sure that they're free of disinformation or hate speech.
	</Question>

	<Question title="How do I post to the feeds?">
		Any Bluesky user who is a scientist, science organization, or hobbyist astronomer in the fields
		of astronomy, astrophysics, astrobiology, planetary science, or astronomy education can sign up
		to join the <a href="/feeds">feeds</a>.
		<br /><br />
		You can sign up by asking our bot account; instructions for how to do that can be found
		<a href="/about/signup">here</a>.
	</Question>

	<Question title="Do I need to sign up to each feed individually?">
		No! Once you're approved as a poster, you can post to any of our <a href="/feeds">feeds</a>.
	</Question>

	<Question title="I'm just curious. Can I post to the feeds?">
		Currently, <a href="/about/signup">signup</a> for the feeds is restricted just to scientists, organizations,
		and hobbyists (i.e. astrophotographers). In the future, we'd like to make a way for space fans to
		ask questions to our community - stay tuned! Nevertheless, it's possible for anyone to reply to posts
		in the feeds and interact with their authors.
	</Question>

	<Question title="What kinds of posts are allowed?">
		The feeds have a number of <a href="https://github.com/bluesky-astronomy/rules">rules</a> that
		we ask posters to follow.
		<br /><br />
		If you have any questions, or think you've spotted a post that breaks these rules, then you should
		get in touch with
		<a href="https://bsky.app/profile/moderation.astronomy.blue"
			>our moderation account (@moderation.astronomy.blue)</a
		>.
	</Question>

	<Question title="What is the Astrosky Ecosystem?">
		The Astrosky Ecosystem is an initiative founded in 2023 to build a safe online community for
		astronomers and astronomy fans alike. This organization maintains the Astronomy feeds.
		<br /><br />
		Taking advantage of the open nature of the Bluesky platform, we're building open-source integrations
		for astronomers online. Our goal is to build the best possible online space for science, astrophotography,
		and outreach.
		<br /><br />
		We've started off by building a
		<a href="/feeds">wide range of custom feeds of Bluesky content</a>. In the near future, we're
		planning to expand into hosting user data, allowing community members to have sovereignty over
		their social media data.
	</Question>

	<Question title="How do you do this for free?">
		We don't! We incur a small hosting cost each month - about €40.
		<br /><br />
		In the future, we're planning on making a way to collect donations for hosting the feeds.
	</Question>

	<Question title="What if I still have a question?">
		If it's about the feeds, you can get in touch with
		<a href="https://bsky.app/profile/moderation.astronomy.blue"
			>our moderation account on Bluesky</a
		>, which is open to DMs.
		<br /><br />
		For things related to our organization (e.g. 'can we sponsor you?'), you can get in touch with the
		Astrosky Ecosystem's founder,
		<a href="https://bsky.app/profile/emily.space">Dr. Emily Hunt</a>.
	</Question>
</Accordion.Root>

{@render children()}

<!-- The following is here for compiler reasons to help Svelte find certain links. -->
<div style="display: none">
	FYI: the following specific FAQ pages are available:
	{#each Object.keys(feedInfo) as aFeed}
		<a href="/faq/{aFeed}">{aFeed}</a>
	{/each}
</div>
