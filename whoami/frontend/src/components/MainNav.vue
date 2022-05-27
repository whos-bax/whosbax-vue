<template>
  <div class="mainNav">
    
    <ul id="mainNavFont">
      <li>
        <a href="#home">홈</a>
      </li>
      <li><a href="#introduce">소개</a></li>
      <li>
        <a href="#home">홈</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MainNav",
};
</script>

<style lang='scss'>
.mainNav {
  background-color: $TEST_BG;
  @include center;
}
</style>