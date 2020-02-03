<template>
  <div class="profile-page">
    <section class="section-profile-cover section-shaped my-0">
      <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
      </div>
    </section>
    <section class="section section-skew">
        <div class="container">
        <card   
          shadow 
          class="card-profile card-upload mt--300"
          style="background-color:#b278d7a3"
          no-body>
          <div class="px-4">
            <div class="row justify-content-center">
              <div class="text-center">
                <div>
                  <h3 style="color:#fff; padding: 15px">Cadastrar novo documento de transparência!
                  </h3>
                </div>
                <div v-show="files.length == 0" class="large-12 medium-12 small-12 filezone">
                  <input type="file" id="files" ref="files" multiple v-on:change="handleFiles()"/>
                  <p>
                    Arraste a imagem para ser anexada <br>Ou click aqui!
                  </p>
                </div>
                <div v-for="(file, key) in files" class="file-listing">
            <div class="row">
              <div class="col-md-12">
                <img class="preview" v-bind:ref="'preview'+parseInt(key)"/>
                  <div class="success-container" v-if="file.id > 0">
                    Success
                  </div>
                  <div class="remove-container" v-else>
                    <base-button 
                      v-show="files.length > 0"
                      type="danger"
                      class="my-4" 
                      v-on:click="removeFile(key)">
                      Remove
                    </base-button>
                  </div>
                </div>
              </div>
              <div>
                <div class="row">
                  <div class="col-md-12">
                    <base-input 
                      placeholder="Titulo"
                      v-model="title">
                    </base-input>
                  </div>
             <div class="col-md-12">
                    <textarea 
                      class="form-control" 
                      id="exampleFormControlTextarea1" 
                      rows="3" 
                      placeholder="Descrição do evento ..."
                      v-model="description">
                    </textarea>
                         </div>
                         </div>
                  </div>
                </div>
                   <base-button 
                      v-show="files.length > 0"
                      :disabled="submitButton"
                      type="primary" 
                      class="my-4" 
                      @click="submit()">
                      Cadastrar Documento
                    </base-button>
              </div>
            </div>
          </div>
        </card>
      </div>
    </section>
  </div>
</template>
<script>
import ImageUploader from 'vue-image-upload-resize'
import axios from 'axios'
import Vue from 'vue';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/index.css';
export default {
  name: 'register-events',
  data () {
    return {
      files: [],
      title: '',
      description: '',
      submitButton: false
    }
  },
  components: {
    ImageUploader
  },  
  created () {
    localStorage.setItem("menuSelected", true);
    Vue.use(ImageUploader);
    Vue.use(VueToast, {position: 'top-right'});
  },
  methods: {
    async validParameters() {
       if(!this.title.length){
          Vue.$toast.open({
            message: 'Campo titulo esta vázio!',
            type: 'error',
          });
          return false;
      }
      if(!this.description.length){
          Vue.$toast.open({
            message: 'Campo de descrição esta vázio!',
            type: 'error',
          });
          return false;
      }
      return true;
    },
    removeFile( key ){
    this.files.splice( key, 1 );
    this.getImagePreviews();
    },
    getImagePreviews(){
      for( let i = 0; i < this.files.length; i++ ){
        if ( /\.(jpe?g|png|gif)$/i.test( this.files[i].name ) ) {
          let reader = new FileReader();
            reader.addEventListener("load", function(){
                this.$refs['preview'+parseInt( i )][0].src = reader.result;
            }.bind(this), false);
            reader.readAsDataURL( this.files[i] );
        }else{
            this.$nextTick(function(){
                this.$refs['preview'+parseInt( i )][0].src = '/img/generic.png';
            });
          }
        }
      },
      handleFiles() {
        let uploadedFiles = this.$refs.files.files;

        for(var i = 0; i < uploadedFiles.length; i++) {
            this.files.push(uploadedFiles[i]);
        }
        this.getImagePreviews();
    },
    
    async submit() {
        if(await this.validParameters()){
        this.submitButton = true;

        for( let i = 0; i < this.files.length; i++ ){
        if(this.files[i].id) {
            continue;
        }
        let formData = new FormData();
        formData.append('file', this.files[i]);
        formData.append('title', this.title);
        formData.append('description', this.description);
        
       await axios.post('https://iansa-api.herokuapp.com/transparency/create',
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization':`${JSON.parse(localStorage.getItem("user")).token}`
                }
            }
        ).then(function(data) {
            if (data){
              this.files = [];
              Vue.$toast.open({
                message: 'Documento de transparência cadastrado com sucesso!',
                type: 'success',
              });
            }
        }.bind(this)).catch(function(data) {
                       if (data){
              this.files = [];
              Vue.$toast.open({
                message: 'Erro ao cadastrar documento de transparência!',
                type: 'error',
              });
            }
        }).finally(() => {
                this.submitButton = false;
        });
      }
        }

    },
    
    beforeRemove (index, done, fileList) {
      console.log('index', index, fileList)
      var r = confirm("remove image")
      if (r == true) {
        done()
      } else {
      }
    },
    editImage (formData, index, fileList) {
      console.log('edit data', formData, index, fileList)
    }
  }
}
</script> 
 
<style>
.card-upload {
  min-height: 304px;
}
input[type="file"]{
        opacity: 0;
        width: 100%;
        height: 200px;
        position: absolute;
        cursor: pointer;
    }
    .filezone {
      outline: 1px dashed #faf9fc;
      margin: 0 auto;
      top: 25px;
      outline-offset: -10px;
      background: #ab4a9e;
      color: #f4f2f9;
      /* padding: 10px 10px; */
      /* min-height: 200px; */
      border-radius: 22px;
      /* height: 144px; */
      /* width: 307px; */
      position: relative;
      cursor: pointer;
    }
    .filezone:hover {
        background: #db82d0;
    }

    .filezone p {
        font-size: 1.2em;
        text-align: center;
        padding: 50px 50px 50px 50px;
    }
    div.file-listing img{
        height: 20%; 
        border-radius: 5px;
    }

    div.file-listing{
        margin: auto;
        padding: 10px;
        border-bottom: 1px solid #ddd;
    }

    div.file-listing img{
        height: 100px;
    }
    div.success-container{
        text-align: center;
        color: green;
    }

    div.remove-container{
        text-align: center;
    }

    div.remove-container a{
        color: red;
        cursor: pointer;
    }

    a.submit-button{
        display: block;
        margin: auto;
        text-align: center;
        width: 200px;
        padding: 10px;
        text-transform: uppercase;
        background-color: #CCC;
        color: white;
        font-weight: bold;
        margin-top: 20px;
    }
</style> 