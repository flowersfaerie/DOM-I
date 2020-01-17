const siteContent = {
  "nav": {
	"nav-item-0": "Home",
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
	"nav-item-7": "Blog",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// Updates the first navigation link text by Tag Name
let nav1 = document.getElementsByTagName('a')[0];
nav1.textContent = siteContent['nav']['nav-item-1'];

// Updates the second navigation link text by Tag Name
let nav2 = document.getElementsByTagName('a')[1];
nav2.textContent = siteContent['nav']['nav-item-2'];

// Updates the third navigation link text by Tag Name
let nav3 = document.getElementsByTagName('a')[2];
nav3.textContent = siteContent['nav']['nav-item-3'];

// Updates the fourth navigation link text by Tag Name
let nav4 = document.getElementsByTagName('a')[3];
nav4.textContent = siteContent['nav']['nav-item-4'];

// Updates the fifth navigation link text by Tag Name
let nav5 = document.getElementsByTagName('a')[4];
nav5.textContent = siteContent['nav']['nav-item-5'];

// Updates the sixth navigation link text by Tag Name
let nav6 = document.getElementsByTagName('a')[5];
nav6.textContent = siteContent['nav']['nav-item-6'];

// Updates the CTA Image source by ID
let ctaImg = document.getElementById('cta-img');
ctaImg.src = siteContent['cta']['img-src'];

// Updates the Middle Image source by ID
let middleImg = document.getElementById('middle-img');
middleImg.src = siteContent['main-content']['middle-img-src'];

// Updates the CTA H1 text by Tag Name
let ctaH1 = document.getElementsByTagName('h1')[0];
ctaH1.textContent = siteContent['cta']['h1'];
ctaH1.style.color = "darkviolet";

// Updates the CTA Button text by Tag Name
let ctaButton = document.getElementsByTagName('button')[0];
ctaButton.textContent = siteContent['cta']['button'];

// Updates the Features Content H4 & P by Tag Name
let topContent1H = document.getElementsByTagName('h4')[0];
topContent1H.textContent = siteContent['main-content']['features-h4'];
topContent1H.style.display = "flex";
topContent1H.style.justifyContent = "center";
topContent1H.style.color = "darkviolet";

let topContent1P = document.getElementsByTagName('p')[0];
topContent1P.textContent = siteContent['main-content']['features-content'];

// Updates the About Content H4 & P by Tag Name
let topContent2H = document.getElementsByTagName('h4')[1];
topContent2H.textContent = siteContent['main-content']['about-h4'];
topContent2H.style.display = "flex";
topContent2H.style.justifyContent = "center";
topContent2H.style.color = "darkviolet";

let topContent2P = document.getElementsByTagName('p')[1];
topContent2P.textContent = siteContent['main-content']['about-content'];

// Updates the Services Content H4 & P by Tag Name
let topContent3H = document.getElementsByTagName('h4')[2];
topContent3H.textContent = siteContent['main-content']['services-h4'];
topContent3H.style.display = "flex";
topContent3H.style.justifyContent = "center";
topContent3H.style.color = "darkviolet";

let topContent3P = document.getElementsByTagName('p')[2];
topContent3P.textContent = siteContent['main-content']['services-content'];

// Updates the Product Content H4 & P by Tag Name
let topContent4H = document.getElementsByTagName('h4')[3];
topContent4H.textContent = siteContent['main-content']['product-h4'];
topContent4H.style.display = "flex";
topContent4H.style.justifyContent = "center";
topContent4H.style.color = "darkviolet";

let topContent4P = document.getElementsByTagName('p')[3];
topContent4P.textContent = siteContent['main-content']['product-content'];

// Updates the Vision Content H4 & P by Tag Name
let topContent5H = document.getElementsByTagName('h4')[4];
topContent5H.textContent = siteContent['main-content']['vision-h4'];
topContent5H.style.display = "flex";
topContent5H.style.justifyContent = "center";
topContent5H.style.color = "darkviolet";

let topContent5P = document.getElementsByTagName('p')[4];
topContent5P.textContent = siteContent['main-content']['vision-content'];

// Updates the Contact H4 & Ps by Tag Name
let contactH4 = document.getElementsByTagName('h4')[5];
contactH4.textContent = siteContent['contact']['contact-h4'];

let contactP1 = document.getElementsByTagName('p')[5];
contactP1.textContent = siteContent['contact']['address'];

let contactP2 = document.getElementsByTagName('p')[6];
contactP2.textContent = siteContent['contact']['phone'];

let contactP3 = document.getElementsByTagName('p')[7];
contactP3.textContent = siteContent['contact']['email'];

// Updates the Footer text by Tag Name
let footerP = document.getElementsByTagName('p')[8];
footerP.textContent = siteContent['footer']['copyright'];

// Adds a new Nav link using .Prepend
let nav = document.getElementsByTagName('nav')[0];
let navPrepend = document.createElement('a');
navPrepend.textContent = siteContent['nav']['nav-item-0'];
navPrepend.src = "#";
nav.prepend(navPrepend);

// Adds a new Nav link using .Append
let navAppend = document.createElement('a');
navAppend.src = "#";
navAppend.textContent = siteContent['nav']['nav-item-7'];
nav.appendChild(navAppend);

// Updates the navigation links color to "green"
let navGreen = document.getElementsByTagName('a');
Array.from(navGreen).forEach(element => {
element.style.color = "green";
element.style.fontWeight = "bolder"});


