import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Argon from "./plugins/argon-kit";
import './registerServiceWorker'

Vue.config.productionTip = false;
Vue.use(Argon);


router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = [
    "",
    "register"
  ];
  const path = to.path.split("/")[1].toString();
  const authRequired = !publicPages.includes(path);
  const loggedIn = JSON.parse(localStorage.getItem("user"));

  if (authRequired && !loggedIn) {
    return next("/expired");
  }

  if (to.matched.some(record => record.meta.sa)) {
    if (loggedIn.data.code == "000" && loggedIn.data.profile == "1") {
      next();
    } else {
      store.dispatch(
        "alert/error",
        "Você não possui permissão para visualizar o conteúdo"
      );
    }
  } else {
    next();
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
