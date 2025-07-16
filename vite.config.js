import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import Icons from 'unplugin-icons/vite';
import {
	getFeedListWithBskyInfo,
	prodServerEndpoint,
	devServerEndpoint
} from './src/lib/js/flask-api';
import { renderSocialCard } from './src/lib/js/social-card';


export default defineConfig({
	plugins: [
		sveltekit(),
		Icons({
			compiler: 'svelte'
		}),
	]
});
