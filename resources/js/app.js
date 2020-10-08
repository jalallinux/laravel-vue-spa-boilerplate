require('./bootstrap');
require('bootstrap-material-design');
import PerfectScrollbar from 'vue2-perfect-scrollbar'
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'

require('./plugins/material-dashboard.min');

import router from "./router/router";
import store from './store/store';
import VueMeta from 'vue-meta';

window.Vue = require('vue');

Vue.use(VueMeta);
Vue.use(PerfectScrollbar);


const files = require.context('./components', true, /Base[A-Z]\w+\.vue$/i);
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

const app = new Vue({
    el: '#app',
    router,
    store
});
