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
            <div v-if="slides.length">
            <div v-for="(slide, index) in slides" :key="index" id="post-list">
               
                <article>
                    <header>
                        <div class="user-info">
                            <span>{{slide.title}}</span>
                            <span class="place">{{slide.createdAt}}</span>
                        </div>
                    </header>
                    <img :src="slide.url" alt="" />
                    <footer>
                        <strong>{{slide.title}}</strong>
                        <p>
                            {{slide.description}}
                            <span>{{slide.name}}</span>
                        </p>
                    </footer>
                </article> 
            </div>
          </div>
    </section>
</template>
<script>
import axios from 'axios';

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
    this.getFeed();
  },
  methods: {
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
        .catch(err => {
          console.error(err);
        })
        .finally(() => {
          this.loading = false;
          console.log("this.slides.length = ", this.slides.length);
          this.slides.length == 0 ? this.messageEmpty = 'Não encontramos slides :(' : '';
        });
    }
  }
};
</script>
<style lang="scss">
    section.trasparency {
        background-color: #ab4a9e;
        padding-top: 100px;
        margin: 0;
        .shape-style-1 {
            z-index: 1;
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
