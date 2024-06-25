/** @type {import("prettier").Config} */
export default {
	arrowParens: "always",
	bracketSameLine: false,
	bracketSpacing: true,
	endOfLine: "lf",
	printWidth: 80,
	quoteProps: "as-needed",
	semi: true,
	singleQuote: false,
	trailingComma: "all",

	plugins: ["prettier-plugin-astro"],
	overrides: [
		{
			files: "*.astro",
			options: { parser: "astro" },
		},
	],
};
