import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Unicon from 'vue-unicons'
import { uniFacebookF, uniBars, uniInstagram, uniYoutube, uniExternalLinkAlt } from 'vue-unicons/dist/icons'
Unicon.add([uniFacebookF, uniBars, uniInstagram, uniYoutube, uniExternalLinkAlt])

createApp(App).use(router).use(Unicon).mount('#app');
