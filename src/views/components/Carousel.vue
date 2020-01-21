<template>
  <div class="col-lg-12" style="padding: 0">
    <div class="overflow-hidden">
      <b-carousel class="carousel" id="carousel1" controls indicators>
        <b-carousel-slide 
          v-for="(slide, index) in slides" :key="index"
          :img-src="slide.url">
          {{slide.title}}
        </b-carousel-slide>
      </b-carousel>
    </div>
  </div>
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
  // bottom: -10px;
  z-index: 1;
  background-image: url('/img/brand/carousel-before.png');
  background-position: 0 bottom;
  background-size: contain;
  background-repeat: no-repeat;
}

.carousel {
  .carousel-indicators {
    li {
      background-color: #ec95e1;
      border: 1px solid #f5f5f5;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      outline: none;
      &.active {
        box-shadow: 0 1px 3px rgba(0,0,0,0.24), 0 1px 2px rgba(0,0,0,0.36);
        background-color: #ab4a9e;
      }
    }
  }
  .carousel-item {
    max-height: 600px;
    // min-height: 600px; 
  }
}
</style>
