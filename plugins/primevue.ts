import { defineNuxtPlugin } from '#app';
import PrimeVue from 'primevue/config';
import Tooltip from 'primevue/tooltip';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import ScrollPanel from 'primevue/scrollpanel';
import ContextMenu from 'primevue/contextmenu';
import TabMenu from 'primevue/tabmenu';
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.use(PrimeVue, { ripple: true });
	nuxtApp.vueApp.use(ToastService);

	// Directives
	nuxtApp.vueApp.directive('tooltip', Tooltip);

	// Components
	nuxtApp.vueApp.component('VButton', Button);
	nuxtApp.vueApp.component('VInput', InputText);
	nuxtApp.vueApp.component('VScrollPanel', ScrollPanel);
	nuxtApp.vueApp.component('VContextMenu', ContextMenu);
	nuxtApp.vueApp.component('VTabMenu', TabMenu);
	nuxtApp.vueApp.component('VToast', Toast);
});
