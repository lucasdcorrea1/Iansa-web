<template>
  <div class="col-lg-12" style="padding: 0">
    <div class="overflow-hidden">
      <b-carousel class="carousel" id="carousel1" controls indicators>
        <div v-if="slides.length">
          <b-carousel-slide class="font-title"
            v-for="(slide, index) in slides" :key="index"
            :img-src="slide.url">
            {{slide.title}}
          </b-carousel-slide>
        </div>
        <div v-else class="empty font-title">
          {{messageEmpty}}
        </div>
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
      loading: false,
      messageEmpty: 'Carregando slides...',
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
          console.log("this.slides.length = ", this.slides.length);
          this.slides.length == 0 ? this.messageEmpty = 'Não encontramos slides :(' : '';
        });
    }
  }
};
</script>
<style lang="scss">
#app {
  background-color: #f5f5f5;
}
div#carousel1___BV_inner_::after {
  content: '';
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-image: url('/img/brand/carousel-before.png');
  background-position: 0 top;
  background-size: contain;
  background-repeat: no-repeat;
}
div#carousel1___BV_inner_::before {
  content: '';
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-image: url('/img/brand/carousel-before.png');
  background-position: 0 bottom;
  background-size: contain;
  background-repeat: no-repeat;
}

.carousel {
  user-select: none;
  .empty {
    height: 500px;
    width: 100%;
    background-color: #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 30px;
    font-weight: bold;
  }
  a {
    &.carousel-control-next,
    &.carousel-control-prev {
      z-index: 1;
      padding-bottom: 15%;
      span {
        color: #000;
      }
    }
  }
  .carousel-caption {
    bottom: 20%;
    font-weight: bold;
    text-shadow: 0 1px 3px rgba(0,0,0,0.24), 0 1px 2px rgba(0,0,0,0.36);
    // -webkit-text-fill-color: white;
    // -webkit-text-stroke-width: 2px;
    // -webkit-text-stroke-color: #ec95e1;
  }
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
