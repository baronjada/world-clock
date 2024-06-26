function updateTime() {
  // Paris
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisDateAndTime = moment().tz("Europe/paris");

    parisDateElement.innerHTML = parisDateAndTime.format("MMMM Do YYYY");
    parisTimeElement.innerHTML = parisDateAndTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesDateAndTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML =
      losAngelesDateAndTime.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesDateAndTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Sydney
  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    let sydneyDateAndTime = moment().tz("Australia/Sydney");

    sydneyDateElement.innerHTML = sydneyDateAndTime.format("MMMM Do YYYY");
    sydneyTimeElement.innerHTML = sydneyDateAndTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");
    let tokyoDateAndTime = moment().tz("Asia/Tokyo");

    tokyoDateElement.innerHTML = tokyoDateAndTime.format("MMMM Do YYYY");
    tokyoTimeElement.innerHTML = tokyoDateAndTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimezone = event.target.value;
  if (cityTimezone === "select") {
    location.reload();
  }
  if (cityTimezone === "current") {
    cityTimezone = moment.tz.guess();
  }
  let cityName = cityTimezone.replace("_", " ").split("/")[1];
  let cityDateAndTime = moment().tz(cityTimezone);
  let citiesElement = document.querySelector(".cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityDateAndTime.format("MMMM Do YYYY")}</div>
    </div>
    <div class="time">${cityDateAndTime.format(
      "h:mm:ss"
    )}<small>${cityDateAndTime.format(" A")}</small></div>
  </div>
  <a href="index.html">Back to homepage</a>
    `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
