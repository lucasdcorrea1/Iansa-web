<template>
    <section class="login-background section section-shaped section-lg my-0" style="z-index:10">
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
                    <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 py-lg-5"
                          class="border-0">
                        <template>
                            <div class="text-muted text-center mb-3">
                                <img src="../../public/img/brand/logo.png" class="logo" alt="..." />
                            </div>
                        </template>
                        <template>
                            <div class="text-center text-muted mb-4">
                                <small>Or sign in with credentials</small>
                            </div>
                            <form role="form">
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Email"
                                            addon-left-icon="fa fa-envelope"
                                            type="email"
                                            v-model="email">
                                </base-input>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Token"
                                            addon-left-icon="fa fa-key"
                                            v-model="token">
                                </base-input>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Senha"
                                            addon-left-icon="fa fa-unlock"
                                            type="password"
                                            v-model="password">
                                </base-input>
                                <div class="text-center">
                                    <base-button 
                                        :disabled="submitButton"
                                        type="primary" 
                                        class="my-4"
                                        @click="submit()">
                                        ENVIAR
                                    </base-button>
                                </div>
                            </form>
                        </template>
                    </card>
                    <div class="row mt-3">
                        <div class="col-6">
                            <router-link to="/login" class="text-light">
                                <small>Login</small>
                            </router-link>
               
                        </div>
                        <div class="col-6 text-right">
                            <router-link to="/" class="text-light">
                                <small>home</small>
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
import Vue from 'vue';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/index.css';

export default {
  data: () => {
    return {
        email: '',
        token: '',
        password: '',
        submitButton: false
   };
  },
  beforeDestroy () {
    this.email = "";
    this.token = "";
    this.password = "";
  },
  created () {
    Vue.use(VueToast, {position: 'top-right'});
    window.addEventListener("keypress", e => {
      if (e.key == "Enter") {
        this.submit();
      }
    });
  },
  methods: {
    async submit () {
      if (this.email.length) {
          const parameters = {
              email: this.email,
              token: this.token,
              password: this.password
          }
        const config = {
                data: parameters,
                method: "PUT",
                mode: 'no-cors',
                headers: {
			        'Access-Control-Allow-Origin': '*',
			        Accept: 'application/json',
			        'Content-Type': 'application/json',
		        }
            };

        await axios(`https://iansa-api.herokuapp.com/auth/resetpassword`, config, {
        }).then(res => {
            if (res) {
            Vue.$toast.open({
                message: 'Senha alterada com sucesso!',
                type: 'success',
            });
                this.$router.push({ path: "/login" });
            };
        }).catch(err => {
            Vue.$toast.open({
                message: 'Não foi possivel realizar a troca de senha!',
                type: 'error',
            });
        });
      }else{
        Vue.$toast.open({
            message: 'Existem campos vázios!',
            type: 'error',
        });
      }
    },
  }
};
</script>
<style lang="scss">
    img.logo {
        width: 50%;
    }
    div.container {
        top: -100px;
    }
</style>