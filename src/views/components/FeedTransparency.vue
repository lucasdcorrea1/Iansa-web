<template>
    <section id="transparency" class="section section-shaped trasparency">
      <div class="shape shape-style-1">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    <div v-if="slides.length" style="position: relative">
        <div v-for="(slide, index) in slides" :key="index" id="post-list">
            <article v-if="slide.url.split('.').pop() !== 'pdf'">
                <header>
                    <div class="user-info">
                        <span>{{slide.title}}</span>
                    </div>
                </header>
                <img :src="slide.url" alt="" />
                <footer>
                    <div className="actions">
                    </div>
                    <strong>{{slide.title}}</strong>
                    <p>
                        {{slide.description}}
                        <span>{{slide.createdAt}}</span>
                    </p>
                </footer>
            </article>
          <article v-else>
            <header>
              <div class="user-info">
                <a @click="findValue(slide.url)">
                  <img src="../../../public/img/brand/pdf.png" style="width: 15%;"/>
                </a>
              </div>
            </header>
            <div class="text-center">
                <base-button 
                  tag="a" 
                  target="_blank"
                  @click="findValue(slide.url)"
                  type="primary" 
                  size="lg" 
                  style="color: #fff;
                        background-color: #b865ac;
                        border-color: #ab4a9e;
                        margin: 48px;"
                  class="active" 
                  role="button" 
                  aria-pressed="true">
                  visualizar
                  <i class="fa fa-file-pdf-o" aria-hidden="true"></i>
                </base-button>
              </div>
            <footer>
              <div className="actions">
              </div>
              <strong>{{slide.title}}</strong>
                <p>
                  {{slide.description}}
                  <span>{{slide.createdAt}}</span>
                </p>
                </footer>
            </article> 

        </div>
      </div>
    </section>
</template>
<script>
import axios from 'axios';
import Vue from 'vue';
import VueToast from 'vue-toast-notification';

export default {
  name:'tranparency',
  data() {
    return {
      slides: [],
      loading: false,
      messageEmpty: 'Carregando slides...',
    };
  },
  created() {
    Vue.use(VueToast, {position: 'top-right'});


    console.log('Variavel de Hambiente !' + process.env.SERVER);
    this.getFeed();
  },
  methods: {
    findValue(url) {
      console.log("CLICANDO", url);
      window.open(url);
      // var len = param.length;
      // param.SubString()
      // var batata = param.split(".").pop();
      // console.log(batata);
    },
    async getFeed() {
      this.loading = true;
      const config = {
        methods: "GET",
        url: "https://iansa-api.herokuapp.com/transparency/getAll"
      };
      await axios(config)
        .then(res => {
          if (res) {
            this.slides = res.data;
          }
        })
        .catch(error => {
          Vue.$toast.open({
            message: error.response.data.error,
            type: 'error',
          });
        })
        .finally(() => {
          this.loading = false;
        //   console.log("this.slides.length = ", this.slides.length);
          this.slides.length == 0 ? this.messageEmpty = 'Não encontramos slides :(' : '';
        });
    },
  }
};
</script>
<style lang="scss">
    section.trasparency {
        background-color: #ab4a9e;
        padding-top: 100px;
        margin: 0;
        .shape-style-1 {
          position: fixed;
          z-index: 0;
          height: 100vh;
        }
    }
div#post-list {
    width: 100%;
    max-width: 780px;
    
    margin: 0 auto;
    padding: 0 30px
}

div#post-list article {
    background-color: #fff;
    border-radius: 5px;
    border: 1px solid #ddd;
    margin-top: 30px;
}

div#post-list article header {
    padding: 20px;

    display: flex;
    align-items: center;
    justify-content: space-between;
}

div#post-list article header .user-info {
    display: flex;
    flex-direction: column;
}

div#post-list article header .user-info span {
    font-size: 12px;
}

div#post-list article header .user-info span.place {
    margin-top: 3px;

    color: #666;
    font-size: 11px;
}

div#post-list article > img {
    width: 100%;
    border-top: 2px solid #f5f5f5;
    list-style-type: none;
}

div#post-list article footer {
    padding: 20px;
    width: 100%;
    border-top: 2px solid #f5f5f5;
    list-style-type: none;
}

div#post-list article footer p {
    font-size: 13px;
    margin-top:2px;
    line-height: 18px;
}

div#post-list article footer p span {
    font-weight: 900;
    color: #7159c1;
    display: block;
}

div#post-list article footer .actions {
    margin-bottom: 10px;
}

div#post-list article footer .actions button {
    background: transparent;
    border: 0;
    cursor: pointer;
}

div#post-list article footer .actions img {
    height: 20px;
    margin-right: 10px;
}
</style>
