function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}



const mainTabs = document.querySelectorAll('.main-tab');
const subContainer = document.getElementById('subCategories');
const grid = document.getElementById('portfolioGrid');

const data = {
    minecraft: {
      "Logoer": ["novidklogogg.png", "logo2.png", "logo3.png", "nebdyrlogo2.png", "image_42.png", "logo6.png", "logo7.png"],
      "Bannere": ["nebdyrbanner2.png", "New_Project_77.png", "mufingfx.png", "TierrG_Banner.png", "novibanner.png"],
      "Thumbnails": ["thumb1.png", "thumb2.png", "thumb3.png", "thumb4.png", "thumb5.png", "thumb6.png"]
    },
    youtube: {
      "Logoer": ["logo1.png", "logo2.png", "logo3.png", "logo4.png", "logo5.png"],
      "Bannere": ["banner1.png", "banner2.png", "banner3.png", "banner4.png"],
      "Thumbnails": ["thumb1.png", "thumb2.png", "thumb3.png", "thumb4.png", "thumb5.png"]
    },
    andet: {
      "Andet": ["billede-1.png", "billede-2.png", "billede-3.png", "billede-4.png", "billede-5.png", "billede-6.png", "billede-7.png", "billede-8.png", "billede-9.png", "billede-10.png"],
      //"Hjemmesider": ["website1.png", "website2.png"]
    }
  };
  

mainTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    mainTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const selected = tab.dataset.main;
    renderSubTabs(selected);
    renderGrid(selected, Object.keys(data[selected])[0]); 
  });
});

function renderSubTabs(mainCategory) {
  subContainer.innerHTML = "";
  Object.keys(data[mainCategory]).forEach((sub, i) => {
    const btn = document.createElement("button");
    btn.className = `sub-tab ${i === 0 ? "active" : ""}`;
    btn.textContent = sub;
    btn.addEventListener("click", () => {
      document.querySelectorAll(".sub-tab").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderGrid(mainCategory, sub);
    });
    subContainer.appendChild(btn);
  });
}

function renderGrid(main, sub) {
    grid.innerHTML = "";
  
    const images = data[main][sub];
  
    images.forEach(image => {
      const card = document.createElement("div");
      card.className = "portfolio-card";
  
      if (sub === "Bannere") {
        card.classList.add("banner");
      } else if (sub === "Thumbnails") {
        card.classList.add("thumbnail");
      }
  
      const imagePath = main === "andet" 
        ? `img/andet/${image}` 
        : `img/${main.toLowerCase()}/${sub.toLowerCase()}/${image}`; 
  
      const img = document.createElement("img");
      img.src = imagePath; 
      img.alt = `${sub} - ${image}`;
      img.classList.add("portfolio-img");
  
      // Append image to card
      card.appendChild(img);
      grid.appendChild(card);
    });
}
  

// Init first load
renderSubTabs("minecraft");
renderGrid("minecraft", "Logoer");




const toggleBtn = document.getElementById("themeToggle");
const lightIcon = document.querySelector(".sun-icon");
const darkIcon = document.querySelector(".moon-icon");
const body = document.body;

if (localStorage.getItem("theme") === "light") {
  body.classList.add("light");
  lightIcon.style.display = "none"; 
  darkIcon.style.display = "block"; 
} else {
  body.classList.add("dark");
  lightIcon.style.display = "block";
  darkIcon.style.display = "none"; 
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light");
  body.classList.toggle("dark");

  const isLight = body.classList.contains("light");

  if (isLight) {
    lightIcon.style.display = "none";
    darkIcon.style.display = "block";
  } else {
    lightIcon.style.display = "block";
    darkIcon.style.display = "none";
  }


  localStorage.setItem("theme", isLight ? "light" : "dark");
});



//translate


function setHTML(selector, html) {
  const elements = document.querySelectorAll(selector);
  elements.forEach(el => el.innerHTML = html);
}

const translations = {
  enlish: {
    home: "Home",
    about: "About",
    team: "Team",
    portfolio: "Portfolio",
    discord: "Discord",
    portfoliodes: "Here you can explore our previous work across different categories. We've gathered some of our best projects in Minecraft graphics, YouTube branding, and more. Click around and get inspired!",
    minecraft: "Minecraft",
    youtube: "YouTube",
    other: "Other",
    partner:"Our Partners",
    softdec:"Online Webstore - We deliver Graphic and Support",
    nextpartner: "Do you want to be our next partner?",
    nextpartnercontact: "Contact us today!",

    copyright: "© 2025 MuffinGFX. All rights reserved.",
    discordFooter: "Discord",
    
    twitter: "Twitter",
    instagram: "Instagram"
  },
  danish: {
    home: "Hjem",
    about: "About",
    team: "Team",
    portfolio: "Portfolio",
    discord: "Discord",
    portfoliodes: "Her kan du udforske vores tidligere arbejde fordelt på forskellige kategorier. Vi har samlet nogle af vores bedste projekter inden for Minecraft grafik, YouTube branding og meget mere. Klik rundt og se, hvad vi kan – og bliv inspireret!",
    minecraft: "Minecraft",
    youtube: "YouTube",
    other: "Andet",
    partner: "Vores partnere",
    softdec: "Online webstore – Vi leverer grafik og support",
    nextpartner: "Skal du være vores næste partner?",
    nextpartnercontact: "Kontakt os i dag!",
  }
};

const danishFlag = document.querySelector(".danish-icon");
const englishFlag = document.querySelector(".english-icon");

let currentLanguage = localStorage.getItem("language") || "danish";

function changeLanguage(language) {
  setHTML(".lang-portfoliodes", translations[language].portfoliodes);
  setHTML(".lang-about", translations[language].about);
  setHTML(".lang-team", translations[language].team);
  setHTML(".lang-portfolio", translations[language].portfolio);
  setHTML(".lang-portfoliode", translations[language].portfoliode);
  setHTML(".lang-discord", translations[language].discord);
  setHTML(".lang-twitter", translations[language].twitter);
  setHTML(".lang-instagram", translations[language].instagram);
  setHTML(".lang-footer-text", translations[language].footerText);

  // Flags
  danishFlag.style.display = language === "danish" ? "block" : "none";
  englishFlag.style.display = language === "english" ? "block" : "none";

  localStorage.setItem("language", language);
}

document.addEventListener("DOMContentLoaded", () => {
  changeLanguage(currentLanguage);

  document.getElementById("languageToggle").addEventListener("click", () => {
    currentLanguage = currentLanguage === "danish" ? "english" : "danish";
    changeLanguage(currentLanguage);
  });
});
