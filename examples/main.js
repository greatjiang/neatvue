import Vue from "vue";
import App from "./App.vue";
import "amfe-flexible";
import neatvue from "../packages";

Vue.config.productionTip = false;
Vue.use(neatvue);

new Vue({
  render: h => h(App)
}).$mount("#app");
