var menuIcon = document.getElementById("menu-icon");
function openNav() {
  let e = document.getElementById("sidenav");
  "100%" == e.style.width
    ? (menuIcon.classList.toggle("open"), (e.style.width = "0px"))
    : (e.style.width = "100%");
}
document.addEventListener("DOMContentLoaded", function () {
  menuIcon.addEventListener("click", function () {
    this.classList.toggle("open");
  });
});
