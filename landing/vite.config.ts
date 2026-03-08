import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	resolve: {
		alias: {
			'@docs': path.resolve(__dirname, '..', 'docs'),
			'@blog': path.resolve(__dirname, '..', 'blog')
		}
	},
	server: {
		fs: {
			allow: [
				path.resolve(__dirname, '..', 'docs'),
				path.resolve(__dirname, '..', 'blog')
			]
		}
	}
});
