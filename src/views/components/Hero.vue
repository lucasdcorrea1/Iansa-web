<template>
    <section class="section-hero section-shaped my-0">
        <template>
          <hooper>
            <slide>
              slide 1
            </slide>
            <slide>
              slide 2
            </slide>
          </hooper>
        </template>
        <!-- <div class="shape shape-style-1 shape-primary">
            <span class="span-150"></span>
            <span class="span-50"></span>
            <span class="span-50"></span>
            <span class="span-75"></span>
            <span class="span-100"></span>
            <span class="span-75"></span>
            <span class="span-50"></span>
            <span class="span-100"></span>
            <span class="span-50"></span>
            <span class="span-100"></span>
        </div>
        <div class="container shape-container d-flex align-items-center">
          <div class="col px-0">
            <div class="row justify-content-center align-items-center">
            </div>
        </div>
      </div> -->
    </section>
</template>
<script>
import { Hooper, Slide } from 'hooper';
import axios from 'axios';

export default {
  components: {
    Hooper,
    Slide
  },
  data() {
    return({
      slides: [],
      loading: false,
    });
  },
  methods: {
    async getSlideshow() {
      this.loading = true;
      const config = {
        methods: 'GET',
        url: 'https://iansa-api.herokuapp.com/slideshow/getall'
      }
      await 
        axios (config)
        .then(res => {
          if(res){
            this.slides = res.data;
          }  

        }).catch(err =>{
          console.log(`Erro: ${err}`);
        }).finally(()=>{
          this.loading = false;
        });
    }

  },
  created() {
    // this.getSlides();
  }
};
</script>
<style lang="scss">
  button.teste {
    background-color: blue;
    &:disabled {
      background-color: blueviolet;
    }
  }
</style>
