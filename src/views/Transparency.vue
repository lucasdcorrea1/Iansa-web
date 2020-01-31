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
        test (){
            localStorage.setItem("menuSelected", "transparency");
        }
    },
    created () {
        this.test();
    },
};
</script>
<style>
</style>
