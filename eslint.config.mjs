import pluginJs from "@eslint/js";
import pluginAstro from "eslint-plugin-astro";
import globals from "globals";
import pluginTs from "typescript-eslint";

export default [
	{ ignores: ["src/env.d.ts"] },
	{ files: ["**/*.{astro,js,mjs,cjs,ts}"] },
	{ languageOptions: { globals: { ...globals.browser, ...globals.node } } },
	pluginJs.configs.recommended,
	...pluginTs.configs.recommended,
	...pluginAstro.configs.recommended,
];
