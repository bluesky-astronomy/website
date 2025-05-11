export async function getFeedList() {
	const response = await fetch('https://feed-all.astronomy.blue/api/app.getFeedList');
	return await response.json();
}
