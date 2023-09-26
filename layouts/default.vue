<script lang="ts" setup>
import { type expandSidebarType } from 'types';
import ThePanel from '@/components/layout/ThePanel.vue';

const isAuth = ref(false);
const isAdmin = ref(false);

const isOpenBar = reactive({
	left: false,
	right: false,
});

const handleExpand = (expandType: expandSidebarType): void => {
	isOpenBar[expandType] = !isOpenBar[expandType];
};
</script>

<template>
	<div class="layout layout--default">
		<div class="layout__panel">
			<the-panel
				:is-active-left="isOpenBar.left"
				:is-active-right="isOpenBar.right"
				@expand="handleExpand"
			/>
		</div>

		<div class="layout__container">
			<div class="layout__sidebar-wrapper">
				<v-sidebar class="layout__sidebar layout__sidebar--left">
					<template #header>
						sidebar #1
					</template>

					content #1

					<template #footer>
						footer #1
					</template>
				</v-sidebar>
			</div>

			<div class="layout__content">
				<div class="layout__container container">
					<slot />
				</div>
			</div>

			<div class="layout__sidebar-wrapper">
				<v-sidebar class="layout__sidebar layout__sidebar--right">
					<template #header>
						sidebar #2
					</template>

					content #2

					<template #footer>
						footer #2
					</template>
				</v-sidebar>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.layout {
	position: relative;

	display: flex;
	flex-direction: column;

	width: 100%;

	&__panel {
		flex-shrink: 0;
	}

	&__container {
		position: relative;

		display: flex;
		flex-grow: 1;
	}

	&__sidebar {
		&--left {}

		&--right {}

		&-wrapper {
			display: none;

			height: 100%;

			@media #{$screen-tablet} {
				display: block;
				flex-shrink: 0;

				width: math.percentage(math.div(1, 5));
			}
		}
	}

	&__content {
		flex-grow: 1;

		padding: rem($gap-small);

		@media #{$screen-tablet} {
			padding: rem($gap);
		}
	}
}
</style>
