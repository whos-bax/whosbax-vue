<template>
<div class="container-fluid" id="content">
    <MainNav />
    <ContentHome />
    <ContentHome />
    
    <MainFooter />
</div>
</template>

<script>
import MainNav from "@/components/MainNav";
import ContentHome from "@/components/ContentHome.vue";
import MainFooter from "@/components/MainFooter.vue";

export default {
  name: "App",
  components: {
    MainNav,
    ContentHome,
    MainFooter,
  },
};
</script>

<style lang="scss">
#app {
  height: 100%;
  #content {
    height: 100%;
    padding: 0;
  }
} 
</style>
