function updateTime() {
  // London
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonDateAndTime = moment().tz("Europe/London");

  londonDateElement.innerHTML = londonDateAndTime.format("MMMM Do YYYY");
  londonTimeElement.innerHTML = londonDateAndTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  // Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesDateAndTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML =
    losAngelesDateAndTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesDateAndTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

function updateCity(event) {
  let cityTimezone = event.target.value;
  let cityDateAndTime = moment().tz(cityTimezone);
  let citiesElement = document.querySelector(".cities");
  citiesElement.innerHTML = cityTimezone;
  citiesElement = `<div class="city">
          <div>
            <h2>${cityTimezone}</h2>
            <div class="date">${cityDateAndTime.format("MMMM Do YYYY")}</div>
          <div>
            <div class="time">${cityDateAndTime.format(
              "h:mm:ss"
            )}<small>${cityDateAndTime.format("A")}</small></div>
          </div>         

    `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
