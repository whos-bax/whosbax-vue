<template>
  <nav
    class="navbar navbar-light navbar-expand-lg bg-light fixed-top p-0 h-0"
    id="mainNav"
  >
    <div class="container" id="mainNavFont">
      <a class="navbar-brand">꿈이 많은 어른 아이</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#home">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#aboutme">About Me</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#skills">Skills</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#project">Project</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script src="@/assets/animation.js"></script>

<style lang='scss' scoped>
// @import "@/assets/scss/mainNav.scss";
#mainNav {
  opacity: 0;
  transition: ease 1s;
  #mainNavFont {
    transition: ease 1s;
    opacity: 0;
  }
}
#navbarNav {
  justify-content: end;
  ul {
    justify-content: end;
  }
}
</style>