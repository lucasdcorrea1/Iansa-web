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
                                            placeholder="E-mail"
                                            addon-left-icon="ni ni-email-83"
                                            v-model="email">
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
                                <small>Home</small>
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
        submitButton: false
   };
  },
  beforeDestroy () {
    this.email = "";
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
        this.submitButton = true;
        const config = {
                data: {email: this.email},
                method: "POST",
                headers: {
			        "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
                    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
		        }
            };

        await axios(`https://iansa-api.herokuapp.com/auth/forgotpassword`, config, {
        }).then(res => {
            if (res) {
            Vue.$toast.open({
                message: 'Enviamos o token de autorização para o e-mail '+ this.email,
                type: 'success',
            });
                this.$router.push({ path: "/resetpassword" });
            }
        }).catch(error => {
            Vue.$toast.open({
                message: error.response.data.error,
                type: 'error',
            });
        }).finally(() => {
            this.submitButton = false;
        });
      }else{
        Vue.$toast.open({
            message: 'Informe um e-mail válido!',
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