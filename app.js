let dateEl = document.getElementById("date-el");

const date = new Date();
const day = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();

const currentDate = `${day}/${month}/${year}`;

dateEl.textContent = currentDate;
