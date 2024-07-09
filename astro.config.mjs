import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
	site: "https://docs.tabtastic.net",

	integrations: [
		starlight({
			title: "Tabtastic Docs",
			logo: {
				dark: "./src/assets/wordmark-dark.svg",
				light: "./src/assets/wordmark-light.svg",
				replacesTitle: true,
			},
			editLink: {
				baseUrl: "https://github.com/Tabtastic/docs/edit/main/docs/",
			},
			social: {
				discord: "https://discord.gg/6UEYkQW",
				github: "https://github.com/Tabtastic/docs",
				facebook: "https://www.facebook.com/TabtasticApp",
				youtube: "https://www.youtube.com/@tabtasticapp/videos",
			},
			sidebar: [
				{
					label: "Guides",
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: "Example Guide", link: "/guides/example/" },
					],
				},
				{
					label: "Reference",
					autogenerate: { directory: "reference" },
				},
			],
		}),
	],
});
