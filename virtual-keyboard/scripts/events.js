import { changeStat } from "./render.js";

let lang = "ru";
let status = "caseDown";
changeStat("ru", "caseDown");

const buttonArray = document.querySelectorAll(".btn");
const CapsLockActive = document.querySelector(".caps");
const textField = document.querySelector("#input");

buttonArray.forEach((button) => {
    button.addEventListener("click", () => {
        capsToogle(button);

        textField.value += button.textContent;
    })

    button.addEventListener('mousedown', () => {
        if ((button.dataset.code === "ShiftLeft") || (button.dataset.code ==="ShiftRight")) {
            changeStat(lang, "shiftCaps");
        }
    })

    button.addEventListener('mouseup', () => {
        if ((button.dataset.code === "ShiftLeft") || (button.dataset.code ==="ShiftRight")) {
            changeStat(lang, status);
        }
    })
});

window.addEventListener("keydown", (event) => {
  buttonArray.forEach((button) => {
    if (button.dataset.code === event.code) {
      button.classList.add("active");
    }
    if (event.code === "CapsLock") {
      capsToogle(button);
    }
    if (button.dataset.code === "ShiftLeft") {
      changeStat(lang, "shiftCaps");
    }
  });
});

window.addEventListener("keyup", (event) =>
  buttonArray.forEach((button) => {
    button.classList.remove("active");
    changeStat(lang, status);
    // pressed.clear();
})  
);

function runOnKeys(func, ...codes) {
    let pressed = new Set();

    document.addEventListener('keydown', function(event) {
      pressed.add(event.code);

      for (let code of codes) { // все ли клавиши из набора нажаты?
        if (!pressed.has(code)) {
          return;
        }
      }

      // да, все

      // во время показа alert, если посетитель отпустит клавиши - не возникнет keyup
      // при этом JavaScript "пропустит" факт отпускания клавиш, а pressed[keyCode] останется true
      // чтобы избежать "залипания" клавиши -- обнуляем статус всех клавиш, пусть нажимает всё заново
      pressed.clear();

      func();
    });

    document.addEventListener('keyup', function(event) {
      pressed.delete(event.code);
    });

  }

  runOnKeys(
    () => {
        lang === "ru" ? lang = "en" : lang = "ru";
        changeStat(lang, status);
    },
    "ControlLeft",
    "AltLeft"
  );


function capsToogle(button) {
  if (button.dataset.code === "CapsLock") {
    if (CapsLockActive.classList.contains("active")) {
      CapsLockActive.classList.remove("active");
      status = "caseDown";
      changeStat(lang, status);
    } else {
      CapsLockActive.classList.add("active");
      status = "caseUp";
      changeStat(lang, status);
    }
  }
}
