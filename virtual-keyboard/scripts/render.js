function render() {
  const body = document.querySelector('body');

  const wrapper = document.createElement('div');
  wrapper.className = 'wrapper';

  const textarea = document.createElement('section');
  textarea.className = 'textarea container';

  const infoFirst = document.createElement('div');
  infoFirst.className = 'info-first';

  const infoFirstP = document.createElement('p');
  infoFirstP.innerHTML = 'Начните печатать или выберите область ввода';

  const infoFirstLink = document.createElement('a');
  infoFirstLink.href = 'https://github.com/JaKsHaZbi/virtual-keyboard/pull/1';
  infoFirstLink.innerHTML = 'Pull Request Link';

  const textArea = document.createElement('textarea');
  textArea.id = 'input';
  textArea.rows = 4;
  textArea.cols = 50;

  textArea.innerHTML = 'Если есть возможность pls проверьте работу ближе к концу ревью, спасибо';

  const infoLast = document.createElement('div');
  infoLast.className = 'info-last';

  const infoLastPFist = document.createElement('p');
  infoLastPFist.innerHTML = 'Клавиатура создана в операционной системе: Windows';

  const infoLastPSecond = document.createElement('p');
  infoLastPSecond.innerHTML = 'Переключение языка: левыe клавиши ctrl + alt';

  infoFirst.append(infoFirstP, infoFirstLink);
  infoLast.append(infoLastPFist, infoLastPSecond);
  textarea.append(infoFirst);
  textarea.append(textArea);
  textarea.append(infoLast);
  wrapper.append(textarea);
  // wrapper.append(infoFirst);
  body.append(wrapper);

  // render keyboard section
  const keyboard = document.createElement('section');
  keyboard.className = 'keyboard container';

  for (let i = 1; i <= 5; i + 1) {
    const row = document.createElement('div');
    row.className = `row-${i}`;

    if (i === 1) {
      for (let j = 1; j <= 14; j + 1) {
        const btn = document.createElement('div');
        btn.className = 'btn';
        if (j === 1) {
          btn.className = 'btn dark';
        }
        if (j === 14) {
          btn.className = 'btn large dark';
        }

        row.append(btn);
      }
    }

    if (i === 2) {
      for (let j = 1; j <= 15; j + 1) {
        const btn = document.createElement('div');
        btn.className = 'btn';
        if (j === 1) {
          btn.className = 'btn middle dark';
        }
        if (j === 15) {
          btn.className = 'btn dark';
        }

        row.append(btn);
      }
    }

    if (i === 3) {
      for (let j = 1; j <= 13; j + 1) {
        const btn = document.createElement('div');
        btn.className = 'btn';
        if (j === 1 || j === 13) {
          btn.className = 'btn large dark';
        }

        row.append(btn);
      }
    }

    if (i === 4) {
      for (let j = 1; j <= 14; j + 1) {
        const btn = document.createElement('div');
        btn.className = 'btn';
        if (j === 1) {
          btn.className = 'btn large dark';
        }
        if (j === 13 || j === 14) {
          btn.className = 'btn dark';
        }

        row.append(btn);
      }
    }

    if (i === 5) {
      for (let j = 1; j <= 9; j + 1) {
        const btn = document.createElement('div');
        btn.className = 'btn dark';
        if (j === 1 || j === 6) {
          btn.className = 'btn middle dark';
        }
        if (j === 4) {
          btn.className = 'btn space';
        }

        row.append(btn);
      }
    }

    keyboard.append(row);
  }
  wrapper.append(keyboard);
}

render();
