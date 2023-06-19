//declarations for navbar
let navbarToggler = $("#navbarToggler");
let closeOffCanvas = $("#closeOffCanvas");
let iconMenu = $(".iconMenu");
let navLinks = $(".nav-link");
//declarations for modal
let myModal = $("#myModal");
let modalImage = $("#modalImage");
let modalCaption = $("#modalCaption");
//page loader
$(window).load(function () {
  $("#loading").hide();
});
//display close button / hide menu icons on sidebar(offcanvas)
navbarToggler.click(function () {
  closeOffCanvas.css("display", "inline-flex");
  iconMenu.css("display", "none");
  navLinks.css("color", "white");
});
//on window resize hide close button and show menu icons
function checkForWindowResize() {
  if (window.innerWidth >= 576) {
    closeOffCanvas.css("display", "none");
    iconMenu.css("display", "block");
    navLinks.css("color", "black");
  }
}
window.addEventListener("resize", checkForWindowResize);
//display modal - onclick event on our work images
function onClick(element) {
  modalImage.attr("src", element.src);
  modalCaption.html(element.alt);
}
