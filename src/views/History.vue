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
                <card shadow class="card-profile mt--300" no-body>
                    <div class="px-4">
                        <div class="row justify-content-center">
                            <div class="col-lg-3 order-lg-2">

                   <!--         <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                                <div class="card-profile-actions py-4 mt-lg-0">
                                    <base-button type="info" size="sm" class="mr-4">Connect</base-button>
                                    <base-button type="default" size="sm" class="float-right">Message</base-button>
                                </div>
                            </div> 
                            <div class="col-lg-4 order-lg-1">
                                <div class="card-profile-stats d-flex justify-content-center">
                                    <div>
                                        <span class="heading">22</span>
                                        <span class="description">Friends</span>
                                    </div>
                                    <div>
                                        <span class="heading">10</span>
                                        <span class="description">Photos</span>
                                    </div>
                                    <div>
                                        <span class="heading">89</span>
                                        <span class="description">Comments</span>
                                    </div>
                                </div> -->
                            </div> 
                        </div>
                        <div class="text-center mt-5">
                            <img src="../../public/img/brand/logo.png" class="img-description"/>
                            <h3 style="padding: 10px;">
                                <span class="font-weight-light">NOSSA HISTÓRIA</span>
                            </h3>
                        </div>
                        <div class="mt-5 py-5 border-top text-center">
                            <div class="row justify-content-center">
                                <div class="col-lg-9">
                                <p>Diagnosticada com câncer de mama em 2010, no auge de sua vida aos 43 anos de idade, Eliane Aparecida Bonine, assistente social, se viu em meio a um turbilhão de pensamentos, perguntas e incertezas. Com muita garra, força e fé, Eliane se agarrou à esperança de que poderia vencer aquela batalha e não se deixou abater. Sempre amparada por sua família, passou por uma cirurgia e inúmeros tratamentos quimioterápicos na busca pela certeza da cura, até que o milagre enfim  chegou e todas as incertezas foram transformadas em coragem e alimento para um grande projeto.</p>
                                <p>Entre as idas e vindas aos hospitais para tratamento, Eliane pode perceber que outras pessoas em situações de saúde semelhantes ou tão mais grave quanto a sua, passavam por dificuldades, principalmente as mais carentes que não proviam de recursos para alimentação ou ainda para pernoitar na cidade, seja para continuar o tratamento ou para acompanhar um familiar hospitalizado.</p>
                                <p>Eliane sentia nascer em seu coração um profundo desejo de fazer algo por aquelas pessoas que de forma silenciosa e sem saberem, clamavam por alguma ajuda. Percebeu então que na cidade não havia nenhuma casa de apoio ou centro de assistência que pudesse acolher e ajudar aquelas pessoas, principalmente as que vinham de longe para o tratamento.</p>
                                <p>Apoiada e amparada mais uma vez pela família, Eliane decide alugar uma pequena casa nas proximidades do Hospital do Câncer de Franca e passa a convidar as pessoas em tratamento ou em acompanhamento de pacientes,  no então hospital,  para conhecerem o espaço alugado e ainda receber de forma gratuita uma refeição e quando necessário a se hospedarem na casa. Nascia ali, em 2011, o I.A.N.S.A. Instituição de Apoio Nossa Senhora Aparecida, uma homenagem de Eliane, uma mulher que além de forte, é também muito religiosa.</p>
                                <p>Aos poucos o número de atendidos começou a crescer e o trabalho, que no começo era tímido, passou a se tornar algo extremamente importante na vida de muitas dessas pessoas. Outras pessoas se uniram à mesma causa, engajaram-se com a mesma vontade e desejo no coração, o de transformar a Casa de Apoio em um centro de referência na cidade, atendendo cada vez mais um número maior de pessoas, espalhando a esperança e cultivando a essência do compartilhar do amor.</p>
                                <p>Os trabalhos cresceram, o número de atendidos também e a cada ano um passo maior era dado em direção à realização de um sonho que já era sonhado por um grupo cada vez maior de apoiadores e voluntários que se identificaram com esta obra tão envolvente e ao mesmo tempo linda.</p>
                                <p>Mesmo em meio a tremendas dificuldades financeiras e burocráticas, Eliane e seu time de sonhadores não se deixaram abater nem se renderam aos desafios cada vez maiores, arregaçaram as mangas e seguiram com o propósito, conseguiram transformar a então Casa de Apoio em uma Instituição de Apoio, uma ONG, sem fins econômicos o que daria um novo sentido ao sonho, e colocaria o IANSA em um caminho ainda mais valioso para tantas pessoas.</p>
                                <p>Em 2016 uma grande surpresa enche os corações desses sonhadores de alegria, felicidade e mais esperança. Um doador anônimo da cidade presenteia o IANSA com um terreno com quase 2 mil metros quadrados para que pudesse ali ser construído uma nova casa, um novo prédio para melhorar ainda mais os serviços de atendimentos prestados às pessoas necessitadas. Agora, junto aos desafios do dia-a-dia, surge um novo e grande desafio para a Instituição, a construção da nova casa de apoio.</p>
                                <p>Em 2017 a Instituição de Apoio Nossa Senhora Aparecida dá um passo importante em seu caminho de busca da excelência nos trabalhos realizados e inicia um processo de profissionalização, sempre se preocupando em não perder a essência do acolhimento humanizado, para conduzir com mais qualidade e eficiência os atendimentos e ajudar a se preparar para um novo futuro, um futuro breve  em que as pessoas que já conhecem o trabalho e tantas outras que ainda possam ser atendidas, recebam o mesmo carinho, amor e acolhimento em uma nova casa, a NOVA CASA DE APOIO IANSA.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </card>
            </div>
        </section>
    </div>
</template>
<script>
    export default {
        methods:{
            menuSelected (){
                localStorage.setItem("menuSelected", true);
            }
        },
        created () {
            this.menuSelected();
        },
    };
</script>
<style>
</style>
