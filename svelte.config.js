import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const dev = process.env.NODE_ENV !== 'production';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),
	kit: {
		adapter: adapter({
			fallback: 'index.html',
			pages: 'docs',
			assets: 'docs'
		}),
		alias: {
			$services: './src/services'
		},
		paths: {
			// change below to your repo name
			base: dev ? '' : '/ufsbd'
		}
	}
};

export default config;
