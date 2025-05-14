export async function getFeedList() {
	// const response = await fetch('https://feed-all.astronomy.blue/api/app.getFeedList');
	const response = await fetch('http://127.0.0.1:8000/api/app.getFeedList');
	return await response.json();
}
