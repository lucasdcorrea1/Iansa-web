<template>
   <section id="partners" class="section section-lg">
            <div class="container">
                <div class="row row-grid justify-content-center">
                    <div class="col-lg-8 text-center">
                        <h2 class="mb-5 mt-5" 
                            style="font-family: 'Indie Flower',cursive;    
                              color: #ab4a9e;
                              margin: 0 0 70px;
                              font-size: 2.5rem">
                              Nossos parceiros
                        </h2>
                        <div class="text-center">
                            <div class="row justify-content-center">
                                <div class="col-lg-2 col-4" v-for="(item, index) in partners" :key="index">
                                    <a :href="item.link" target="_blank" data-toggle="tooltip"
                                       data-original-title="[Coming Soon] React - A JavaScript library for building user interfaces">
                                        <img v-lazy="item.image"
                                             class="img-fluid">
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>
<script>
export default {
  data() {
    return {
      partners: [
        {
          image: './img/partners/cloudmed.png',
          name: 'cloudmed',
          link: 'https://cloudmed.io/'
        },
        {
          image: './img/partners/allmark.jpg',
          name: 'allmark',
          link: 'https://www.allmark.com.br/'
        },
        // {
        //   image: './img/partners/francajel.png',
        //   name: 'francajel',
        //   link: 'https://www.francajelcalcados.com.br/'
        // },
        // {
        //   image: './img/partners/chb.png',
        //   name: 'chb',
        //   link: 'https://chb.com.br/'
        // },
        {
          image: './img/partners/4x4.jpg',
          name: 'GRUPO 4X4',
          link: 'https://www.facebook.com/fanpagefranca4x4/'
        }
      ]
    };
  },
  methods: {
    handleAction(link) {
      window.open(link,'_blank');
    }
  }
};
</script>
<style lang="scss">
</style>
