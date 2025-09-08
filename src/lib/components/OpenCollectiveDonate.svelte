<script>
	let { divWidth = 'max-content', height = undefined } = $props();

    // const finalWidth = width != undefined ? `width=${width}` : '';
    const queryString = height != undefined ? `?avatarHeight=${height}` : '';
    // const queryString = height != undefined || width != undefined ? `?`
</script>

<div style="width: 100%">
    <div style="width: {divWidth}; margin-left: auto; margin-right: auto">
        <object
            title="Become a Backer on Open Collective"
            type="image/svg+xml"
            style="margin: 0px"
            data="https://opencollective.com/the-astrosky-ecosystem/tiers/backers.svg{queryString}"
        ></object>
    </div>
</div>
