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
                                            placeholder="Email"
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
                                        @click="submit()">
                                        Create account
                                    </base-button>
                                </div>
                            </form>
                        </template>
                    </card>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import axios from 'axios';
export default {
  data: () => {
    return {
        name: '',
        email: '',
        password: ''
   }
  },
//   beforeDestroy () {
//     this.form.password = "";
//     this.form.email = "";
//     this.form.name = "";
//   },
  created () {
  },
  methods: {
    async submit () {
        const formSubmit = {
          name: this.name,
          email: this.email,
          password: this.password
        }
        if(this.name.length && this.email.length && this.password.length){
            const config = {
                data: formSubmit,
                method: "POST",
                headers: {Authorization:`${JSON.parse(localStorage.getItem("user")).token}`} 
            }
            await axios('https://iansa-api.herokuapp.com/auth/register', config)
            .then(res => {
                if (res) {
                    alert(res.data);
                }
            })
            .catch(err => {
                alert(err);
            })
            .finally(() => {
                // this.loading = false;
            });
        }
    },
  }
};
</script>
<style>
</style>
