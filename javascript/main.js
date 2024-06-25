const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});
navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});
const ScrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 2000,
};
ScrollReveal().reveal(".headerImage img", {
  ...ScrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".headerContent .sectionDescription", {
  ...ScrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".headerContent .headerBtn", {
  ...ScrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".headerContent h1", {
  ...ScrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".commitmentImage img", {
  ...ScrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".commitmentContent .sectionHeader", {
  ...ScrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".commitmentContent .sectionDescription", {
  ...ScrollRevealOption,
  delay: 1000,
});
