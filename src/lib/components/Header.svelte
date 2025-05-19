<script>
	import Image from '$lib/blocks/Image.svelte';
	import Navigation from './Navigation.svelte';
</script>

<div class="header">
	<div class="header-container">
		<div class="header-item">
			<a href="/">
				<h2 class="site-title not-on-phones">The Astrosky Ecosystem</h2>
				<h2 class="site-title not-on-tablets not-on-computers">Astrosky Ecosystem</h2>
			</a>
		</div>

		<div class="header-item not-on-tablets not-on-phones">
			<a href="/">
				<Image style="height: 50px; padding: 0px; margin: 0px;" src="/assets/logo.webp" />
			</a>
		</div>

		<div class="header-item">
			<Navigation />
		</div>
	</div>
</div>

<style>
	.header {
		height: 60px;
		border-bottom: black 1px solid;
	}
	.header-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 100%;
		max-width: 1200px;
		margin-left: auto;
		margin-right: auto;
		padding-left: 10px;
		padding-right: 10px;
	}
	.site-title {
		font-size: 30px;
		margin: 0px;
		padding: 0px;
	}

	a:link,
	a:visited,
	a:hover {
		color: var(--textColor);
	}

	/* Computers */
	@media only screen and (min-width: 1000px) {
		.not-on-computers {
			display: none;
		}
	}

	/* Tablets */
	@media screen and (min-width: 801px) and (max-width: 999px) {
		.not-on-tablets {
			display: none;
		}
		.site-title {
			font-size: 28px;
		}
	}

	/* Phones */
	@media screen and (max-width: 800px) {
		.header-container {
			padding-left: 0px;
			padding-right: 0px;
		}
		.not-on-phones {
			display: none;
		}
		.site-title {
			font-size: 25px;
		}
	}
</style>
