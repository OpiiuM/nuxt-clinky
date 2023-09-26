module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	parserOptions: {
		ecmaVersion: 'latest',
		parser: '@typescript-eslint/parser',
		sourceType: 'module',
		project: './tsconfig',
	},
	extends: ['airbnb-base', 'airbnb-typescript/base', '@nuxtjs/eslint-config-typescript', 'plugin:vue/vue3-recommended', 'plugin:nuxt/recommended', 'plugin:prettier/recommended', 'plugin:storybook/recommended'],
	plugins: ['vue', '@typescript-eslint', 'vitest'],
	rules: {
		// semi: ['always', 'error'],
		// trailingComma: ['always', 'error'],
		// 'no-console': ['always', 'warn'],
		// 'no-debugger': ['always', 'warn'],
	},
	settings: {
		'import/resolver': {
			nuxt: {
				extensitions: ['.js', '.ts', '.vue'],
			},
		},
	},
};
