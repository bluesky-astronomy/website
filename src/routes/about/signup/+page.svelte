<script>
	import Image from '$lib/blocks/Image.svelte';
</script>

<h1>Sign up to post to our feeds</h1>

<h2>Criteria</h2>

<p>
	Our feeds aim to <strong>amplify</strong> posts from scientists, science organizations, and hobbyist
	astronomers in the fields of:
</p>
<ul>
	<li>Astronomy</li>
	<li>Astrophysics</li>
	<li>Astrobiology</li>
	<li>Planetary science</li>
	<li>Astronomy education</li>
</ul>

<p>
	If that's not you, don't worry! <strong>Anyone</strong> can reply to posts in the feeds and engage
	in discussions, just you won't be able to sign up to have your posts appear there.
</p>

<h2>Signing up</h2>

<p>
	To sign up to be able to post to the feeds, you'll need to make a new post on <a
		href="https://bsky.app/">Bluesky</a
	> containing the following text:
</p>

<p
	style="font-family: var(--font-monospace); font-size: 25px; background-color: var(--color-offwhite); padding: 10px"
>
	@bot.astronomy.blue signup
</p>

<p style="margin-top: 50px">Your post should look like this:</p>

<Image src="/assets/signup/make-post.png" style="width: 100%; max-width: 500px" />

<p style="margin-top: 50px">
	Within a couple of minutes, our friendly bot should see the post and reply to it with further
	instructions:
</p>

<Image src="/assets/signup/bot-reply.png" style="width: 100%; max-width: 500px;" />

<p>
	The bot will ask you to <a href="https://github.com/bluesky-astronomy/rules"
		>accept the rules of the feeds</a
	> and explain why you'd like to sign up. After that, a moderator will verify your sign up.
</p>

<h2>Posting</h2>

<p>
	Once you're signed up, you'll be able to post to <strong>any</strong> of the feeds. Of course, please
	keep posts on-topic to each one of the feeds.
</p>

<p>
	Check out <a href="/feeds">our wide range of feeds</a> to decide where you might want to try posting
	to!
</p>
