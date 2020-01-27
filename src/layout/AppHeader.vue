<template>
    <header class="header-global">
        <base-nav class="navbar-main" transparent type="" effect="light" expand>
            <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
                <img src="img/brand/iansa-logo.png" alt="logo">
            </router-link>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand">
                    <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/">
                        <img src="img/brand/iansa-logo.png">
                    </a>
                </div>
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>

            <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
                <base-dropdown class="nav-item" menu-classes="dropdown-menu-md">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <!-- <i class="ni ni-ui-04 d-lg-none"></i> -->
                        <span class="nav-link-inner--text">Quem somos</span>
                    </a>
                    <div class="dropdown-menu-inner">
                        <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
                           class="media d-flex align-items-center">
                            <div class="media-body ml-2">
                                <h6 class="heading text-primary mb-md-1">História</h6>
                            </div>
                        </a>
                        <router-link
                            to="/about" 
                           class="media d-flex align-items-center">
                            <div class="media-body ml-2">
                                <h6 class="heading text-primary mb-md-1">Sobre</h6>
                            </div>
                        </router-link>
                        <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
                           class="media d-flex align-items-center">
                            <div class="media-body ml-2">
                                <h5 class="heading text-warning mb-md-1">Apoiadores</h5>
                            </div>
                        </a>
                    </div>
                </base-dropdown>
                <base-dropdown tag="li" class="nav-item">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <!-- <i class="ni ni-collection d-lg-none"></i> -->
                        <span class="nav-link-inner--text">Examples</span>
                    </a>
                    <router-link to="/landing" class="dropdown-item">Landing</router-link>
                    <router-link to="/profile" class="dropdown-item">Profile</router-link>
                    <router-link to="/login" class="dropdown-item">Login</router-link>
                    <router-link v-if="logged" to="/register" class="dropdown-item">Cadastrar Usuário</router-link>
                    <router-link v-if="logged" to="/registerEvents" class="dropdown-item">Cadastrar Eventos</router-link>
                </base-dropdown>
            </ul>
            <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://loja.iansa.org.br/" target="_blank" rel="noopener"
                       data-toggle="tooltip" title="Like us on Bazar virtual">
                        <i class="fa fa-shopping-cart"></i>
                        <span class="nav-link-inner--text d-lg-none">Bazar virtual</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a target="_blank" rel="noopener" href="https://www.facebook.com/casadeapoioiansa/"
                       class="nav-link nav-link-icon" data-toggle="tooltip"
                       data-original-title="Like us">
                        <i class="fa fa-facebook-square"></i>
                        <span class="nav-link-inner--text d-lg-none">Facebook</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a target="_blank" rel="noopener" href="https://www.linkedin.com/in/iansa-casa-de-apoio-588747140/?ppe=1"
                       class="nav-link nav-link-icon" data-toggle="tooltip"
                       data-original-title="Like us">
                        <i class="fa fa-linkedin"></i>
                        <span class="nav-link-inner--text d-lg-none">Linkedin</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://www.instagram.com/casadeapoioiansa/"
                       target="_blank" rel="noopener" data-toggle="tooltip">
                        <i class="fa fa-instagram"></i>
                        <span class="nav-link-inner--text d-lg-none">Instagram</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a target="_blank" rel="noopener" href="https://www.youtube.com/channel/UCm1doV9akgJHh517-FnxULA/featured"
                      class="nav-link nav-link-icon" data-toggle="tooltip"
                       data-original-title="Star on Github">
                        <i class="fa fa-youtube"></i>
                        <span class="nav-link-inner--text d-lg-none">Youtube</span>
                    </a>
                </li>
            </ul>
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
  data () {
    return {
      logged: false
    };
  },
  created () {
    try {
       this.logged = JSON.parse(localStorage.getItem("user")).token ? true : false
    } catch (error) {
        this.logged = false
    }
  },
};
</script>
<style>
</style>
