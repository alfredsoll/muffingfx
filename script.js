function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('active');
}

function toggleTOS() {
  const tosContent = document.getElementById('tosContent');
  const arrow = document.querySelector('.tos-dropdown .arrow');
  tosContent.classList.toggle('active');
  arrow.classList.toggle('rotate');
}

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
  lightIcon.style.display = isLight ? "none" : "block";
  darkIcon.style.display = isLight ? "block" : "none";
  localStorage.setItem("theme", isLight ? "light" : "dark");
});



//Animation
document.addEventListener("DOMContentLoaded", () => {
  const revealElements = document.querySelectorAll(".scroll-reveal");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible"); // RESET-effekten
      }
    });
  }, {
    threshold: 0.15 // justér hvis animation skal ske før/først når hele elementet vises
  });

  revealElements.forEach((el) => observer.observe(el));
});


// Funktion til at sætte HTML på et element
function setHTML(selector, html) {
  document.querySelector(selector).innerHTML = html;
}


function changeLanguage(language) {
  // Brug setHTML til at opdatere tekstindholdet for forskellige sektioner
  setHTML(".lang-home", translations[language].home);
  setHTML(".lang-about", translations[language].about);
  setHTML(".lang-team", translations[language].team);
  setHTML(".lang-portfolio", translations[language].portfolio);
  setHTML(".lang-portfolio-btn", translations[language].portfolioBtn);
  setHTML(".lang-welcome", translations[language].welcome);
  setHTML(".lang-description", translations[language].description);
  setHTML(".lang-footer-text", translations[language].footerText);
  setHTML(".lang-discord", translations[language].discord);
  setHTML(".lang-twitter", translations[language].twitter);
  setHTML(".lang-instagram", translations[language].instagram);

  // For About
  setHTML(".lang-aboutp1", translations[language].aboutp1);
  setHTML(".lang-aboutp2", translations[language].aboutp2);
  setHTML(".lang-aboutsub1", translations[language].aboutsub1);
  setHTML(".lang-aboutp3", translations[language].aboutP3);
  setHTML(".lang-aboutp4", translations[language].aboutP4);
  setHTML(".lang-aboutsub2", translations[language].aboutSub2);
  setHTML(".lang-aboutp5", translations[language].aboutP5);
  setHTML(".lang-aboutp6", translations[language].aboutP6);
  setHTML(".lang-aboutsub3", translations[language].aboutSub3);
  setHTML(".lang-aboutp7", translations[language].aboutP7);
  setHTML(".lang-aboutp8", translations[language].aboutP8);
  setHTML(".lang-aboutsub4", translations[language].aboutSub4);
  setHTML(".lang-aboutp9", translations[language].aboutP9);
  setHTML(".lang-aboutp10", translations[language].aboutP10);
  setHTML(".lang-aboutsub5", translations[language].aboutSub5);
  setHTML(".lang-aboutp11", translations[language].aboutP11);
  setHTML(".lang-aboutp12", translations[language].aboutP12);

  // For ToS (Terms of Service)
  setHTML(".lang-tostoggle", translations[language].tosToggle);
  setHTML(".lang-tosintro", translations[language].tosIntro);
  setHTML(".lang-tosupdate", translations[language].tosUpdate);
  setHTML(".lang-tosupdatetext", translations[language].tosUpdateText);
  setHTML(".lang-tospayment", translations[language].tosPayment);
  setHTML(".lang-tospay1", translations[language].tosPay1);
  setHTML(".lang-tospay2", translations[language].tosPay2);
  setHTML(".lang-tospay3", translations[language].tosPay3);
  setHTML(".lang-tosdelivery", translations[language].tosDelivery);
  setHTML(".lang-tosdel1", translations[language].tosDel1);
  setHTML(".lang-tosdel2", translations[language].tosDel2);
  setHTML(".lang-tosrevisions", translations[language].tosRevisions);
  setHTML(".lang-tosrev1", translations[language].tosRev1);
  setHTML(".lang-tosrev2", translations[language].tosRev2);
  setHTML(".lang-tosusage", translations[language].tosUsage);
  setHTML(".lang-tosuse1", translations[language].tosUse1);
  setHTML(".lang-tosuse2", translations[language].tosUse2);
  setHTML(".lang-toscopyright", translations[language].tosCopyright);
  setHTML(".lang-toscopy1", translations[language].tosCopy1);
  setHTML(".lang-toscopy2", translations[language].tosCopy2);
  setHTML(".lang-toscopy3", translations[language].tosCopy3);
  setHTML(".lang-toswarning", translations[language].tosWarning);
  setHTML(".lang-toscontact", translations[language].tosContact);
  setHTML(".lang-tosupdated", translations[language].tosUpdated);


  //team

  setHTML(".lang-meetteam", translations[language].meetteam);
  setHTML(".lang-teamdescription", translations[language].teamdescription);
  setHTML(".lang-feedbackmuffin", translations[language].feedbackmuffin);
  setHTML(".lang-feedbackalfred", translations[language].feedbackalfred);
  setHTML(".lang-feedbackida", translations[language].feedbackida);
  setHTML(".lang-feedbackfoxi", translations[language].feedbackfoxi);

  //portfolio

  setHTML(".portfoliode", translations[language].portfoliode)

  // Skift flag og sprog i lokal opbevaring
  danishFlag.style.display = language === "danish" ? "block" : "none";
  englishFlag.style.display = language === "english" ? "block" : "none";
  localStorage.setItem("language", language);
}



