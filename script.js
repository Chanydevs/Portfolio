function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({
    behavior: "smooth"
  });
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

document.addEventListener("DOMContentLoaded", () => {
  const typedName = document.getElementById("typed-name");
  const nameText = "Cristian Gier"; 
  const typingSpeed = 150;
  const erasingSpeed = 100;
  const delayBetween = 1500;

  let index = 0;
  let isDeleting = false;

  function type() {
    if (!isDeleting) {
    
      typedName.textContent = nameText.substring(0, index + 1);
      index++;
      if (index === nameText.length) {
        isDeleting = true;
        setTimeout(type, delayBetween); 
      } else {
        setTimeout(type, typingSpeed);
      }
    } else {
     
      typedName.textContent = nameText.substring(0, index - 1);
      index--;
      if (index === 0) {
        isDeleting = false;
        setTimeout(type, typingSpeed);
      } else {
        setTimeout(type, erasingSpeed);
      }
    }
  }

  type(); 
});
