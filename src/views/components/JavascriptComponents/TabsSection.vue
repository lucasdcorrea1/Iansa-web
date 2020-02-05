<template>
    <div class="row justify-content-center">
        <div class="col-lg-6">
            <!-- Tabs with icons -->
            <tabs fill class="flex-column flex-md-row">
                <card shadow slot-scope="{activeTabIndex}" 
                style="background: linear-gradient(150deg, #745db8 15%, #8f6ed5 70%, #d782d9 94%);
                    border: none;
                    color: white;">
                    <tab-pane key="tab1">
                        <template slot="title">
                            VISÂO
                        </template>
                        <p class="description">Ser um centro de referência nacional no tratamento humanizado às pessoas em situação de adoecimento, oferecendo apoio de cunho assistencial na saúde, esporte, lazer, cultura e educação.</p>
                    </tab-pane>
                    <tab-pane key="tab2">
                        <template slot="title">
                            MISSÃO
                        </template>
                        <p class="description">Ser o porto seguro das pessoas em tratamento e suas famílias, acolhendo-as com muito respeito, dignidade, amor e alegria.</p>
                    </tab-pane>
                </card>
            </tabs>
        </div>
    </div>
</template>
<script>
import Tabs from "@/components/Tabs/Tabs.vue";
import TabPane from "@/components/Tabs/TabPane.vue";
export default {
  components: {
    Tabs,
    TabPane
  }
};
</script>
<style>
</style>
