import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import {
  faLink,
  faTimes,
  faAngleDoubleDown,
  faGlobeAmericas,
} from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import AOS from 'aos';
import 'aos/dist/aos.css';
import App from './App.vue';

AOS.init();
library.add(faGithub, faEnvelope, faInstagram, faLink, faTimes, faAngleDoubleDown, faGlobeAmericas);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
