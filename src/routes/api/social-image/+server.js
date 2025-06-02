import satori from 'satori';
import { html as toReactNode } from 'satori-html';
import { Resvg } from '@resvg/resvg-js';
import { read } from '$app/server';
import { render } from 'svelte/server';
import RethinkSans from '$lib/assets/fonts/RethinkSans-Medium.ttf';
import RethinkSansBold from '$lib/assets/fonts/RethinkSans-Bold.ttf';
import Card from '$lib/components/SocialCard.svelte';

const fontData = read(RethinkSans).arrayBuffer();
const boldFontData = read(RethinkSansBold).arrayBuffer();

const height = 630;
const width = 1200;

/** @type {import('./$types').RequestHandler} */
export const GET = async () => {
	
    const result = render(Card);
    const element = toReactNode(`${result.body}`);

	// const html = {
	// 	type: 'div',
	// 	props: {
	// 		children: 'hello, world',
	// 		style: { color: 'red' }
	// 	}
	// };
	const data = await fontData;
    const boldData = await boldFontData;
    // console.log(boldData)
	const svg = await satori(element, {
		fonts: [
			{
				name: 'Rethink Sans',
				data: data,
				style: 'normal'
			},
            {
				name: 'Bold',
				data: boldData,
				style: 'bold'
			}
		],
		height,
		width
	});

	const resvg = new Resvg(svg, {
		fitTo: {
			mode: 'width',
			value: width
		}
	});

	const image = resvg.render();

	return new Response(image.asPng(), {
		headers: {
			'content-type': 'image/png'
		}
	});
};
