var menuIcon = document.getElementById("menu-icon");
function openNav() {
  let e = document.getElementById("sidenav");
  if (e.style.width == "100%") {
      // This means the navigation is currently open, so we're going to close it.
      e.style.width = "0px"; // Close the navigation
  } else {
      e.style.width = "100%"; // Open the navigation
  }
  // Regardless of the condition above, toggle the 'open' class each time the function is called.
  menuIcon.classList.toggle("open");
}