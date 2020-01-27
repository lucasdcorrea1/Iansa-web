<template>
  <div id="app">
    <router-view name="header"></router-view>
      <main>
        <fade-transition origin="center" mode="out-in" :duration="250">
          <router-view/>
        </fade-transition>
      </main>
      <div>
        <a href="https://pag.ae/bhg8d0n" target="blank" class="fab">
          <img src="img/brand/icons/hand.svg">
          Quero doar
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
  }
};
</script>
<style lang="scss">
  .font-title {
    font-family: 'Indie Flower', cursive;
  }
  .fab {
    &:hover {
      color: #ffffff;
      box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    }
    position: fixed;
    display: flex;
    right: 16px;
    bottom: 16px;
    padding: 15px;
    z-index: 1;
    border-radius: 100px;
    justify-content: center;
    align-items: center;
    transition: 200ms ease;
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
</style>
