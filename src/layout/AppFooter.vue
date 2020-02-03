<template>
    <footer class="footer has-cards">
      <!--  <div class="container container-lg">
            <div class="row">
                <div class="col-md-6 mb-5 mb-md-0">
                    <div class="card card-lift--hover shadow border-0">
                        <router-link to="/landing" title="Landing Page">
                            <img v-lazy="'img/theme/landing.jpg'" class="card-img">
                        </router-link>
                    </div>
                </div>
                <div class="col-md-6 mb-5 mb-lg-0">
                    <div class="card card-lift--hover shadow border-0">
                        <router-link to="/profile" title="Profile Page">
                            <img v-lazy="'img/theme/profile.jpg'" class="card-img">
                        </router-link>
                    </div>
                </div>
            </div>
        </div> -->
        <div class="container footer-iansa">
            <div class="row row-grid align-items-center my-md">
            <div class="col-sm-12" style="margin-bottom:16px">
                <h3 class="text-primary font-weight-light">ONDE ESTAMOS!</h3>
            </div>
                <div class="col-md-4 contact" style="margin:0">
                    <h4 class="text-primary font-weight-light">Unidade I</h4>
                    <p class="mb-0 font-weight-light">
                        <span>Av.Luís Vaz de Camões - 2901</span>
                    </p>
                    <p class="mb-0 font-weight-light locale">Jardim Eden - Franca-SP</p>
                    <p class="mb-0 font-weight-light phone">
                        <span class="phone">(16) 3409-261</span>
                    </p>
                </div>
                <div class="col-md-4 contact">
                    <h4 class="text-primary font-weight-light">Unidade II</h4>
                    <p class="mb-0 font-weight-light">
                        <span>R.João de Góes Conrado - 2570</span>
                    </p> 
                    <p class="mb-0 font-weight-light locale">São josé, Franca-SP</p>
                    <p class="mb-0 font-weight-light phone">
                        <span class="phone-text">(16) 3702-4042</span>
                    </p>
                </div>
                <div class="col-md-4 text-lg-center btn-wrapper">
                    <a target="_blank" rel="noopener" href="https://www.facebook.com/casadeapoioiansa/"
                       class="btn btn-neutral btn-icon-only btn-facebook btn-round btn-lg" data-toggle="tooltip"
                       data-original-title="Like us">
                        <i class="fa fa-facebook-square"></i>
                    </a>
                    <a target="_blank" rel="noopener" href="https://www.linkedin.com/in/iansa-casa-de-apoio-588747140/?ppe=1"
                       class="btn btn-neutral btn-icon-only btn-linkedin btn-round btn-lg" data-toggle="tooltip"
                       data-original-title="Like us">
                        <i class="fa fa-linkedin"></i>
                    </a>
                    <a target="_blank" rel="noopener" href="https://www.instagram.com/casadeapoioiansa/"
                       class="btn btn-neutral btn-icon-only btn-instagram btn-lg btn-round" data-toggle="tooltip"
                       data-original-title="Follow us">
                        <i class="fa fa-instagram"></i>
                    </a>
                    <a target="_blank" rel="noopener" href="https://www.youtube.com/channel/UCm1doV9akgJHh517-FnxULA/featured"
                       class="btn btn-neutral btn-icon-only btn-youtube btn-round btn-lg" data-toggle="tooltip"
                       data-original-title="Star on youtube">
                        <i class="fa fa-youtube"></i>
                    </a>
                    <a target="_blank" rel="noopener" href="https://api.whatsapp.com/send?1=pt_BR&phone=5516994123795"
                       class="btn btn-neutral btn-icon-only btn-round btn-lg" data-toggle="tooltip"
                       data-original-title="Star on whatsapp"
                       style="background-color: #4dec69; color:#fff">
                        <i class="fa fa-whatsapp"></i>
                    </a>
                </div>
            </div>
            <hr>
            <div class="row align-items-center justify-content-md-between">
                <div class="col-md-6">
                    <div class="copyright">
                        &copy; {{year}}
                        <a href="https://www.iansa.org.br" target="_blank" rel="noopener">I.A.N.S.A</a>
                    </div>
                </div>
                <div class="col-md-6">
                    <ul class="nav nav-footer justify-content-end">
                        <li class="nav-item">
                            <a href=""
                               class="nav-link" target="_blank" rel="noopener">contato@iansa.org.br</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
  name: 'app-footer',
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
};
</script>
<style lang="scss">
.footer-iansa {
    h3 {
        font-weight: bold !important;
        font-size: 18px;
    }
    .text-primary {
        color: #673AB7 !important;
    }
    .phone{
        margin-top: 16px;
        span {
            font-size: 18px;
            position: relative;
            top: -6px;
        }
    }

}
</style>
