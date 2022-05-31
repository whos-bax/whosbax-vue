<template>
  <div class="content">
    <div class="home">
      <span>꿈이 많은 어른 아이</span>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'ContentHome',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  height: 100%;
}
.home {
  background-image: url("@/assets/workplace.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100%;
}
</style>
