var searchLink = document.querySelector(".search-btn");
var form = document.querySelector(".hotel-search-form");
var dateCheckin = document.querySelector("#date_checkin");
var dateCheckout = document.querySelector("#date_checkout");
var adults = document.querySelector("#adults");
var kids = document.querySelector("#kids");

searchLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  form.classList.toggle("form-hide");
  form.classList.remove("form-error");
});

form.addEventListener("submit", function (evt) {
  if (!dateCheckout.value || !dateCheckout.value || !adults.value || !kids.value) {
    evt.preventDefault();
    form.classList.remove("form-error");
    form.offsetWidth = form.offsetWidth;
    form.classList.add("form-error");
  } 
  else {
    localStorage.setItem("adults", adults.value);
    localStorage.setItem("kids", kids.value);
  }
});