const closes = document.querySelectorAll(".close");

closes.forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.target.parentElement.style.display = "none";
    e.preventDefault();
    console.log(e);
  });
});
