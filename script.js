function scrollToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}
const toggle = document.getElementById("darkModeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
    if(document.body.classList.contains("light-mode")){
    toggle.textContent = "🌙"; 
  } else {
    toggle.textContent = "☀️"; 
  }
});