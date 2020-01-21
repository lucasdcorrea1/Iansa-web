<template>
  <div class="col-lg-12" style="padding: 0">
    <div class="overflow-hidden">
      <!-- <pre>
        {{slides}}
      </pre> -->
      <!-- <div v-for="(slide, index) in slides" :key="index">
        {{slide.title}}
      </div> -->
      <b-carousel class="carousel" id="carousel1" controls indicators>
        <b-carousel-slide 
          v-for="(slide, index) in slides" :key="index"
          :img-src="slide.url">
          {{slide.title}}
        </b-carousel-slide>
        <!-- Text slides with image -->
        <!-- <b-carousel-slide img-src="img/theme/img-1-1200x1000.jpg">Legenda</b-carousel-slide>
        <b-carousel-slide img-src="img/theme/img-2-1200x1000.jpg">Legenda</b-carousel-slide> -->
      </b-carousel>
    </div>
  </div>
  <!-- <section class="section section-lg section-shaped overflow-hidden my-0">
        <div class="shape shape-style-1 shape-default shape-skew">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container py-0 pb-lg">
            <div class="row justify-content-between align-items-center">
                <div class="col-lg-5 mb-5 mb-lg-0">
                    <h1 class="text-white font-weight-light">Bem vindo!</h1>
                    <p class="lead text-white mt-4">Fique por dentro de todas as novidades do IANSA</p>
                    <a href="https://demos.creative-tim.com/argon-design-system/docs/components/alerts.html"
                       class="btn btn-white mt-4">Eventos</a>
                </div>
                <div class="col-lg-12 mb-lg-auto">
                    <div class="rounded shadow-lg overflow-hidden">
                        <b-carousel id="carousel1"
                                    controls
                                    indicators>
                            Text slides with image
                            <b-carousel-slide img-src="img/theme/img-1-1200x1000.jpg">
                                Legenda
                            </b-carousel-slide>
                            <b-carousel-slide img-src="img/theme/img-2-1200x1000.jpg">
                                Legenda
                            </b-carousel-slide>
                        </b-carousel>
                    </div>
                </div>
            </div>
        </div>
  </section>-->
</template>
<script>
import axios from 'axios';
import { BCarousel } from "bootstrap-vue/esm/components/carousel/carousel";
import { BCarouselSlide } from "bootstrap-vue/esm/components/carousel/carousel-slide";

export default {
  components: {
    BCarousel,
    BCarouselSlide
  },
  data() {
    return {
      slides: [],
      loading: false
    };
  },
  created() {
    this.getSlides();
  },
  methods: {
    async getSlides() {
      this.loading = true;
      const config = {
        methods: "GET",
        url: "https://iansa-api.herokuapp.com/slideshow/getall"
      };
      await axios(config)
        .then(res => {
          if (res) {
            this.slides = res.data;
          }
        })
        .catch(err => {
          console.error(err);
        })
        .finally(() => {
          this.loading = false;
        });
    }
  }
};
</script>
<style lang="scss">
#app {
  background-color: #f5f5f5;
}
div#carousel1___BV_inner_::before {
  content: '';
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  bottom: -10px;
  z-index: 1;
  background-image: url('/img/brand/carousel-before.png');
  background-position: 0 bottom;
  background-size: contain;
  background-repeat: no-repeat;
}
.carousel {
  .carousel-item {
    max-height: 600px;
    // min-height: 600px; 
  }
}
</style>
