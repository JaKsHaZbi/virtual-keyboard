import { keys } from "./keys.js";

function render() {
  const body = document.querySelector("body");

  const wrapper = document.createElement("div");
  wrapper.className = "wrapper";

  const textarea = document.createElement("section");
  textarea.className = "textarea container";

  const infoFirst = document.createElement("div");
  infoFirst.className = "info-first";

  const infoFirstP = document.createElement("p");
  infoFirstP.innerHTML = "Начните печатать или выберите область ввода";

  const infoFirstLink = document.createElement("a");
  infoFirstLink.href = "https://github.com/JaKsHaZbi/virtual-keyboard/pull/1";
  infoFirstLink.innerHTML = "Pull Request Link";

  const textArea = document.createElement("textarea");
  textArea.id = "input";
  textArea.rows = 4;
  textArea.cols = 50;
  textArea.innerHTML =
    "Если есть возможность проверьте пожалуйста работу ближе к концу ревью, спасибо \n" +
    "Ивенты пока не отрабатываются";

  const infoLast = document.createElement("div");
  infoLast.className = "info-last";

  const infoLastPFist = document.createElement("p");
  infoLastPFist.innerHTML =
    "Клавиатура создана в операционной системе: Windows";

  const infoLastPSecond = document.createElement("p");
  infoLastPSecond.innerHTML = "Переключение языка: левыe клавиши ctrl + alt";

  infoFirst.append(infoFirstP, infoFirstLink);
  infoLast.append(infoLastPFist, infoLastPSecond);
  textarea.append(infoFirst);
  textarea.append(textArea);
  textarea.append(infoLast);
  wrapper.append(textarea);
  // wrapper.append(infoFirst);
  body.append(wrapper);

  // render keyboard section
  const keyboard = document.createElement("section");
  keyboard.className = "keyboard container";

  // Object.keys(keys).forEach(key => {
  //   if (keys[key].id === 1) {
  //     console.log(keys[key]["en"]["caseDown"]);
  //   }
  // });

  for (let i = 1; i <= 5; i += 1) {
    const row = document.createElement("div");
    row.className = `row-${i}`;

    if (i === 1) {
      for (let j = 1; j <= 14; j += 1) {
        const btn = document.createElement("div");
        btn.className = "btn";
        // Object.keys(keys).forEach(key => {
        //   if (keys[key].id === j) {
        //     btn.innerHTML = keys[key]["en"]["caseDown"];
        //   }
        // });
        fill(btn, j);
        
        if (j === 1) {
          btn.className = "btn dark";
        }
        if (j === 14) {
          btn.className = "btn large dark";
        }

        row.append(btn);
      }
    }

    if (i === 2) {
      for (let j = 15; j <= 29; j += 1) {
        const btn = document.createElement("div");
        btn.className = "btn";
        fill(btn, j);

        if (j === 15) {
          btn.className = "btn middle dark";
        }
        if (j === 29) {
          btn.className = "btn dark";
        }

        row.append(btn);
      }
    }

    if (i === 3) {
      for (let j = 30; j <= 42; j += 1) {
        const btn = document.createElement("div");
        btn.className = "btn";
        fill(btn, j);

        if (j === 30 || j === 42) {
          btn.className = "btn large dark";
        }

        row.append(btn);
      }
    }

    if (i === 4) {
      for (let j = 43; j <= 56; j += 1) {
        const btn = document.createElement("div");
        btn.className = "btn";
        fill(btn, j);
        if (j === 43) {
          btn.className = "btn large dark";
        }
        if (j === 55 || j === 56) {
          btn.className = "btn dark";
        }

        row.append(btn);
      }
    }

    if (i === 5) {
      for (let j = 57; j <= 65; j += 1) {
        const btn = document.createElement("div");
        btn.className = "btn dark";
        fill(btn, j);

        if (j === 57 || j === 63) {
          btn.className = "btn middle dark";
        }
        if (j === 60) {
          btn.className = "btn space";
        }

        row.append(btn);
      }
    }

    keyboard.append(row);
  }
  wrapper.append(keyboard);
}

render();


function fill(btn, j) {
  Object.keys(keys).forEach(key => {
    if (keys[key].id === j) {
      btn.innerHTML = keys[key]["en"]["caseDown"];
    }
  });
}