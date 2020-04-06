<template>
  <section class="section section section-shaped my-0 overflow-hidden" style="background-color: #f5f5f5" id="donate">
    <div class="container">
      <div class="col-lg-12 order-lg-1">
          <div class="d-flex px-3 mt-5">
              <div class="pl-4 mb-5 font-title">
                  <h4 class="display-3">Ei, que tal, fazer uma doação!?</h4>
                  <p style="color: #ab4a9e;">
                    Assine um de nossos planos de doação mensal  e seja um dos mantenedores da Casa de Apoio, assim você estará colaborando com centenas de pessoas que buscam em nossa instituição o amparo e o apoio tão essenciais no momento mais delicado de suas vidas.
                  </p>
              </div>
          </div>
      </div>
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
                <img :src="`img/brand/${item.img}`" class="donate-img"/>
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
            <div class="col-lg-6">
              <card 
                class="border-0"
                hover
                shadow
                body-classes="py-5"
                :style="`background-color: #21c25e;margin-top: 40px`">
                <img :src="`img/brand/picpay-logo-9.png`" style="max-width: 50%;"/>
                <div class="col-lg-12">
                <img :src="`img/brand/iansa-picpay.png`" style="max-width: 50%;border-radius: 6px;"/>
                </div>
              </card>
              </div>
            <div class="col-lg-6" style="color: #393185;">
              <card 
                class="border-0"
                hover
                shadow
                body-classes="py-5"
                :style="`background-color: rgb(13, 76, 146);margin-top: 40px;`">
                <img :src="`img/brand/caixa-logo.png`" 
                      style="max-width: 50%;
                            margin-top: 20px;
                            margin-bottom: 7.2%;"/>
                <h5 class="text-uppercase">Agência : 0263-1</h5>
                <h5 class="text-uppercase">Conta Corrente : 133283-0</h5>
                <h5 class="text-uppercase">CNPJ: 13.512.905/000192</h5>
                <h5 class="text-uppercase">Razão social: Instituição de Apoio Nossa Senhora Aparecida</h5>
              </card>
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
  .text-uppercase { 
      color: #fff !important;
  }
  .card-body {
      h5 {
        padding: 5px;
    }
    cursor: pointer;
    .donate-img {
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

  @media all and (max-width: 990px) {
    .card-body {
      & h5 {
        padding: 2.2px;
      }
    }
  }
</style>
