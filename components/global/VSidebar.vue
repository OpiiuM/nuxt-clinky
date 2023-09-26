<script lang="ts" setup></script>

<template>
	<div class="sidebar">
		<div
			v-if="$slots.header"
			class="sidebar__header"
		>
			<slot name="header" />
		</div>

		<!-- modules -->
		<div class="sidebar__body">
			<slot />
		</div>

		<div
			v-if="$slots.footer"
			class="sidebar__footer"
		>
			<slot name="footer" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.sidebar {
  display: flex;
  flex-direction: column;

	height: 100%;

	&__header {
    margin-bottom: rem($gap-small);
	}

	&__body {
	}

	&__content {
	}

	&__footer {
    margin-top: rem($gap-small);
	}
}
</style>
