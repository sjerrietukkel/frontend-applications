import "@babel/polyfill";
import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";

import VeeValidate from "vee-validate";
Vue.use(VeeValidate);

Vue.config.productionTip = false;

import router from "./router";

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
