// Utilities to render social cards. Intended for use at build time.

import satori from 'satori';
import { html as toReactNode } from 'satori-html';
import { Resvg } from '@resvg/resvg-js';
import { readFileSync } from 'fs';

export function readImageBase64(image) {
	return 'data:image/png;base64,' + readFileSync(image).toString('base64');
}

const height = 630;
const width = 1200;

export async function renderSocialCard(text, image, fontData) {
	const element = getHTML(text, image);
	const svg = await satori(element, { fonts: fontData, height, width });

	const resvg = new Resvg(svg, {
		fitTo: {
			mode: 'width',
			value: width
		}
	});
	return resvg.render().asPng();
}

function getHTML(text, image) {
	const imageHeight = 87;
	const maxLength = 26;
	const maxFontSize = 65;

	let fontSize = maxFontSize;
	if (text.length > maxLength) {
		fontSize = (maxFontSize * maxLength) / text.length;
	}

	// Unfortunately, this is a pain to use - satori expects JSX, and going from
	// "Svelte->HTML String->JSX" is a bit of a pain, so instead we just go
	// "HTML String -> JSX"...
	// Todo improve this piece of crap, preferably with a Svelte component that gets converted to HTML (see earlier commits for examples using svelte render)
	// 	<div
	// 	style="
	//     display: flex;
	//     height: ${imageHeight}%;
	//     width: 100%;
	//     background-color: black;
	//     background-image: url("${image}");
	//     background-size: cover;
	//     "
	// ></div>
	return toReactNode`
<img
	src="${image}"
	style="
    height: ${imageHeight}%; 
    width: 100%;
	object-fit: cover;
    "
/>

<div
	style="
    display: flex; 
    flex-direction: row; 
    font-size: 40px; 
    height: ${100 - imageHeight}%; 
    width: 100%; 
    align-items: center; 
    justify-content: space-between; 
    text-align: center; 
    gap: 0px;
    color: white;
    background-color: #191919ff;
    padding-left: 20px;
    padding-right: 20px;
    "
>
    <div style="display: flex; gap: 20px; flex-direction: row; align-items: center; justify-content: center;">
		<p style="width: 180px; font-size: 30px; font-weight: bold; line-height: 100%; font-family: Bold; text-align: center;">
			The Astrosky Ecosystem
		</p>
		<h1 style="font-size: 50px; margin: 0px; padding: 0px;">
			|
		</h1>
	</div>

	<h1
		style="
    	font-size: ${fontSize}px; 
    	padding: 0px;
    	margin: 0 0 8px 0;
		"
	>
		${text}
	</h1>
</div>`;
}
