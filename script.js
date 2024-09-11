const closes = document.querySelectorAll(".close");

// closes.forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.target.parentElement.style.display = "none";
//     e.preventDefault();
//     console.log(e);
//   });
// });

// YANG EFEKTIF
const container = document.querySelector(".container");

container.addEventListener("click", function (e) {
  if (e.target.className == "close") {
    e.target.parentElement.style.display = "none";
    e.preventDefault();
    e.stopPropagation();
  }
});
