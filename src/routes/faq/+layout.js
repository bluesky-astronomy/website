export async function load({ params }) {
	if (params.feed === undefined) {
		return {
			feed: 'astro'
		};
	}
	
	return {
		feed: params.feed
	};
}
