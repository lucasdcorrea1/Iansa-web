<template>
  <section class="section section-shaped section-lg my-0">
    <div class="shape shape-style-1 bg-gradient-default">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="container pt-lg-md">
      <div class="row justify-content-center">
        <div class="col-lg-5">
          <card
            type="secondary"
            shadow
            header-classes="bg-white pb-5"
            body-classes="px-lg-5 py-lg-5"
            class="border-0"
          >
            <template>
              <div class="text-muted text-center mb-3">
                <img
                  src="../../public/img/brand/logo.png"
                  class="logo"
                  alt="..."
                />
              </div>
            </template>
            <template>
              <div class="text-center text-muted mb-4">
                <small>Ou entre com suas credenciais</small>
              </div>
              <form role="form">
                <base-input
                  alternative
                  class="mb-3"
                  placeholder="Email"
                  addon-left-icon="ni ni-email-83"
                  v-model="email"
                >
                </base-input>
                <base-input
                  alternative
                  type="password"
                  placeholder="Senha"
                  addon-left-icon="ni ni-lock-circle-open"
                  v-model="password"
                >
                </base-input>

                <div class="text-center">
                  <base-button
                    type="primary"
                    class="my-4"
                    @click="handleSubmit"
                  >Entrar</base-button>
                </div>
              </form>
            </template>
          </card>
          <div class="row mt-3">
            <div class="col-6">
              <router-link
                to="/forgotpassword"
                class="text-light"
              >
                <small>Esqueceu a Senha?</small>
              </router-link>
            </div>
            <div class="col-6 text-right">
              <router-link
                to="/"
                class="text-light"
              >
                <small>Página Inicial</small>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import axios from 'axios';
export default {
  data () {
    return {
      email: "",
      password: "",
      submitted: false
    };
  },
  beforeDestroy () {
    this.password = "";
    this.email = "";
  },
  created () {
    // reset login status
    this.logout();
    window.addEventListener("keypress", e => {
      if (e.key == "Enter") {
        this.handleSubmit();
      }
    });
  },
  methods: {
    async handleSubmit () {
      if (this.email !== "" && this.password !== "") {
        const params = {
          email: this.email,
          password: this.password
        }
        await axios.post(`https://iansa-api.herokuapp.com/auth/authenticate`, params, {
          timeout: 10000
        }).then(response => {
          if (response) {
            localStorage.setItem("user", JSON.stringify(response.data));
            this.$router.push({ path: "/" });
          }
        }).catch(error => {
          alert("Erro ao realizar Login: " + error);
        })
      }
    },
    logout () {
      localStorage.removeItem("user");
    }
  }
};
</script>
<style lang="scss">
div.logo {
  width: 50% !important;
}
div.container {
  top: -100px;
}
// .login-background {
//   background-size: cover;
//   background-color: #673ab7;
//   min-height: 100vh;
// }
</style>