<script>
	let { children, padding = '30px', margin = '50px' } = $props();
</script>

<div
	class="full-width"
	style="margin-top: {margin}; margin-bottom: {margin}; padding-top: {padding}; padding-bottom: {padding}"
>
	<div class="content-width">
		{#if children}
			{@render children()}
		{/if}
	</div>
</div>

<style>
	/* 
    Insane CSS hack to get a full-width div to always cover the full screen
    https://css-tricks.com/full-width-containers-limited-width-parents/ 
    */
	.full-width {
		background-color: var(--color-offwhite);
		width: 100vw;
		position: relative;
		left: 50%;
		right: 50%;
		margin-left: -50vw;
		margin-right: -50vw;
	}
	.content-width {
		margin-left: auto;
		margin-right: auto;
		width: var(--content-width); /* PAGE WIDTH */
	}
</style>
