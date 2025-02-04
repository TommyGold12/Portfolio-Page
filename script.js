let projects = [
  {
    id: "fitzone",
    name: "FitZone app",
    date: "February 2024",
    skills: " HTML, CSS, JavaScript",
    img: "img/correct-signal-svgrepo-com.svg",
    p_1: "Project based on mockAPI database",
    p_2: "Register and take advantage of all possibilities",
    p_3: "Change the workout plan whatever you want",
    p_4: "Full responsive design with high loading performance",
    wallpaper: "img/project1-img.jpg",
    link: "https://tommygold12.github.io/FitZone/",
  },
  {
    id: "rentahouse",
    name: "Peace of Mind",
    date: "August 2024",
    skills: "JavaScript, React, CSS",
    img: "img/correct-signal-svgrepo-com.svg",
    p_1: "Website inspired by Booking.com",
    p_2: "User-Friendly Filter System",
    p_3: "Full responsive design with high loading performance",
    p_4: "Project is still in progress",
    wallpaper: "img/RentAhouse.png",
    link: "https://peace-of-minds-final-4qmq94eo5-tommygold12s-projects.vercel.app/",
  },
  {
    id: "",
    name: "Country Generator",
    date: "December 2024",
    skills: "HTML, CSS, JavaScript, Web API",
    img: "",
    p_1: "Improve your knowledge",
    p_2: "Everything you want to know about the countries in one click",
    p_3: "Fast and easy to use",
    p_4: "",
    wallpaper: "img/countryGenerator.png",
    link: "https://tommygold12.github.io/CountryGenerator/",
  },
];

const itemBox = document.querySelector(".itemBox");

//JSON.stringify prosljeđuje cijeli object u novu funkciju u oblizu array-a
//* CREATE PROJECT LETTER
const allProjects = projects.forEach((e) => {
  console.log(e);
  itemBox.innerHTML += `<div class="item">
                            <div class="card">

                              <div class="imgContainer">
                                <div class="projectBio">
                                  ${
                                    e.p_1
                                      ? `<p><span>➡️</span>${e.p_1}</p>`
                                      : ""
                                  }
                                  ${
                                    e.p_2
                                      ? `<p><span>➡️</span>${e.p_2}</p>`
                                      : ""
                                  }
                                  ${
                                    e.p_3
                                      ? `<p><span>➡️</span>${e.p_3}</p>`
                                      : ""
                                  }
                                  ${
                                    e.p_4
                                      ? `<p><span>➡️</span>${e.p_4}</p>`
                                      : ""
                                  }
                                </div>
                                <img alt="#" src=${e.wallpaper}>      
                              </div>

                              <div class="textContainer">
                                <h3>${e.name}</h3>
                                <p>${e.skills}</p>
                                <p>${e.date}</p>

                                <div class="buttons">
                                  <a onclick= 'openBio(this, ${JSON.stringify(
                                    e
                                  )})' >More +</a>
                                  <a class="newPage" href=${
                                    e.link
                                  } target ="_blank">Website -></a>
                                </div>
                              </div>                        
                            </div>
                            
                        </div>`;
});

let click = false;

const openBio = function (element, data) {
  const parentElement = element.closest(".card");
  const child = parentElement.querySelector(".imgContainer");
  const anime = child.querySelector("img");
  if (!click) {
    anime.classList.remove("imgDeanimation");
    anime.classList.add("imgAnimation");
    //child.innerHTML = `<p>test____1</p>`;
    element.innerHTML = "Return";
    click = true;
  } else {
    anime.classList.remove("imgAnimation");
    anime.classList.add("imgDeanimation");
    element.innerHTML = "More +";
    click = false;
  }
};

/*



//* OPEN - CLOSE ITEM OVERLAY BIO
const openBio = function (e) {
  const item = document.querySelector(".item");
  const itemTitle = e.parentElement.parentElement.querySelector("h3").innerHTML;

  itemBox.innerHTML += `<div class="overlayWindow">
                            <div class="overlayBio"> 
                                <div class="overlayClose">
                                    <button onClick = "closeBio(this)">X</button>
                                </div>
                                <div class="info"></div>
                            </div>
                       </div>`;
  projects.forEach((e) => {
    e.name === itemTitle &&
      (document.querySelector(".info").innerHTML = `<h2>${e.name}</h2>
                                                        <ul>
                                                            <li><img alt="#" src = ${e.img}>${e.p_1}</li>           
                                                            <li><img alt="#" src = ${e.img}>${e.p_2}</li>           
                                                            <li><img alt="#" src = ${e.img}>${e.p_3}</li>           
                                                            <li><img alt="#" src = ${e.img}>${e.p_4}</li>           
                                                        </ul>
                                                        <div>
                                                            <img alt="#" src=${e.wallpaper}>
                                                            <a href=${e.link} target ="_blank">Go to website</a>
                                                        </div>`);
  });
};
const createBio = function (e) {};

const closeBio = function (e) {
  document.querySelector(".overlayWindow").remove();
};
*/

