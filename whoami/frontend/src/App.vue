<template>
  <div class="container" id="test">
    <p>test</p>
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
@import "@/assets/scss/main.scss";
#test {
  background-color: $TEST;
}

</style>
