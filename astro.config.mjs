import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Ursina Engine Docs',
			customCss: [
				'./src/content/docs/reference/reference.css'
			],
			social: {
				github: 'https://github.com/pokepetter/ursina/',
			},
			sidebar: [
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Examples',
					autogenerate: { directory: 'examples' },
				},
				{
					label: 'Asset Store',
					autogenerate: { directory: 'asset-store' },
				},
			],
		}),
	],
});
