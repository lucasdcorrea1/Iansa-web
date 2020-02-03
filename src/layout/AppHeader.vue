<template>
  <header class="header-global">
    <base-nav class="navbar-main" transparent type effect="light" expand>
      <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
        <img src="img/brand/iansa-logo.png" alt="logo" />
      </router-link>

      <div class="row" slot="content-header" slot-scope="{closeMenu}">
        <div class="col-6 collapse-brand">
          <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/">
            <img src="img/brand/iansa-logo.png" />
          </a>
        </div>
        <div class="col-6 collapse-close">
          <close-button @click="closeMenu"></close-button>
        </div>
      </div>

      <div class="row teste">
        <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
          <base-dropdown class="nav-item" menu-classes="dropdown-menu-md">
            <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
              <!-- <i class="ni ni-ui-04 d-lg-none"></i> -->
              <span class="nav-link-inner--text">Quem somos</span>
            </a>
            <div class="dropdown-menu-inner">
              <router-link to="/history" class="media d-flex align-items-center">
                <div class="media-body ml-2">
                  <h6 class="heading text-primary mb-md-1">História</h6>
                </div>
              </router-link>
              <router-link to="/about" class="media d-flex align-items-center">
                <div class="media-body ml-2">
                  <h6 class="heading text-primary mb-md-1">Sobre</h6>
                </div>
              </router-link>
            </div>
          </base-dropdown>
          <li class="nav-item" v-if="!menuSelected">
            <a slot="title" href="#donate" v-smooth-scroll class="nav-link">
              <span class="nav-link-inner--text">Quero doar</span>
            </a>
          </li>
          <li class="nav-item" v-if="!menuSelected">
            <a slot="title" href="#services" v-smooth-scroll class="nav-link">
                <span class="nav-link-inner--text">O que oferecemos</span>
            </a>
          </li>
          <li class="nav-item" v-if="!menuSelected">
            <a slot="title" href="#team" v-smooth-scroll class="nav-link">
                <span class="nav-link-inner--text">Nossa equipe</span>
            </a>
          </li>
          <li class="nav-item">
            <router-link slot="title" class="nav-link" to="/transparency">
                <span class="nav-link-inner--text">Tranparência</span>
            </router-link>
          </li>
          <base-dropdown tag="li" class="nav-item">
            <a
              slot="title"
              href="#"
              class="nav-link nav-link-icon adm"
              data-toggle="dropdown"
              role="button"
            >
              <i class="fa fa-user" style="font-size: 20px;"></i>
              <span class="nav-link-inner--text d-lg-none">Administrador</span>
            </a>
            <router-link to="/login" class="dropdown-item">Login</router-link>
            <router-link v-if="logged" to="/register" class="dropdown-item">Cadastrar Usuário</router-link>
            <router-link v-if="logged" to="/registerevents" class="dropdown-item">Cadastrar Eventos</router-link>
            <router-link v-if="logged" to="/registertransparency" class="dropdown-item">Cadastrar Documento de Transparência</router-link>
            <a
              rel="noopener"
              data-toggle="tooltip"
              style="cursor: pointer"
              v-if="logged"
              v-on:click="sign"
            >
              <span class="dropdown-item">Sair</span>
            </a>
          </base-dropdown>
        </ul>

        <ul class="navbar-nav align-items-lg-center ml-lg-auto" style>
          <li class="nav-item">
            <a
              class="nav-link nav-link-icon"
              href="https://loja.iansa.org.br/"
              target="_blank"
              rel="noopener"
              data-toggle="tooltip"
              title="Like us on Bazar virtual"
            >
              <i class="fa fa-shopping-cart"></i>
              <span class="nav-link-inner--text d-lg-none">Bazar virtual</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              target="_blank"
              rel="noopener"
              href="https://www.facebook.com/casadeapoioiansa/"
              class="nav-link nav-link-icon"
              data-toggle="tooltip"
              data-original-title="Like us"
            >
              <i class="fa fa-facebook-square"></i>
              <span class="nav-link-inner--text d-lg-none">Facebook</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              target="_blank"
              rel="noopener"
              href="https://www.linkedin.com/in/iansa-casa-de-apoio-588747140/?ppe=1"
              class="nav-link nav-link-icon"
              data-toggle="tooltip"
              data-original-title="Like us"
            >
              <i class="fa fa-linkedin"></i>
              <span class="nav-link-inner--text d-lg-none">Linkedin</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link nav-link-icon"
              href="https://www.instagram.com/casadeapoioiansa/"
              target="_blank"
              rel="noopener"
              data-toggle="tooltip"
            >
              <i class="fa fa-instagram"></i>
              <span class="nav-link-inner--text d-lg-none">Instagram</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              target="_blank"
              rel="noopener"
              href="https://www.youtube.com/channel/UCm1doV9akgJHh517-FnxULA/featured"
              class="nav-link nav-link-icon"
              data-toggle="tooltip"
              data-original-title="Star on Github"
            >
              <i class="fa fa-youtube"></i>
              <span class="nav-link-inner--text d-lg-none">Youtube</span>
            </a>
          </li>
          <!-- <li v-if="logged" class="nav-item">
            <a
              target="_blank"
              rel="noopener"
              style="color: red"
              class="nav-link nav-link-icon"
              data-toggle="tooltip"
              v-on:click="sign"
              data-original-title="Star on Github"
            >
              <i class="fa fa-sign-in"></i>
              <span class="nav-link-inner--text d-lg-none">Sair</span>
            </a>
          </li>-->
        </ul>
      </div>
    </base-nav>
  </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown
  },
  data() {
    return {
      logged: false,
      menuSelected: false,
    };
  },
  methods: {
    hideMenu() {
      setTimeout(() => {
        this.menuSelected = localStorage.getItem('menuSelected') ? true : false;
      }, 600);
    },
    sign: function(event) {
      localStorage.removeItem("user");
      location.reload();
    }
  },
  created() {
      this.hideMenu();
    try {
      this.logged = JSON.parse(localStorage.getItem("user")).token
        ? true
        : false;
    } catch (error) {
      this.logged = false;
    }
  },
  watch:{
    $route (to, from){
      this.hideMenu();
    }
  }
};
</script>
<style lang="scss">
ul.navbar-nav.navbar-nav-hover.align-items-lg-center a {
    background: rgba(255, 255, 255, 0.4);
    border-radius: 100px;
}

.teste {
  ul {
    margin: 0 8px;
  }
}
@media all and (min-width: 990px) {
  .adm ~ ul.dropdown-menu {
    left: -145px;
    &::before {
      right: 36px;
      left: initial;
    }
  }

  .teste {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    align-items: flex-end;
  }
}
</style>
