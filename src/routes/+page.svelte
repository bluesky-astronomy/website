<script>
	import ImageWithText from '../lib/blocks/ImageWithText.svelte';

	const imageWithTextStyle = 'width: 100%; max-width: 400px';
</script>

<ImageWithText
	swap
	fullHeight
	src="/assets/bluesky-posts/rubin-variables.png"
	style={imageWithTextStyle}
>
	<h1 style="margin-top: 0px; font-size: 40px">
		Welcome to the future of outreach and discussion.
	</h1>

	<p>
		Social media is an essential part of <strong>outreach</strong> and
		<strong>discussion</strong> - too useful to be vulnerable to a rogue billionaire.
	</p>

	<p>
		That's why we're building an open <em>ecosystem</em> of online tools for the space science & astronomy
		communities.
	</p>
</ImageWithText>

<ImageWithText
	fullHeight
	src="/assets/bluesky-posts/ryan-macdonald-k218b.png"
	style={imageWithTextStyle}
>
	<h1 style="margin-top: 0px; font-size: 40px">Control your scroll.</h1>

	<p>
		Since July 2023, we've been hosting feeds containing space science content on
		<a href="https://bsky.app/profile/emily.space/feed/astro">Bluesky</a>. The feeds are
		<strong>moderated</strong> to be disinformation-free.
	</p>

	<p>
		With <strong>over a dozen</strong> feeds of astronomy, astrophysics, and planetary science content,
		the sky is the limit.
	</p>
</ImageWithText>

<ImageWithText
	swap
	fullHeight
	src="/assets/bluesky-posts/skymapsdotcom-milky-way.png"
	style={imageWithTextStyle}
>
	<h1 style="margin-top: 0px; font-size: 40px">Reach your audience.</h1>

	<p>
		With around <strong>one million views per week,</strong> we think that our feeds are a
		<em>fantastic</em> way to reach an audience of astronomers & space enthusiasts.
	</p>

	<p>
		Join over a thousand astronomers or organisations like <a
			href="https://bsky.app/profile/esa.int">the European Space Agency</a
		> in sharing content with our audience.
	</p>
</ImageWithText>

<ImageWithText
	fullHeight
	src="/assets/bluesky-posts/sky-and-telescope.png"
	style={imageWithTextStyle}
>
	<h1 style="margin-top: 0px; font-size: 40px">
		Independent.<br />Open source.<br />Free forever.
	</h1>

	<p>
		Everything powering our feeds is hosted <strong>independently</strong> from Bluesky. All of our code
		is open source.
	</p>

	<p>
		We're building out our platform so it can be permanent, and working towards <strong
			>full data autonomy</strong
		> for our community.
	</p>
</ImageWithText>

<h2>Find out more</h2>

<ul>
	<li><a href="http://localhost:5173/feeds">Check out our feeds</a></li>
</ul>