const translations = {
  danish: {
    welcome: "Velkommen til MuffinGFX",
    description: "Vi designer visuelt powerful grafik, skræddersyet til dit brand.",
    portfolioBtn: "Se Portfolio",
    home: "Hjem",
    about: "Om Os",
    team: "Team",
    portfolio: "Portfolio",
    discord: "Discord",
    twitter: "Twitter",
    instagram: "Instagram",
    footerText: "© 2025 MuffinGFX. Alle rettigheder forbeholdes.",

    //About

    aboutTitle: "Om MuffinGFX",
    aboutp1: "Muffingfx blev grundlagt af Muffin og Ida, to grafiske entusiaster, der begge brændte for design og ønskede at skabe et professionelt grafisk team.",
    aboutp2: "Vi er et lille, dedikeret team, der kombinerer flere års erfaring indenfor grafisk design og markedsføring.",

    aboutsub1: "<strong>Vores arbejde</strong>",

    aboutP3: "Vi specialiserer os primært i at designe logoer og bannere til YouTube og andre sociale medier.",

    aboutP4: "Vi arbejder tæt sammen med vores kunder for at sikre, at deres vision bliver realiseret.",

    aboutSub2: "<strong>Teamet</strong>",

    aboutP5: "Vores team består af kreative designere, der har en stærk baggrund i både Minecraft server support og hosting support.",
    aboutP6: "Denne alsidighed gør, at vi kan tilpasse vores løsninger til enhver situation.",
    aboutSub3: "<strong>Vores erfaring og samarbejde</strong>",
    aboutP7: "Vi har haft fornøjelsen af at arbejde med TierrG (nu Aleko)...",
    aboutP8: "Vores erfaring med både private og erhvervslivet har givet os bred viden.",
    aboutSub4: "<strong>Vores mission</strong>",
    aboutP9: "Hos Muffingfx handler det ikke kun om at designe grafik – det handler om at skabe værdi.",
    aboutP10: "En glad kunde er det, vi værdsætter mest, og vi arbejder hårdt for at opnå det.",
    aboutSub5: "<strong>Vores værdi</strong>",
    aboutP11: "Vi mener, at der er meget få danske grafikhold, der kan matche vores erfaring og kreativitet.",
    aboutP12: "Vi er stolte af at være et innovativt og passioneret team.",

    //TOS

    tosToggle: "Vilkår for brug (ToS)",
    tosIntro: "Ved at købe eller bruge mine grafiske designs, accepterer du følgende vilkår:",
    tosUpdate: "Vilkårene kan blive opdateret",
    tosUpdateText: "Vilkårene kan blive opdateret fra tid til anden.",
    tosPayment: "Betalingsvilkår",
    tosPay1: "Fuld betaling kræves forud for alle grafiske design.",
    tosPay2: "Alle salg er endelige, og der gives ingen refusion.",
    tosPay3: "Betaling skal ske via den aftalte metode.",
    tosDelivery: "Levering",
    tosDel1: "Leveringstiden varierer afhængigt af opgavens kompleksitet.",
    tosDel2: "Alle filer vil blive sendt i høj kvalitetsformater.",
    tosRevisions: "Revisioner",
    tosRev1: "Jeg tilbyder op til 2 revisioner.",
    tosRev2: "Revisioner skal anmodes om inden for 3 timer.",
    tosUsage: "Brugsretter",
    tosUse1: "Designs er til personlig eller kommerciel brug.",
    tosUse2: "Videreforhandling eller redistribution er forbudt.",
    tosCopyright: "Ophavsretter",
    tosCopy1: "Designs forbliver min intellektuelle ejendom.",
    tosCopy2: "Du må ikke bruge uden at have købt det.",
    tosCopy3: "Du må ikke påstå det er dit eget arbejde.",
    tosWarning: "Hvis du overtræder disse regler, forbeholder jeg mig retten til at tage juridiske skridt.",
    tosContact: "Kontakt os ved spørgsmål om vilkår.",
    tosUpdated: "(Sidst opdateret 22-01-2025)",

    //team

    meetteam: "Mød Teamet",
    teamdescription: "Vi er et kreativt team af designere, marketingfolk og moderatorer, der arbejder sammen for at levere fantastiske grafiske løsninger og en positiv oplevelse på vores platforme. Vi tror på samarbejde, innovation og en passion for kvalitet i alt, hvad vi gør.",
    roledesigner: 'Designer',
    rolemarketing: 'Marketing Manager',
    roleartist: 'Digital Artist',
    rolemoderator: 'Moderator',
    feedbackmuffin: '"Jeg elsker at hjælpe kunderne og lave fede designs – især mine Minecraft-logoer, dem er jeg ret stolt af. Der er altid plads til at forbedre kvaliteten"',
    feedbackalfred: '"Jeg elsker friheden og det søde team. Jeg har bl.a. skaffet kunder og stået for samarbejdet med Softwave. Vi kunne dog blive bedre til at promovere os selv."',
    feedbackida: '"Jeg elsker at tegne og nyder at kunne gøre andre glade med det. Jeg er især stolt af de Minecraft-logoer, jeg har lavet – men jeg arbejder hele tiden på at få endnu flere detaljer med."',
    feedbackfoxi: '"Jeg elsker fællesskabet i teamet – vi har et virkelig godt sammenhold. Jeg har hjulpet med at promovere os og holde styr på forskellige ting bag kulisserne. Jeg tager det som det kommer og prøver bare at være der, hvor der er brug for mig."',
    mail: 'mail:',

    //portfolio
    sectionDescription: "Her kan du udforske vores tidligere arbejde fordelt på forskellige kategorier. Vi har samlet nogle af vores bedste projekter inden for Minecraft grafik, YouTube branding og meget mere. Klik rundt og se, hvad vi kan – og bliv inspireret!",
    minecraft: "Minecraft",
    youtube: "YouTube",
    other: "Andet",


  },
  english: {
    welcome: "Welcome to MuffinGFX",
    description: "We design visually powerful graphics, tailored to your brand.",
    portfolioBtn: "See Portfolio",
    home: "Home",
    about: "About Us",
    team: "Team",
    portfolio: "Portfolio",
    discord: "Discord",
    twitter: "Twitter",
    instagram: "Instagram",
    footerText: "© 2025 MuffinGFX. All rights reserved.",

    //About

    aboutTitle: "About MuffinGFX",
    aboutp1: "Muffingfx was founded by Muffin and Ida, two graphic enthusiasts who were both passionate about design and wanted to create a professional graphic team.",
    aboutp2: "We are a small, dedicated team that combines several years of experience in graphic design and marketing.",
    aboutsub1: "<strong>Our work</strong>",

    aboutP3: "We specialize in designing logos and banners for YouTube and other social media.",

    aboutP4: "We work closely with our clients to ensure their vision is brought to life.",
    aboutSub2: "<strong>The Team</strong>",
    aboutP5: "Our team consists of creative designers with strong experience in Minecraft server support and hosting.",
    aboutP6: "This flexibility allows us to adapt to any situation.",
    aboutSub3: "<strong>Experience & Collaboration</strong>",
    aboutP7: "We've had the pleasure of working with TierrG (now Aleko)...",
    aboutP8: "Our experience with both private and business clients has given us broad insight.",
    aboutSub4: "<strong>Our Mission</strong>",
    aboutP9: "At MuffinGFX, it's not just about designing — it's about creating value.",
    aboutP10: "A happy customer is what we value most, and we work hard to achieve that.",
    aboutSub5: "<strong>Our Values</strong>",
    aboutP11: "We believe few Danish design teams can match our experience and creativity.",
    aboutP12: "We're proud to be an innovative and passionate team.",


    //TOS

    tosToggle: "Terms of Service (ToS)",
    tosIntro: "By purchasing or using my graphic designs, you accept the following terms:",
    tosUpdate: "Terms may be updated",
    tosUpdateText: "Terms may be updated from time to time.",
    tosPayment: "Payment Terms",
    tosPay1: "Full payment is required upfront for all designs.",
    tosPay2: "All sales are final and non-refundable.",
    tosPay3: "Payment must be made via agreed method.",
    tosDelivery: "Delivery",
    tosDel1: "Delivery time depends on the complexity of the task.",
    tosDel2: "All files will be sent in high-quality formats.",
    tosRevisions: "Revisions",
    tosRev1: "Up to 2 revisions are included.",
    tosRev2: "Revisions must be requested within 3 hours.",
    tosUsage: "Usage Rights",
    tosUse1: "Designs are for personal or commercial use.",
    tosUse2: "Reselling or redistributing is prohibited.",
    tosCopyright: "Copyright",
    tosCopy1: "Designs remain my intellectual property.",
    tosCopy2: "You may not use without purchasing.",
    tosCopy3: "You may not claim it as your own.",
    tosWarning: "If you violate these rules, I reserve the right to take legal action.",
    tosContact: "Contact us with questions about the terms.",
    tosUpdated: "(Last updated 22-01-2025)",



    //team
    meetteam: 'Meet the Team',
    teamdescription: 'We are a creative team of designers, marketers, and moderators working together to deliver amazing graphic solutions and a positive experience across our platforms. We believe in collaboration, innovation, and a passion for quality in everything we do.',
    roledesigner: 'Designer',
    rolemarketing: 'Marketing Manager',
    roleartist: 'Digital Artist',
    rolemoderator: 'Moderator',
    feedbackmuffin: '"I love helping customers and creating cool designs – especially my Minecraft logos, which I am quite proud of. There is always room to improve the quality."',
    feedbackalfred: '"I love the freedom and the sweet team. I have, among other things, brought in clients and managed collaboration with Softwave. However, we could improve our self-promotion."',
    feedbackida: '"I love drawing and enjoy making others happy with it. I am especially proud of the Minecraft logos I have created – but I am constantly working to add even more detail."',
    feedbackfoxi: '"I love the community within the team – we have a really strong bond. I have helped promote us and manage things behind the scenes. I just take it as it comes and try to be where I am needed."',
    mail: 'mail:',

    //portfolio
    sectionDescription: "Here you can explore our previous work divided into various categories. We've gathered some of our best projects in Minecraft graphics, YouTube branding, and more. Click around and see what we can do – and get inspired!",
    minecraft: "Minecraft",
    youtube: "YouTube",
    other: "Other",
  }
};

