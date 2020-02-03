import Vue from "vue";
import VueSmoothScroll from 'vue-smooth-scroll';
import App from "./App.vue";
import router from "./router";
import Argon from "./plugins/argon-kit";
import './registerServiceWorker'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false;
Vue.use(Argon);
Vue.use(VueSmoothScroll);
Vue.use(VueLazyload)


router.beforeEach((to, from, next) => {
  //redirect to login page if not logged in and trying to access a restricted page
  const publicPages = [
    "registerEvents",
    "register",
    "registertranparency"
  ];
  const path = to.path.split("/")[1].toString();
  const authRequired = publicPages.includes(path);
  const loggedIn = JSON.parse(localStorage.getItem("user"));

  if (authRequired && !loggedIn) {
    return next("/");
  } else {
    next();
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
