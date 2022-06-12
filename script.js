const btns = document.querySelector(".btns");
const btn = document.querySelectorAll(".btn");
const modal = document.querySelector(".modal");
const main = document.querySelector(".main-card");
const submit = document.querySelector(".submit");
const value = document.querySelector(".value");

submit.addEventListener("click", function (e) {
  e.preventDefault();
  modal.style.display = "flex";
  main.style.display = "none";
});

btns.addEventListener("click", function (e) {
  e.preventDefault();

  const button = e.target.closest(".btn");

  if (!button) return;

  btn.forEach(
    (btn) =>
      // btn.addEventListener("click", function () {
      btn.classList.remove("btn--active")
    // })
  );
  button.classList.add("btn--active");

  value.textContent = button.textContent;
});
