<template>
  <section class="section team font-title" id="team">
    <div class="container">
      <div class="at-section">
        <div class="at-section__title">Nossa Equipe</div>
      </div>
      <!-- <div class="at-grid" data-column="3">
        <div class="at-column">
          <div class="at-user">
            <div class="at-user__avatar">
              <img src="https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128-min.JPG" />
            </div>
            <div class="at-user__name">Aaron Rossi</div>
            <div class="at-user__title">CEO &amp; Co-Founder</div>
            <ul class="at-social">
              <li class="at-social__item">
                <a href>
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z"
                      fill-rule="evenodd"
                    />
                  </svg>
                </a>
              </li>
              <li class="at-social__item">
                <a href>
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.875 7.5v.563c0 3.28-1.18 6.257-3.54 8.93C14.978 19.663 11.845 21 7.938 21c-2.5 0-4.812-.687-6.937-2.063.5.063.86.094 1.078.094 2.094 0 3.969-.656 5.625-1.968a4.563 4.563 0 0 1-2.625-.915 4.294 4.294 0 0 1-1.594-2.226c.375.062.657.094.844.094.313 0 .719-.063 1.219-.188-1.031-.219-1.899-.742-2.602-1.57a4.32 4.32 0 0 1-1.054-2.883c.687.328 1.375.516 2.062.516C2.61 9.016 1.938 7.75 1.938 6.094c0-.782.203-1.531.609-2.25 2.406 2.969 5.515 4.547 9.328 4.734-.063-.219-.094-.562-.094-1.031 0-1.281.438-2.36 1.313-3.234C13.969 3.437 15.047 3 16.328 3s2.375.484 3.281 1.453c.938-.156 1.907-.531 2.907-1.125-.313 1.094-.985 1.938-2.016 2.531.969-.093 1.844-.328 2.625-.703-.563.875-1.312 1.656-2.25 2.344z"
                      fill-rule="evenodd"
                    />
                  </svg>
                </a>
              </li>
              <li class="at-social__item">
                <a href>
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z"
                      fill-rule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div> -->
      <div class="at-grid" data-column="3">
        <div class="at-column" v-for="(item, index) in team" :key="index">
          <div class="at-user">
            <div :class="[{top: item.top},'at-user__avatar']">
              <img :src="item.image" @mouseover="teste(item.image)"/>
            </div>
            <div class="at-user__name">{{item.name}}</div>
            <div class="at-user__title">{{item.office}}</div>
          <!--  <ul class="at-social">
              <li class="at-social__item">
                <a href>
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z"
                      fill-rule="evenodd"
                    />
                  </svg>
                </a>
              </li>
              <li class="at-social__item">
                <a href>
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.875 7.5v.563c0 3.28-1.18 6.257-3.54 8.93C14.978 19.663 11.845 21 7.938 21c-2.5 0-4.812-.687-6.937-2.063.5.063.86.094 1.078.094 2.094 0 3.969-.656 5.625-1.968a4.563 4.563 0 0 1-2.625-.915 4.294 4.294 0 0 1-1.594-2.226c.375.062.657.094.844.094.313 0 .719-.063 1.219-.188-1.031-.219-1.899-.742-2.602-1.57a4.32 4.32 0 0 1-1.054-2.883c.687.328 1.375.516 2.062.516C2.61 9.016 1.938 7.75 1.938 6.094c0-.782.203-1.531.609-2.25 2.406 2.969 5.515 4.547 9.328 4.734-.063-.219-.094-.562-.094-1.031 0-1.281.438-2.36 1.313-3.234C13.969 3.437 15.047 3 16.328 3s2.375.484 3.281 1.453c.938-.156 1.907-.531 2.907-1.125-.313 1.094-.985 1.938-2.016 2.531.969-.093 1.844-.328 2.625-.703-.563.875-1.312 1.656-2.25 2.344z"
                      fill-rule="evenodd"
                    />
                  </svg>
                </a>
              </li>
              <li class="at-social__item">
                <a href>
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z"
                      fill-rule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ul>-->
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
      team: [
        {
          image: './img/theme/AngelitaNeves-min.JPG',
          name: 'ELIANE BONINE',
          office: 'Serviços Gerais'
        },
        {
          image: './img/theme/AnaDosanjosGomes-min.JPG',
          name: 'Ana Dos anjos Gomes',
          office: 'Assistente Social'
        },
        {
          image: './img/theme/AdrianaBatista-min.JPG',
          name: 'Adriana Batista',
          office: 'Coordenadora Geral'
        },
        {
          image: './img/theme/RafaelAlves-min.JPG',
          name: 'Rafael Alves',
          office: 'Estagiário de Serviço Social'
        },
        {
          image: './img/theme/LiviaBomfim-min.JPG',
          name: 'Livia Bomfim',
          office: 'Nutricionista'
        },
        {
          image: './img/theme/CláudiaBonini-min.JPG',
          name: 'Cláudia Bonini',
          office: 'Motorista'
        },
        {
          image: './img/theme/SimoneBonini-min.JPG',
          name: 'Simone Bonini',
          office: 'Coordenadora bazar'
        },
        {
          image: './img/theme/CidaHajel-min.JPG',
          name: 'Cida Hajel',
          office: 'Captadora de recursos'
        },
        {
          image: './img/theme/JenifferBlois-min.JPG',
          name: 'Jeniffer Blois',
          office: 'Psicóloga',
          top: true
        }
      ]
    }
  },
  methods: {
    teste(image) {
      console.log("image = ", image);
    }
  }
};
</script>
<style lang="scss">
.team {
  $prefix: at;
  $totalColumns: 9;

  // Custom Prefix
  .#{$prefix} {
    // Section
    &-section {
      &__title {
        margin: 0 0 70px;
        color: #ab4a9e;
        font-size: 2.5rem;
        font-weight: 300;
        line-height: 2.625rem;
        text-align: center;
      }
    }

    &-grid {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      background: #fff;
      border: 1px solid #e2e9ed;

      @for $i from 1 through $totalColumns {
        &[data-column="#{$i}"] {
          .#{$prefix}-column {
            width: percentage(1 / $i);
            max-width: percentage(1 / $i);
            min-width: percentage(1 / $i);
            flex-basis: percentage(1 / $i);
          }
        }
      }
    }

    &-column {
      z-index: 0;
      position: relative;
      background: #fff;
      box-shadow: 0 0 0 1px #e2e9ed;
      padding: 10px;
      box-sizing: border-box;
      transition: box-shadow 0.2s ease, transform 0.2s ease,
        z-index 0s 0.2s ease;

      &:before {
        content: "";
        display: block;
        padding-top: 100%;
      }

      &:hover {
        z-index: 1;
        box-shadow: 0 8px 50px rgba(#000, 0.2);
        transform: scale(1.05);
        transition: box-shadow 0.2s ease, transform 0.2s ease,
          z-index 0s 0s ease;

        .#{$prefix}-social {
          margin: 16px 0 0;
          opacity: 1;
        }
      }

      @media (max-width: 800px) {
        width: 50% !important;
        max-width: 50% !important;
        min-width: 50% !important;
        flex-basis: 50% !important;
      }

      @media (max-width: 600px) {
        width: 100% !important;
        max-width: 100% !important;
        min-width: 100% !important;
        flex-basis: 100% !important;
      }
    }

    &-user {
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      transform: translate(0, -50%);
      text-align: center;

      &__avatar {
        width: 98px;
        height: 98px;
        border-radius: 100%;
        margin: 0 auto 20px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        &.top {
          align-items: flex-start!important;
        }

        img {
          display: block;
          width: 100%;
          max-width: 100%;
        }
      }

      &__name {
        color: #ab4a9e;
        font-size: 1.5rem;
        font-weight: 500;
        line-height: 2.625rem;
      }

      &__title {
        color: #ec95e1;
        font-size: 1.2rem;
        line-height: 2.375rem;
      }
    }

    &-social {
      margin: 0 0 -18px;
      opacity: 0;
      transition: margin 0.2s ease, opacity 0.2s ease;

      &__item {
        display: inline-block;
        margin: 0 10px;

        a {
          display: block;
        }

        svg {
          fill: #515f65;
          display: block;
          height: 18px;
          transition: fill 0.2s ease;

          &:hover {
            fill: #788d96;
          }
        }
      }
    }
  }
  .at-social {
      padding: 0;
  }
}
</style>
