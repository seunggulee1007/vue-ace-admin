<template>
	<div id="app" class="wrap">
		<app-header></app-header>
		<transition name="fade">
			<router-view />
		</transition>
	</div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue';
export default {
	components: {
		AppHeader,
	},
};
</script>
<style>
@import './css/style.css';
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}
</style>
