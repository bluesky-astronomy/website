<script>
	import { page } from '$app/stores';
	import Icon from '$lib/blocks/Icon.svelte';
	let { textColor } = $props();

	function pathIs(string) {
		return $page.url.pathname === string;
	}

	function pathStartsWith(string) {
		return $page.url.pathname.startsWith(string);
	}

	const currentPageColor = $derived(
		textColor === 'white' ? 'var(--color-lightgrey)' : 'var(--color-accent)'
	);

	// System to toggle menu between display 'none' or 'flex'
	let menuDisplay = $state('none');
	function toggleMenu() {
		menuDisplay = menuDisplay === 'none' ? 'flex' : 'none';
	}

	// Hide the menu when we change page
	let lastPage = $page.url.pathname;
	$effect(() => {
		if ($page.url.pathname !== lastPage) {
			menuDisplay = 'none';
		}
	});
</script>

<!-- Both Menu Options -->
<div class="hamburger">
	<button
		onclick={toggleMenu}
		style="border: none; background-color: rgba(0, 0, 0, 0); color: {textColor}"
	>
		<Icon name="hamburger" style="height: 60px; width: 60px" />
	</button>
</div>

<div
	class="navigation"
	style:--textColor={textColor}
	style:--currentPageColor={currentPageColor}
	style="display: {menuDisplay}"
>
	<!-- <a href="/" class:current-page={pathIs('/')}>Home</a> -->
	<a href="/feeds/" class:current-page={pathStartsWith('/feeds')}>Feeds</a>
	<a href="/faq/" class:current-page={pathStartsWith('/faq')}>FAQ</a>
	<a href="/blog/" class:current-page={pathStartsWith('/blog')}>News</a>
	<a href="/about/" class:current-page={pathStartsWith('/about')}>About</a>
	<a href="https://github.com/bluesky-astronomy"><Icon name="github" /></a>
</div>

<style>
	.navigation {
		margin-left: auto;
		margin-right: auto;
		flex-flow: row wrap;
		justify-content: center;
		justify-items: center;
		padding-top: 10px;
		padding-bottom: 10px;
	}
	.navigation > a:link,
	.navigation > a:visited {
		color: var(--textColor);
	}
	.navigation > a:hover {
		color: var(--currentPageColor);
	}
	.current-page {
		color: var(--currentPageColor) !important;
	}
	.navigation > a {
		font-size: 18pt;
		font-weight: 650;
	}
	.hamburger {
		z-index: 100;
		position: absolute;
		top: 0px;
		right: 2.5vw;
		width: 25vw;
		text-align: right;
		/* border-bottom: 1px solid var(--textColor); */
	}

	/* Computers */
	@media only screen and (min-width: 801px) {
		.hamburger {
			display: none;
		}
		.navigation {
			display: flex !important;
		}
		.navigation > a:not(:first-child) {
			margin-left: 30px;
		}
	}
	/* Tablets */
	/* @media screen and (min-width: 801px) and (max-width: 999px) {
		.hamburger {
			display: none;
		}
		.navigation {
			display: flex !important;
		}
		.navigation > a:not(:first-child) {
			margin-left: 30px;
		}
	} */
	/* Phones */
	@media screen and (max-width: 800px) {
		.navigation {
			display: none;
			z-index: 100;
			background-color: var(--color-offwhite);
			border-left: 1px solid var(--textColor);
			position: absolute;
			width: 65vw;
			right: 2.5vw;
			flex-flow: column;
			text-align: right;
			overflow: hidden;
			margin-top: 31px;

			/* Things to turn off when menu opened */
			/* border-bottom: 0px solid var(--textColor);
			padding: 0px;
			height: 0px; */
		}
		.current-page {
			color: var(--color-accent) !important;
		}
		.navigation > a {
			margin-right: 10px;
			font-size: 30px;
			font-weight: 650;
		}
		.navigation > a:not(:first-child) {
			margin-top: 15px;
		}
		/* .navigation > a:link,
        .navigation > a:visited {
            color: black;
        } */
		.navigation > a:hover {
			color: var(--color-accent) !important;
		}
	}
</style>
