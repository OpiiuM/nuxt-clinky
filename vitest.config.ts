/// <reference types="vitest">
import { defineVitestConfig } from 'nuxt-vitest/config';

export default defineVitestConfig({
	test: {
		environment: 'nuxt',
		globals: true,
	},
});
