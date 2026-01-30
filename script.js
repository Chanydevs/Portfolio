function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({
    behavior: "smooth"
  });
}

  function startRoleTyping(options) {
  const el = document.getElementById(options.elId);
  if (!el) return;
  const roles = options.roles || [];
  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const type = () => {
    const current = roles[roleIndex];
    if (!deleting) {
      el.textContent = current.slice(0, charIndex + 1);
      charIndex++;
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(type, options.pauseAfter || 1400);
        return;
      }
      setTimeout(type, options.typeSpeed || 90);
    } else {
      el.textContent = current.slice(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(type, options.pauseBetween || 300);
        return;
      }
      setTimeout(type, options.deleteSpeed || 40);
    }
  };

  type();
}


document.addEventListener('DOMContentLoaded', function () {
  startRoleTyping({
    elId: 'typed-role',
    roles: ['Frontend Developer','UI/UX Designer'],
    typeSpeed: 90,
    deleteSpeed: 40,
    pauseAfter: 1500,
    pauseBetween: 400
  });
});
const toggle = document.getElementById("darkModeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
    if(document.body.classList.contains("light-mode")){
    toggle.textContent = "🌙"; 
  } else {
    toggle.textContent = "☀️"; 
  }
});

