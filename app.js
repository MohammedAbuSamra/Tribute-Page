let dateEl = document.getElementById("date-el");

const date = new Date(Date.now());
const currentDate = date.toLocaleString();
console.log(date.toLocaleString());

dateEl.textContent = currentDate;
