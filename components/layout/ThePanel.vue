<script lang="ts" setup>
import { type expandSidebarType } from 'types';

type Props = {
	isActiveLeft: boolean,
	isActiveRight: boolean,
}

const props = defineProps<Props>();

defineEmits<{
	(e: 'expand', type: expandSidebarType): void;
}>();
</script>

<template>
	<div class="panel">
		<v-button
			class="panel__action"
			icon="pi pi-bars"
			size="small"
			severity="secondary"
			:outlined="props.isActiveLeft"
			rounded
			@click="$emit('expand', 'left')"
		/>

		<div class="panel__wrapper">
			<ul>
				<li style="display: inline-block; margin-right: 16px;">
					<nuxt-link to="/" style="color: #fff;">home</nuxt-link>
				</li>
				<li style="display: inline-block; margin-right: 16px;">
					<nuxt-link to="/linkmarks" style="color: #fff;">linkmarks</nuxt-link>
				</li>
				<li style="display: inline-block; margin-right: 16px;">
					<nuxt-link to="/notemarks" style="color: #fff;">notemarks</nuxt-link>
				</li>
				<li style="display: inline-block;">
					<nuxt-link to="/profile/515" style="color: #fff;">profile</nuxt-link>
				</li>
			</ul>
		</div>

		<v-button
			class="panel__action"
			icon="pi pi-bars"
			size="small"
			severity="secondary"
			:outlined="props.isActiveRight"
			rounded
			@click="$emit('expand', 'right')"
		/>
	</div>
</template>

<style lang="scss" scoped>
.panel {
	display: flex;
	align-items: center;
	justify-content: space-between;

	width: 100%;
	height: rem(60px);
	padding: rem($gap-mini);

	background-color: $mine-shaft;

	@media #{$screen-laptop} {
		padding: rem($gap-small);
	}

	&__action {
		flex-shrink: 0;
	}

	&__wrapper {
		display: none;
		flex-grow: 1;
		@include text-truncate;

		padding: 0 rem($gap-small);

		text-align: center;

		color: $white;

		@media #{$screen-tablet} {
			display: block;
		}

		@media #{$screen-laptop} {
			padding: 0 rem($gap);
		}
	}
}
</style>
