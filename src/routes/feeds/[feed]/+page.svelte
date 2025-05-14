<!-- svelte-ignore non_reactive_update -->
<script>
	import Image from '$lib/blocks/Image.svelte';
	import { siteTitle } from '$lib/config.js';
	import { formatDate } from '$lib/js/dates';
	let { data } = $props();

	const feed = data.feed;
</script>

<h1>The {String(feed[0]).toUpperCase() + String(feed).slice(1)} Feed</h1>

<p>Contains all posts containing TODO</p>
