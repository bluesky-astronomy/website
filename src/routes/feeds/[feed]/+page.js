export async function load({ params }) {
	return {
		feed: params.feed,
		pageMeta: {
			image: `/social-cards/feeds/${params.feed}.png`
		}
	};
}
