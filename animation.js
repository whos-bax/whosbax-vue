window.onload = function () {
  const homeStyle = document.getElementById("home");
  const navStyle = document.querySelector(".mainNav");
  const footerStyle = document.querySelector(".mainFooter");

  const navFont = document.querySelector("#mainNavFont");
  const footerFont = document.querySelector("#mainFooterFont");

  setTimeout(() => {
    homeStyle.style.visibility = "visible";
    homeStyle.style.opacity = "1";

    navStyle.style.height = "4rem";
    navStyle.style.visibility = "visible";

    footerStyle.style.height = "4rem";
    footerStyle.style.visibility = "visible";
  }, 500);

  setTimeout(() => {
    navFont.style.visibility = "visible";
    navFont.style.opacity = "1";
  }, 1500);
};