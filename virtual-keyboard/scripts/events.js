import { changeStat } from './render.js'

changeStat("ru", "caseDown");

const buttonArray = document.querySelectorAll(".btn");

buttonArray.forEach(button => button.addEventListener("click", () => console.log(button.textContent)))