const languageToggle = document.getElementById("languageToggle");
const langHome = document.querySelectorAll(".lang-home");
const langAbout = document.querySelectorAll(".lang-about");
const langTeam = document.querySelectorAll(".lang-team");
const langPortfolio = document.querySelectorAll(".lang-portfolio");
const langPortfolioBtn = document.querySelectorAll(".lang-portfolio-btn");
const langWelcome = document.querySelectorAll(".lang-welcome");
const langDescription = document.querySelectorAll(".lang-description");
const langFooterText = document.querySelectorAll(".lang-footer-text");
const langDiscord = document.querySelectorAll(".lang-discord");
const langTwitter = document.querySelectorAll(".lang-twitter");
const langInstagram = document.querySelectorAll(".lang-instagram");

//About
const langAboutp1 = document.querySelectorAll(".lang-aboutp1")
const langAboutp2 = document.querySelectorAll(".lang-aboutp2")
const langAboutSub1 = document.querySelectorAll(".lang-aboutsub1")
const langAboutp3 = document.querySelectorAll(".lang-aboutp3")
const langAboutp4 = document.querySelectorAll(".lang-aboutp4")
const langAboutSub2 = document.querySelectorAll(".lang-aboutsub2")
const langAboutp5 = document.querySelectorAll(".lang-aboutp5")
const langAboutp6 = document.querySelectorAll(".lang-aboutp6")
const langAboutSub3 = document.querySelectorAll(".lang-aboutsub3")
const langAboutp7 = document.querySelectorAll(".lang-aboutp7")
const langAboutp8 = document.querySelectorAll(".lang-aboutp8")
const langAboutSub4 = document.querySelectorAll(".lang-aboutsub4")
const langAboutp9 = document.querySelectorAll(".lang-aboutp9")
const langAboutp10 = document.querySelectorAll(".lang-aboutp10")
const langAboutSub5 = document.querySelectorAll(".lang-aboutsub5")
const langAboutp11 = document.querySelectorAll(".lang-aboutp11")
const langAboutp12 = document.querySelectorAll(".lang-aboutp12");