/*
//* RESIZE DISPLAY NONE/ BLOCK
const width = function (e) {
  if (window.innerWidth <= 425) {
    category.classList.add("displayNone");
    category.classList.remove("displayBlock");
  } else {
    category.classList.remove("displayNone");
  }
};
window.addEventListener("load", width);
window.addEventListener("resize", width);
*/

const overlay = document.querySelector(".overlay");
//*OPEN MESSAGE OVERLAY
document.querySelectorAll(".sendMessage").forEach(function (e) {
  e.addEventListener("click", function (each) {
    overlay.classList.remove("displayNone");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

//* HEADER animation text
const animation = () => {
  console.log("bravo");
  const textTag = document.querySelector(".left_header h2");
  const text = textTag.textContent;

  let splittedText = text.split("");
  console.log(splittedText);
  textTag.innerHTML = "";
  for (k = 0; k < text.length; k++) {
    textTag.innerHTML += `<span>${splittedText[k]}</span>`;
  }

  j = 0;

  let interval = setInterval(() => {
    let spans = textTag.querySelectorAll("span");
    spans[j].classList.add("fadeMove");
    console.log(spans[j].classList);

    j++;

    if (j === text.length) {
      clearInterval(interval);
      let k = text.length - 1;
      let interval2 = setInterval(() => {
        console.log(spans[k].classList.add("fadeRemove"));
        k--;
        if (k < 0) {
          clearInterval(interval2);
          animation();
        }
      }, 400);
    }
  }, 150);
};
animation();
//* CLOSE MESSAGE OVERLAY
//outside click
document.querySelector(".overlay").addEventListener("click", function (e) {
  console.log(e);

  if (e.target === overlay) {
    overlay.classList.add("displayNone");
  }
});

document.onkeydown = function (e) {
  if (e.key === "Escape") {
    overlay.classList.add("displayNone");
  }
};

//button
document.querySelector(".close img").addEventListener("click", (e) => {
  overlay.classList.add("displayNone");
});

//**VAŽNO!! */
function openProject(e) {
  for (const key of projects) {
    if (e.getAttribute("data-category") === key.id) {
      window.open(key.link);
    }
  }
}

//* * * * SCROLL INTO VIEW * * * *
document.querySelectorAll(".nav_links a").forEach(function (e) {
  e.addEventListener("click", function (each) {
    each.preventDefault();
    const id = each.target.getAttribute("href");
    console.log(document.querySelector(id));
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  });
});

document
  .querySelector(".browseProjects")
  .addEventListener("click", function (e) {
    e.preventDefault();
    let section = document.querySelector("#page2");
    section.scrollIntoView({
      behavior: "smooth",
    });
  });

//*INTERSECTED NAVLINE
const header = document.querySelector(".header");
const navline = document.querySelector(".nav_bar");

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    navline.classList.add("positionFixed");
  } else {
    navline.classList.remove("positionFixed");
  }
};

const obsOption = {
  root: null,
  treshold: 0,
};

const observer = new IntersectionObserver(stickyNav, obsOption);
observer.observe(header);

//*INTERSECTED BLUR LOADING
const blurDiv = document.querySelectorAll(".pages");
const columnHeight = document
  .querySelector(".blur")
  .getBoundingClientRect().height;
const reveal = function (entries) {
  entries.forEach(function (entry) {
    console.log(entry);
    if (entry.isIntersecting) {
      console.log(entry);
      entry.target.classList.add("reveal");
    }
  });
};

const obsOption2 = {
  root: null,
  treshold: 0.8,
};

const observer2 = new IntersectionObserver(reveal, obsOption2);
blurDiv.forEach((el) => observer2.observe(el));

//* VALIDATION USER DATA
let config = {
  name: {
    required: true,
    minLength: 3,
    maxLength: 20,
  },
  surename: {
    required: true,
    minLength: 3,
    maxLength: 20,
  },
  email: {
    required: true,
    email: true,
    minLength: 5,
    maxLength: 30,
  },
  message: {
    required: true,
    minLength: 5,
  },
};

/*
let validator = new Validator(config);

//*MESSAGE NOTIFICATION
const checkEmptyObject = function (e) {
  e.preventDefault();
  validator.checkInput();

  //validateForm();
};
document
  .querySelector(".messageForm")
  .addEventListener("submit", checkEmptyObject);

const validateForm = (e) => {
  if (validator.validationPassed()) {
    alert("Message was send!");
    overlay.classList.add("displayNone");
    document.querySelectorAll(".messageForm input ").forEach(function (e) {
      e.value = "";
    });
    document.querySelector(".messageForm textarea").value = "";
  } else {
    alert("Please, fields are empty or incorect.");
  }
};
*/
