<template>
  <section id="partners" class="section section-lg">
      <div class="container">
          <div class="row row-grid">
              <div class="col-lg-12 text-center">
                  <h2 class="mb-5 mt-5" 
                      style="font-family: 'Indie Flower',cursive;    
                        color: #ab4a9e;
                        margin: 0 0 70px;
                        font-size: 2.5rem">
                        Nossos parceiros
                  </h2>
                  <div class="partners-wrap">
                    <div class="partner" v-for="(item, index) in partners" :key="index">
                      <div>
                        <a :href="item.link" target="_blank">
                          <img v-lazy="item.image" class="img-fluid">
                        </a>
                        <!-- <h3>{{item.name}}</h3> -->
                      </div>
                    </div>
                  </div>
                  <!-- <div class="text-center">
                      <div class="row justify-content-center">
                          <div class="col-lg-2 col-4" v-for="(item, index) in partners" :key="index">
                              <a :href="item.link" target="_blank" data-toggle="tooltip"
                                  data-original-title="[Coming Soon] React - A JavaScript library for building user interfaces">
                                  <img v-lazy="item.image"
                                        class="img-fluid">
                              </a>
                          </div>
                      </div>
                  </div> -->
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
        {
          image: './img/partners/francajel.png',
          name: 'francajel',
          link: 'https://www.francajelcalcados.com.br/'
        },
        {
          image: './img/partners/chb.png',
          name: 'chb',
          link: 'https://chb.com.br/'
        },
        {
          image: './img/partners/4x4.jpg',
          name: 'GRUPO 4X4',
          link: 'https://www.facebook.com/fanpagefranca4x4/'
        },
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
  .partners-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    position: relative;
    // overflow: auto;
    overflow: hidden;
    padding: 16px;
    .partner {
      padding: 16px;
      height: 150px;
      position: relative;
      width: 100%;
      cursor: pointer;
      &:hover {
        div {
          box-shadow: 2px -1px 15px 0 rgba(0,0,0,0.1);
        }
      }
      div {
        transition: 200ms ease;
        // box-shadow: none;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 5px;
        background: #f5f5f5;
        padding: 20px;
        border-radius: 5px;
        height: 100%;
        width: 100%;
        a {
          display: flex;
          width: 100%;
          height: 100%;
          justify-content: center;
          align-items: center;
          img {
            max-width: 100%;
            max-height: 100%;
          }
        }
      }
    }
  }

  @media only screen and (min-width: 601px) {
    .partners-wrap {
      .partner { width: 50%; }
    }
  }
  @media only screen and (min-width: 993px) {
    .partners-wrap {
      .partner { width: 33.33% }
    }
  }
  @media only screen and (min-width: 993px) {
    .partners-wrap {
      .partner { width: 25% }
    }
  }
</style>