//TOS

const langTosToggle = document.querySelectorAll(".lang-tostoggle");
const langTosIntro = document.querySelectorAll(".lang-tosintro");
const langTosUpdate = document.querySelectorAll('.lang-tosupdate');
const langTosUpdateText = document.querySelectorAll(".lang-tosupdatetext");
const langTosPayment = document.querySelectorAll(".lang-tospayment");
const langTosPay1 = document.querySelectorAll(".lang-tospay1");
const langTosPay2 = document.querySelectorAll(".lang-tospay2");
const langTosPay3 = document.querySelectorAll(".lang-tospay3");
const langTosDelivery = document.querySelectorAll(".lang-tosdelivery");
const langTosDel1 = document.querySelectorAll(".lang-tosdel1");
const langTosDel2 = document.querySelectorAll(".lang-tosdel2");
const langTosRevisions = document.querySelectorAll(".lang-tosrevisions");
const langTosRev1 = document.querySelectorAll(".lang-tosrev1");
const langTosRev2 = document.querySelectorAll(".lang-tosrev2");
const langTosUsage = document.querySelectorAll(".lang-tosusage");
const langTosUse1 = document.querySelectorAll(".lang-tosuse1");
const langTosUse2 = document.querySelectorAll(".lang-tosuse2");
const langTosCopyright = document.querySelectorAll(".lang-toscopyright");
const langTosCopy1 = document.querySelectorAll(".lang-toscopy1");
const langTosCopy2 = document.querySelectorAll(".lang-toscopy2");
const langTosCopy3 = document.querySelectorAll(".lang-toscopy3");
const langTosWarning = document.querySelectorAll(".lang-toswarning");
const langTosContact = document.querySelectorAll(".lang-toscontact");
const langTosUpdated = document.querySelectorAll(".lang-tosupdated");


