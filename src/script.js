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

updateTime();
setInterval(updateTime, 1000);
