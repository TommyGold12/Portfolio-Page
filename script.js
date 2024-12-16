const dropMenu_1 = document.querySelector(".dropMenu_1");
const dropMenu_2 = document.querySelector(".dropMenu_2");
const select_1 = document.querySelector(".select_1");
const select_2 = document.querySelector(".select_2");
const country_1 = document.querySelector(".country_1");
const country_2 = document.querySelector(".country_2");
const heroCountry = document.querySelector(".heroCountry .container");
/*
let count = 10;
const startCounter = function () {
  const interval = setInterval(() => {
    count -= 0.2;
    document.querySelector("body").style.filter = `blur(${count}px)`;
    if (count <= 0) {
      clearInterval(interval);
    }
  }, 15);
};
startCounter();
*/
//* Asinkrono dohvaćanje podataka
const getCountryData = async function (name, el) {
  console.log(el);
  try {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    if (!response.ok) {
      throw new Error(`${response.status},${response.statusText}`);
    }
    const data = await response.json();
    createDropMenu(data, el);
  } catch (error) {
    console.error("Došlo je do greške:", error.message);
  }
};

//* Vrijednost iz prvog inputa- input event listener
const searchCountry = function (e) {
  if (e.value.length >= 2) {
    getCountryData(e.value, e);
    //Add class to drop menu
    e.nextElementSibling.classList.add("dropMenuStyle");
  } else {
    e.nextElementSibling.classList.remove("dropMenuStyle");
    e.nextElementSibling.innerHTML = "";
  }
};

//* create drop menu with country name
const createDropMenu = function (data, el) {
  const links = data
    .map((e) => `<a href="#" onclick="addCountry(this) ">${e.name.common}</a>`)
    .join("");
  el.nextElementSibling.innerHTML = links;
};

//* select input selected country
const addCountry = async function (name) {
  const compareName = name.textContent;
  console.log();
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${compareName}`
    );
    if (!response.ok) {
      throw new Error(`${response.status}, ${response.statusText}`);
    }
    const countryData = await response.json();
    countryCard(countryData[0]);
    // return to null value
    name.parentElement.previousElementSibling.value = ""; //country_1.value = ""; //country_2.value = "";

    // disable input after select country from drop menu
    name.parentElement.previousElementSibling.classList.add("disabled");

    //Remove class of dropMenu
    name.parentElement.classList.remove("dropMenuStyle");
    name.parentElement.innerHTML = "";
  } catch (error) {
    console.log("Došlo je do greške", error.message);
  }
};

const countryCard = function (countryData) {
  console.log(countryData.area.toLocaleString("en-US"));

  heroCountry.innerHTML += `<div class="card_1">
                              <img alt="#" src="${countryData.flags.png}">
                              <div class="cardBio">
                                <h2>${countryData.name.common}</h2>
                                <h4>${countryData.region}</h4>
                                <div class="flexBio">
                                <div>
                                <p><span>🏢</span>${countryData.capital[0]}</p>
                                <p><span>🧑🏻‍🤝‍🧑🏽</span>${(
                                  countryData.population / 1000000
                                ).toFixed(2)}M</p>
                                  <p><span>🌎</span>${countryData.area.toLocaleString(
                                    "en-US"
                                  )} km2</p>
                                    </div>
                                    <div>
                                    <p><span>🗣️</span>${
                                      Object.values(countryData.languages)[0]
                                    }</p>
                                      <p><span>💰</span>${
                                        Object.values(countryData.currencies)[0]
                                          .name
                                      }</p>
                                        <p><span>⌛</span>${
                                          countryData.timezones[0]
                                        }</p>
                                        </div>
                                        </div>
                              </div>
                            </div>`;
};

//* Remove disabled class
const compareCountry = function (button) {
  button.nextElementSibling.firstElementChild.classList.remove("disabled");
  button.previousElementSibling.firstElementChild.classList.remove("disabled");
  document.querySelector(".heroCountry .container").innerHTML = "";
};
