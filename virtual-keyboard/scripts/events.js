import { changeStat } from "./render.js";

let lang = "ru";
let status = "caseDown";
changeStat("ru", "caseDown");

const buttonArray = document.querySelectorAll(".btn");
const CapsLockActive = document.querySelector(".caps");
const textField = document.querySelector("#input");

textField.addEventListener("keydown", () => console.log("test"));

buttonArray.forEach((button) =>
  button.addEventListener("click", () => {
    capsToogle(button);
    shiftToogle(button);

    textField.value += button.textContent;
  })
);

window.addEventListener("keydown", (event) => {
  buttonArray.forEach((button) => {
    if (button.dataset.code === event.code) {
      button.classList.add("active");
    }
    if (event.code === "CapsLock") {
      capsToogle(button);
    }
  });
});

window.addEventListener("keyup", () =>
  buttonArray.forEach((button) => button.classList.remove("active"))
);

function capsToogle(button) {
  if (button.dataset.code === "CapsLock") {
    if (CapsLockActive.classList.contains("active")) {
      CapsLockActive.classList.remove("active");
      changeStat(lang, "caseDown");
    } else {
      CapsLockActive.classList.add("active");
      changeStat(lang, "caseUp");
    }
  }
}

function shiftToogle(button) {
  // if (button.dataset.code === "ShiftLeft") {
  //     changeStat(lang, "shiftCaps");
  // }
}
