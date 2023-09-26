<script lang="ts" setup>
// SEO
</script>

<template>
  <div class="app">
		<nuxt-layout>
			<nuxt-page />
		</nuxt-layout>
  </div>
</template>

<style lang="scss">
.app {
	display: flex;
	overflow: hidden;

	width: 100vw;
	min-height: 100vh;

	@media #{$screen-desktop} {
		overflow: initial;
	}
}
</style>
