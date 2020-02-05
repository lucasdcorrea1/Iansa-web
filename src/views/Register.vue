<template>
    <section class="section section-shaped section-lg my-0" style="z-index:10">
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
                <img
                  src="../../public/img/brand/logo.png"
                  class="logo"
                  alt="..."
                />
              </div>
            </template>
                        <template>
                            <form role="form">
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Name"
                                            addon-left-icon="ni ni-hat-3"
                                            v-model="name">
                                </base-input>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="E-mail"
                                            addon-left-icon="ni ni-email-83"
                                            v-model="email">
                                </base-input>
                                <base-input alternative
                                            type="password"
                                            placeholder="Password"
                                            addon-left-icon="ni ni-lock-circle-open"
                                            v-model="password">
                                </base-input>
                                <div class="text-center">
                                    <base-button 
                                        type="primary" 
                                        class="my-4"
                                        :disabled="submitButton"
                                        @click="submit()">
                                        Cadastrar
                                    </base-button>
                                </div>
                            </form>
                        </template>
                    </card>
                     <div class="row mt-3">
            <div class="col-6">
              <router-link
                to="/login"
                class="text-light"
              >
                <small>login</small>
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
 import Vue from 'vue';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/index.css';

export default {
  data: () => {
    return {
        name: '',
        email: '',
        password: '',
        submitButton: false
   }
  },
//   beforeDestroy () {
//     this.form.password = "";
//     this.form.email = "";
//     this.form.name = "";
//   },
  created () {
       Vue.use(VueToast, {position: 'top-right'});
  },
  methods: {
    async validParameters() {
        if(!this.email.length){
          Vue.$toast.open({
            message: 'Campo email esta vázio!',
            type: 'error',
          });
          return false;
        }
        if(!this.name.length){
          Vue.$toast.open({
            message: 'Campo nome esta vázio!',
            type: 'error',
            });
            
            return false;
        }
        if(!this.password.length){
          Vue.$toast.open({
            message: 'Campo password esta vázio!',
            type: 'error',
          });
          return false;
        }
      return true;
    },
    async submit () {
        if(await this.validParameters()){
        this.submitButton = true;
            const formSubmit = {
                name: this.name,
                email: this.email,
                password: this.password
            };
            const config = {
                data: formSubmit,
                method: "POST",
                headers: {Authorization:`${JSON.parse(localStorage.getItem("user")).token}`} 
            };
            await axios('https://iansa-api.herokuapp.com/auth/register', config)
            .then(res => {
                if (res) {
                    Vue.$toast.open({
                        message: 'Usuário cadastrado com sucesso!',
                        type: 'success',
                    });
                }
            })
            .catch(error => {
                Vue.$toast.open({
                  message: error.response.data.error,
                  type: 'error',
                });
            })
            .finally(() => {
                this.submitButton = false;
            });
        
      }
    },
  }
};
</script>
<style>
</style>
