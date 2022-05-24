<template>
  <div class="container">
    <MainNav />
    <Content_01 />
  </div>
</template>

<script>
import Content_01 from "@/components/Content_01.vue";
import MainNav from "@/components/MainNav";

export default {
  name: "App",
  components: {
    Content_01,
    MainNav,
  },
};
</script>

<style lang='scss'>
#app {
}
.container {
  display: flex;
  flex-direction: column;
  height: 100%;
  // background-image: url("../workplace.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
@import "@/assets/scss/variables.scss";
// @import "@/assets/scss/mainNav.scss";
/* @import "./assets/scss/mainFooter.scss"; */
</style>
