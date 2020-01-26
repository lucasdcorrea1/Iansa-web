<template>
 <section class="section section section-shaped my-0 overflow-hidden testec">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="row row-grid text-center">
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                     <img src="../../../public/img/brand/help.png"/>
                                    <h6 class="text-uppercase"
                                     style="color: #f64c65">plano Carinho</h6>
                                    <div class="col-lg-12">
                                        <h3 class="donate-value" rounded>R$25,00</h3>
                                    </div>
                                    <div>
                                        <badge 
                                            type="primary" 
                                            style="color: #f64c65" 
                                            rounded>
                                            Mensais
                                        </badge>
                                    </div>
                                    <base-button  
                                        tag="a" 
                                        target="_blank" 
                                        href="https://pag.ae/blg8gQG" 
                                        class="mt-4 btn-donate"
                                        style="background-color: #f64c65; width: 100%;">
                                       Assinar
                                    </base-button>
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <img src="../../../public/img/brand/happiness.png"/>
                                    <h6 class="text-uppercase"
                                    style="color: #1aae6f">Plano Feliciade</h6>
                                    <div class="col-lg-12">
                                        <h3 class="donate-value" style="color:#1aae6f" rounded>R$50,00</h3>
                                    </div>
                                    <div>
                                        <badge  
                                            type="primary"
                                            style="color: #1aae6f"
                                            rounded>
                                            Mensais
                                        </badge>
                                    </div>
                                    <base-button  
                                        tag="a" 
                                        target="_blank" 
                                        href="https://pag.ae/bkg8gPn" 
                                        class="mt-4 btn-donate"
                                        style="background-color: #1aae6f; width: 100%;">
                                       Assinar
                                    </base-button>
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <img src="../../../public/img/brand/love.png"/>
                                    <h6 class="text-uppercase"
                                    style="color: #f64c65">plano Amor</h6>
                                    <div class="col-lg-12">
                                        <h3 class="donate-value" rounded>R$100,00</h3>
                                    </div>
                                    <div>
                                        <badge 
                                            type="primary" 
                                            style="color: #f64c65" 
                                            rounded>Mensais
                                        </badge>
                                    </div>
                                    <base-button  tag="a" 
                                        target="_blank" 
                                        href="https://pag.ae/bfg8gNp" 
                                        class="btn-donate mt-4"
                                        style="background-color: #f64c65; width: 100%;">
                                       Assinar
                                    </base-button>
                                </card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>
<script>
    export default {};
</script>
<style lang="scss">
    .card-body {
        img {
            max-width: 70px;
        }
        .donate-value { 
            font-size: 40px;
            font-weight: 600;
            color: #f64c65;
        }
        .btn-donate {
            border-radius: 36px;
            border: none;
            &:hover {
                background-color: #f88e9e !important;
            }
        }
    }
</style>
