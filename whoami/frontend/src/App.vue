<template>
<div class="container-fluid" id="content">
    <MainNav />
    <Content01 />
    <Content01 />
    
    <MainFooter />
</div>
</template>

<script>
import MainNav from "@/components/MainNav";
import Content01 from "@/components/Content01.vue";
import MainFooter from "@/components/MainFooter.vue";

export default {
  name: "App",
  components: {
    MainNav,
    Content01,
    MainFooter,
  },
};
</script>

<style lang="scss">
#app {
  height: 100%;
  #content {
    height: 100%;
  }
} 
</style>
