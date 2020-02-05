<template>
  <div id="app">
    <router-view name="header"></router-view>
      <main>
        <fade-transition origin="center" mode="out-in" :duration="250">
          <router-view/>
        </fade-transition>
      </main>
      <div>
        <a href="#app" v-smooth-scroll class="fab first" v-if="showButtonTop">
          <i class="fa fa-arrow-up"></i>
        </a>
        <a href="https://pag.ae/bhg8d0n" target="blank" class="fab">
          <img class="donate-app-img" src="img/brand/icons/hand.svg">
          <span class="img-span">
          Quero doar
          </span>
        </a>
      </div>
    <router-view name="footer"></router-view>
  </div>
</template>
<script>
import { FadeTransition } from "vue2-transitions";

export default {
  components: {
    FadeTransition
  },
  data() {
    return {
      showButtonTop: false,
    }
  },
  methods: {
    handleScroll: function () {
      if((window.scrollY > 50)) {
        this.showButtonTop = true;
      }
      else {
        this.showButtonTop = false;
      }
    }
  },
  created: function () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed: function () {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>
<style lang="scss">
 body {
    background-color: #f5f5f5 !important;  
 }

  .font-title {
    font-family: 'Indie Flower', cursive;
  }
  .fab {
    &.first {
      // bottom: 90px;
      // margin: 0 auto;
      // left: 0;
      // right: 0;
      // background: #f88e9e;
      // border-radius: 50px;
      // width: 45px;
      // height: 45px;
      margin: 0 auto;
      left: 20px;
      right: initial;
      background: #f88e9e;
      border-radius: 50px;
      width: 45px;
      height: 45px;
    }
    &:hover {
      color: #ffffff;
      box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    }
    position: fixed;
    display: flex;
    right: 16px;
    bottom: 16px;
    padding: 15px;
    z-index: 9;
    border-radius: 100px;
    justify-content: center;
    align-items: center;
    background: #ab4a9e;
    background-image: linear-gradient(45deg, #ec95e1 0, #ab4a9e 70%);
    color: #f5f5f5;
    font-weight: bold;
    border: 0;
    box-shadow: 0 3px 4px 0 rgba(0,0,0,0.14), 0 3px 3px -2px rgba(0,0,0,0.12), 0 1px 8px 0 rgba(0,0,0,0.20);
    outline: none;
    img {
      width: 34px;
      margin-right: 10px;
    }
  }

  @media all and (min-width: 990px) {
    .fab {
      &.first {
        bottom: 16px;
        left: 0;
        right: 0;
      }
    }
  }
  @media screen and (max-width: 550px) {
    .fab {
      img {
        width: 34px;
        margin-right: 0px;
      }
      span {
        display:none;
      }
    }
  }
</style>
