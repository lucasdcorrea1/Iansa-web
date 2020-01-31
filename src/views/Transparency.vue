<template>
   <tranparency/>
</template>
<script>
import Tranparency from '../views/components/FeedTransparency';
export default {
    components:{
        Tranparency
    },
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
