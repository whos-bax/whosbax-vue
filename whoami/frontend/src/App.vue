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

<style lang="scss">
@import "@/scss/main.scss";

.container {
  // @include center;
  background-color: $test;
}

// @import "@/scss/mainNav.scss";
/* @import "./scss/mainFooter.scss"; */
</style>
