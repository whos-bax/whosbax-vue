<template>
  <div class="container">
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

    <div class="home" id="home">
      <span>꿈이 많은 어른 아이</span>
    </div>
    <div></div>

    <div class="mainFooter">
      <ul id="mainFooterFont">
        <li>
          <a href="https://notion.so/whosbax" target="_blank">Notion</a>
          <a href="https://github.com/whos-bax" target="_blank">Github</a>
          <a href="https://whothatsme.tistory.com" target="_blank">Tistory</a>
        </li>
        <li>
          <span>Copyright 2022 whosbax. All rights reserved.</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    
  },
};


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
