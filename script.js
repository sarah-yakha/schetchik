const items = document.querySelectorAll(".countdown-item > h4");

//начинаем дату счета
let countdownDate = new Date(2024, 8, 3, 23, 55, 0).getTime();

function getCountdownTime() {
//получить текущее время
const now = new Date().getTime();

//найти разницу
const distance = countdownDate - now;

//создаем в милисекундах

const oneDay = 24 * 60 * 60 * 1000;
const oneHour = 60 * 60 * 1000;
const oneMinute = 60 * 1000;

//подсчет днейб часов, минут и секунд

let days = Math.floor(distance / oneDay);
let hours = Math.floor((distance % oneDay) / oneHour);
let minutes = Math.floor((distance % oneHour) / oneMinute);
let seconds = Math.floor((distance % oneMinute) / 1000);

//создаем массив с переменными
const values = [days, hours, minutes, seconds];
console.log(values);
//добавляем значения переменных на страницу
items.forEach(function (item, index){
  item.textContent = values[index];
});

if (distance < 0){
  clearInterval(countdown);
  countdownElement.innerHtml = "<h4 class='expired>Время вышло</h4>"
}
}
//обновление счетчика
let countdown = setInterval(getCountdownTime, 1000) ;

getCountdownTime();