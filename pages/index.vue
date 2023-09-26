<script lang="ts" setup></script>

<template>
	<div class="root">
		<h1>root</h1>

		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
			necessitatibus natus labore voluptates animi iure, facilis fugiat
			distinctio maxime repudiandae nesciunt quam, eaque beatae aspernatur ipsam
			quidem quasi, unde sit?
		</p>

		<div class="container--off">
			<ul
				style="display: flex; flex-wrap: wrap; column-gap: 10px; row-gap: 10px"
			>
				<li>
					<v-button label="Some button" />
				</li>
				<li>
					<v-button
						label="link"
						link
					/>
				</li>
				<li>
					<v-button
						label="Button"
						icon="pi pi-check"
					/>
				</li>
				<li>
					<v-button label="Some button" />
				</li>
				<li>
					<v-button
						label="Secondary"
						severity="secondary"
					/>
				</li>
				<li>
					<v-button
						label="Success"
						severity="success"
					/>
				</li>
				<li>
					<v-button
						label="Info"
						severity="info"
					/>
				</li>
				<li>
					<v-button
						label="Warning"
						severity="warning"
					/>
				</li>
				<li>
					<v-button
						label="Help"
						severity="help"
					/>
				</li>
				<li>
					<v-button
						label="Danger"
						severity="danger"
					/>
				</li>
			</ul>
		</div>
	</div>
</template>