//team
const langMeetTeam = document.querySelectorAll(".lang-meetteam");
const langTeamDescription = document.querySelectorAll(".lang-teamdescription")
const langFeedbackMuffin = document.querySelectorAll(".lang-feedbackmuffin")
const langFeedbackAlfred = document.querySelectorAll(".lang-feedbackalfred")
const langFeedbackIda = document.querySelectorAll(".lang-feedbackida")
const langFeedbackFoxi = document.querySelectorAll(".lang-feedbackfoxi")

//portflio

const langPortfolioDe = document.querySelectorAll(".lang-portfoliode")

const danishFlag = document.querySelector(".danish-icon");
const englishFlag = document.querySelector(".english-icon");

let currentLanguage = localStorage.getItem("language") || "danish";

function changeLanguage(language) {
  langHome.forEach(el => el.textContent = translations[language].home);
  langAbout.forEach(el => el.textContent = translations[language].about);
  langTeam.forEach(el => el.textContent = translations[language].team);
  langPortfolio.forEach(el => el.textContent = translations[language].portfolio);
  langPortfolioBtn.forEach(el => el.textContent = translations[language].portfolioBtn);
  langWelcome.forEach(el => el.textContent = translations[language].welcome);
  langDescription.forEach(el => el.textContent = translations[language].description);
  langFooterText.forEach(el => el.textContent = translations[language].footerText);
  langDiscord.forEach(el => el.textContent = translations[language].discord);
  langTwitter.forEach(el => el.textContent = translations[language].twitter);
  langInstagram.forEach(el => el.textContent = translations[language].instagram);

  //About

  langAboutp1.forEach(el => el.innerHTML = translations[language].aboutp1)
  langAboutp2.forEach(el => el.innerHTML = translations[language].aboutp2)
  langAboutSub1.forEach(el => el.innerHTML = translations[language].aboutsub1)
  langAboutp3.forEach(el => el.innerHTML = translations[language].aboutP3)
  langAboutp4.forEach(el => el.innerHTML = translations[language].aboutP4)
  langAboutSub2.forEach(el => el.innerHTML = translations[language].aboutSub2)
  langAboutp5.forEach(el => el.textContent = translations[language].aboutP5)
  langAboutp6.forEach(el => el.textContent = translations[language].aboutP6)
  langAboutSub3.forEach(el => el.innerHTML = translations[language].aboutSub3)
  langAboutp7.forEach(el => el.textContent = translations[language].aboutP7)
  langAboutp8.forEach(el => el.textContent = translations[language].aboutP8)
  langAboutSub4.forEach(el => el.innerHTML = translations[language].aboutSub4)
  langAboutp9.forEach(el => el.textContent = translations[language].aboutP9)
  langAboutp10.forEach(el => el.textContent = translations[language].aboutP10)
  langAboutSub5.forEach(el => el.innerHTML = translations[language].aboutSub5)
  langAboutp11.forEach(el => el.textContent = translations[language].aboutP11)
  langAboutp12.forEach(el => el.textContent = translations[language].aboutP12);
  
  
  //TOS

  langTosToggle.forEach(el => el.textContent = translations[language].tosToggle);
  langTosIntro.forEach(el => el.textContent = translations[language].tosIntro);
  langTosUpdate.forEach(el => el.textContent = translations[language].tosUpdate);
  langTosUpdateText.forEach(el => el.textContent = translations[language].tosUpdateText);
  langTosPayment.forEach(el => el.textContent = translations[language].tosPayment);
  langTosPay1.forEach(el => el.textContent = translations[language].tosPay1);
  langTosPay2.forEach(el => el.textContent = translations[language].tosPay2);
  langTosPay3.forEach(el => el.textContent = translations[language].tosPay3);
  langTosDelivery.forEach(el => el.textContent = translations[language].tosDelivery);
  langTosDel1.forEach(el => el.textContent = translations[language].tosDel1);
  langTosDel2.forEach(el => el.textContent = translations[language].tosDel2);
  langTosRevisions.forEach(el => el.textContent = translations[language].tosRevisions);
  langTosRev1.forEach(el => el.textContent = translations[language].tosRev1);
  langTosRev2.forEach(el => el.textContent = translations[language].tosRev2);
  langTosUsage.forEach(el => el.textContent = translations[language].tosUsage);
  langTosUse1.forEach(el => el.textContent = translations[language].tosUse1);
  langTosUse2.forEach(el => el.textContent = translations[language].tosUse2);
  langTosCopyright.forEach(el => el.textContent = translations[language].tosCopyright);
  langTosCopy1.forEach(el => el.textContent = translations[language].tosCopy1);
  langTosCopy2.forEach(el => el.textContent = translations[language].tosCopy2);
  langTosCopy3.forEach(el => el.textContent = translations[language].tosCopy3);
  langTosWarning.forEach(el => el.textContent = translations[language].tosWarning);
  langTosContact.forEach(el => el.textContent = translations[language].tosContact);
  langTosUpdated.forEach(el => el.textContent = translations[language].tosUpdated);


  //team
  langMeetTeam.forEach(el => el.textContent = translations[language].meetteam);
  langTeamDescription.forEach(el => el.textContent = translations[language].teamdescription)
  langFeedbackMuffin.forEach(el => el.textContent = translations[language].feedbackmuffin);
  langFeedbackAlfred.forEach(el => el.textContent = translations[language].feedbackalfred);
  langFeedbackIda.forEach(el => el.textContent = translations[language].feedbackida);
  langFeedbackFoxi.forEach(el => el.textContent = translations[language].feedbackfoxi);

  langPortfolioDe.forEach(el => el.textContent = translations[language].portfoliode);

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
