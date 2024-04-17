// LONDON
let londonElement = document.querySelector("#london");
let londonDateElement = document.querySelector(".date");
let londonTimeElement = document.querySelector(".time");
let londonDateAndTime = moment();

londonDateElement.innerHTML = londonDateAndTime.format("MMMM Do YYYY");
londonTimeElement.innerHTML = `${londonDateAndTime.format(
  "h:mm:ss"
)} <small>${londonDateAndTime.format("A")}</small>`;
