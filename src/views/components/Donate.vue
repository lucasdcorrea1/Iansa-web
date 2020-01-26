<template>
  <section class="section section section-shaped my-0 overflow-hidden">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="row row-grid text-center">
            <div class="col-lg-4 font-title" v-for="(item, index) in cards" :key="index">
              <card 
                class="border-0"
                hover
                shadow
                body-classes="py-5"
                @click.native="handleAction(item.btnLink)"
                :style="`background-image: ${item.bgImage}`">
                <img :src="`img/brand/${item.img}`" />
                <h6 class="text-uppercase">{{item.title}}</h6>
                <div class="col-lg-12">
                  <h3 class="donate-value" rounded>{{item.value}}</h3>
                </div>
                <div>
                  <badge type="primary" rounded>Mensais</badge>
                </div>
                <base-button
                  tag="a"
                  target="_blank"
                  :href="item.btnLink"
                  class="mt-4 btn-donate"
                >
                  Assinar
                </base-button>
              </card>
              <!-- <pre> {{cards}} </pre> -->
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
      cards: [
        {
          img: 'help.png',
          title: 'Plano carinho',
          value: 'R$25,00',
          btnLink: 'https://pag.ae/blg8gQG',
          color: '#f64c65',
          bgImage: 'linear-gradient(45deg, #2dce89 0, #2dcecc 100%)',
        },
        {
          img: 'happiness.png',
          title: 'Plano Feliciade',
          value: 'R$50,00',
          btnLink: 'https://pag.ae/bkg8gPn',
          color: ' #1aae6f;',
          bgImage: 'linear-gradient(45deg, #fb6340 0, #fbb140 100%)',
        },
        {
          img: 'love.png',
          title: 'Plano Amor',
          value: 'R$100,00',
          btnLink: 'https://pag.ae/bfg8gNp',
          color: '#f64c65',
          bgImage: 'linear-gradient(45deg, #2196F3 0px, #4FC3F7 70%)',
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
.card-body {
  cursor: pointer;
  img {
    max-width: 70px;
  }
  h6 {
    color: #f5f5f5;
    font-weight: bold;
    font-size: 20px;
    margin-top: 16px;
  }
  span {
    color: #FF5722;
    background-color: #f5f5f5;
    font-size: 18px;
  }
  .donate-value {
    font-size: 52px;
    font-weight: 600;
    color: #f5f5f5;
  }
  .btn-donate {
    border-radius: 36px;
    border: none;
    background-color: rgba(255, 255, 255, 0.33);
    width: 100%;
    &:hover {
     background-color: rgba(255, 255, 255, 0.55);
    }
  }
}
</style>
