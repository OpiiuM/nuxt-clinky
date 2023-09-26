// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: false,

	devtools: {
		enabled: true,
	},

	typescript: {
		strict: true,
	},

	modules: [
		// '@nuxtjs/eslint-module',
		// '@nuxtjs/stylelint-module',
		'nuxt-vitest',
	],

	build: {
		transpile: ['primevue'],
	},

	components: {
		global: false,
		dirs: [{
			path: '@/components/global',
			prefix: 'v-',
		}],
	},

	css: [
		'assets/scss/style.scss',
	],

	vite: {
		define: {
			APP_URL: JSON.stringify(process.env.APP_URL || 'http://localhost'),
			API_BASE_URL: JSON.stringify(process.env.API_BASE_URL || 'http://localhost/api/v1'),
		},
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `
            @use "sass:math";
            @use "sass:list";
            @import "assets/scss/abstracts/_functions.scss";
            @import "assets/scss/abstracts/_mixins.scss";
            @import "assets/scss/abstracts/_variables.scss";
          `,
				},
			},
		},
	},
});
