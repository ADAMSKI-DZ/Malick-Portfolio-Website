const contactAll = document.querySelector(".contact");
const contactBtn = document.querySelector(".contact-btn");
const closeBtn = document.querySelector(".close-btn");
const container = document.querySelector(".container");

contactBtn.addEventListener("click", () => {
  container.classList.add("active");
  setTimeout(() => {
    contactAll.classList.add("active");
  }, 300);
});

closeBtn.addEventListener("click", () => {
  contactAll.classList.remove("active");
  container.classList.remove("active");
});
