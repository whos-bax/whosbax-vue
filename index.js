window.onload = function () {
  const homeStyle = document.getElementById("home");
  console.log(homeStyle.style);
  setTimeout(() => {
    homeStyle.style.visibility = "visible";
  }, 500);
};
