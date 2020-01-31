<template>
  <div class="col-lg-12" style="padding: 0">
    <div class="overflow-hidden">
      <b-carousel class="carousel" id="home" controls indicators>
        <div>
          <b-carousel-slide class="font-title"
            v-for="(partner, index) in partners" :key="index"
            :img-src="partner.image">
            {{partner.name}}
          </b-carousel-slide>
        </div>
      </b-carousel>
    </div>
  </div>
</template>
<script>
import { BCarousel } from "bootstrap-vue/esm/components/carousel/carousel";
import { BCarouselSlide } from "bootstrap-vue/esm/components/carousel/carousel-slide";

export default {
  components: {
    BCarousel,
    BCarouselSlide
  },
  data() {
    return {
      partners: [
        {
          image: '../img/partners/LOGO_TRANSPARENTE_FUNDO_AZUL_RGB.png',
          name: 'CloudMed'
        },
        {
          image: '../img/partners/LOGO_TRANSPARENTE_FUNDO_AZUL_RGB.png',
          name: 'CloudMed'
        }
      ],
      loading: false,
      messageEmpty: 'Carregando slides...',
    };
  },
  created() {
  },
  methods: {
   
  }
};
</script>
<style lang="scss">

</style>
