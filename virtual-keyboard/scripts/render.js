function render() {
  //render textarea section
  let body = document.querySelector("body");

  let wrapper = document.createElement("div");
  wrapper.className = "wrapper";

  let textarea = document.createElement("section");
  textarea.className = "textarea container";

  let infoFirst = document.createElement("div");
  infoFirst.className = "info-first";

  let infoFirstP = document.createElement("p");
  infoFirstP.innerHTML = "Начните печатать или выберите область ввода";

  let infoFirstLink = document.createElement("a");
  infoFirstLink.href = "https://github.com/JaKsHaZbi/virtual-keyboard/pull/1";
  infoFirstLink.innerHTML = "Pull Request Link";

  let textArea = document.createElement("textarea");
  textArea.id = "input";
  textArea.rows = 4;
  textArea.cols = 50;
  textArea.innerHTML = "Если есть возможность проверьте работу ближе к концу ревью, спасибо!";

  let infoLast = document.createElement("div");
  infoLast.className = "info-last";

  let infoLastPFist = document.createElement("p");
  infoLastPFist.innerHTML =
    "Клавиатура создана в операционной системе: Windows";

  let infoLastPSecond = document.createElement("p");
  infoLastPSecond.innerHTML = "Переключение языка: левыe клавиши ctrl + alt";

  infoFirst.append(infoFirstP, infoFirstLink);
  infoLast.append(infoLastPFist, infoLastPSecond);
  textarea.append(infoFirst);
  textarea.append(textArea);
  textarea.append(infoLast);
  wrapper.append(textarea);
  // wrapper.append(infoFirst);
  body.append(wrapper);

  //render keyboard section
  let keyboard = document.createElement("section");
  keyboard.className = "keyboard container";

  for (let i = 1; i <= 5; i++) {
    let row = document.createElement("div");
    row.className = `row-${i}`;

    if (i == 1) {
      for (let j = 1; j <= 14; j++) {
        let btn = document.createElement("div");
        btn.className = "btn";
        if (j == 1) {
          btn.className = "btn dark";
        }
        if (j == 14) {
          btn.className = "btn large dark";
        }

        row.append(btn);
      }
    }

    if (i == 2) {
      for (let j = 1; j <= 15; j++) {
        let btn = document.createElement("div");
        btn.className = "btn";
        if (j == 1) {
          btn.className = "btn middle dark";
        }
        if (j == 15) {
          btn.className = "btn dark";
        }

        row.append(btn);
      }
    }

    if (i == 3) {
      for (let j = 1; j <= 13; j++) {
        let btn = document.createElement("div");
        btn.className = "btn";
        if (j == 1 || j == 13) {
          btn.className = "btn large dark";
        }

        row.append(btn);
      }
    }

    if (i == 4) {
      for (let j = 1; j <= 14; j++) {
        let btn = document.createElement("div");
        btn.className = "btn";
        if (j == 1) {
          btn.className = "btn large dark";
        }
        if (j == 13 || j == 14) {
          btn.className = "btn dark";
        }

        row.append(btn);
      }
    }

    if (i == 5) {
      for (let j = 1; j <= 9; j++) {
        let btn = document.createElement("div");
        btn.className = "btn dark";
        if (j == 1 || j == 6) {
          btn.className = "btn middle dark";
        }
        if (j == 4) {
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
