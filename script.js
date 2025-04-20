function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('active');
  }

  function toggleTOS() {
    const tosContent = document.getElementById('tosContent');
    const arrow = document.querySelector('.tos-dropdown .arrow'); // Få fat i pilen
    tosContent.classList.toggle('active');
    
    // Tjek om tosContent er aktiv og roter pilen
    if (tosContent.classList.contains('active')) {
      arrow.classList.add('rotate');
    } else {
      arrow.classList.remove('rotate');
    }
  }
  




  const toggleBtn = document.getElementById("themeToggle");
  const lightIcon = document.querySelector(".sun-icon");
  const darkIcon = document.querySelector(".moon-icon");
  const body = document.body;
  
  // Hent brugerens sidste valg fra localStorage
  if (localStorage.getItem("theme") === "light") {
    body.classList.add("light");
    lightIcon.style.display = "none";  // Skjul lys ikon
    darkIcon.style.display = "block";  // Vis mørk ikon
  } else {
    body.classList.add("dark");
    lightIcon.style.display = "block";  // Vis lys ikon
    darkIcon.style.display = "none";  // Skjul mørk ikon
  }
  
  // Toggle knap
  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("light");
    body.classList.toggle("dark");
  
    const isLight = body.classList.contains("light");
  
    // Vis og skjul ikoner afhængig af tilstand
    if (isLight) {
      lightIcon.style.display = "none";
      darkIcon.style.display = "block";
    } else {
      lightIcon.style.display = "block";
      darkIcon.style.display = "none";
    }
  
    // Gem brugerens valg i localStorage
    localStorage.setItem("theme", isLight ? "light" : "dark");
  });
  