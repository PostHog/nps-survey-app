// site.ts

const style =`

.button-container {
  position: fixed;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 2px solid black;
  padding: 15px;
  background-color: white;
  align-items: flex-start;
  display: flex;
  justify-content: center;
  border-top: none;
  max-width: 519px;
}
.prompt-container {
  position: fixed;
  background: white;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 999999;
  align-items: flex-start;
  border: 2px solid black;
  padding: 3px;
  background-color: white;
  border-bottom: none;
  min-width: 519px;
}
.button {
  bottom: 200px;
  color: black;
  font-weight: normal;
  font-family: -apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", "Roboto", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  text-align: left;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  text-align: center;
  line-height: 40px;
  font-size: 14px;
  border: none;
  cursor: pointer;
  z-index: 999999;
  margin-left: 5px
}

.button:hover {
  filter: brightness(0.8);
  bottom: 25px;
}

.button-0 {
  right: 620px;
  background-color: #db7149;
  font-weight: bold;
}

.button-1 {
  right: 560px;
  font-weight: bold;
  background-color: #db7149
}

.button-2 {
  right: 500px;
  font-weight: bold;
  background-color: #db7149
}

.button-3 {
  right: 440px;
  font-weight: bold;
  background-color: #db7149
}

.button-4 {
  right: 380px;
  font-weight: bold;
  background-color: #eda83f
}

.button-5 {
  right: 320px;
  font-weight: bold;
  background-color: #eda83f
}

.button-6 {
  right: 260px;
  font-weight: bold;
  background-color: #eda83f
}

.button-7 {
  right: 200px;
  font-weight: bold;
  background-color: #abc48a
}

.button-8 {
  right: 140px;
  font-weight: bold;
  background-color: #abc48a
}

.button-9 {
  right: 80px;
  font-weight: bold;
  background-color: #abc48a
}

.button-10 {
  right: 20px;
  font-weight: bold;
  background-color: #abc48a
}

.prompt {
  color: black;
  background: transparent;
  font-weight: normal;
  font-family: -apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", "Roboto", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  text-align: center;
  text-align: center;
  line-height: 20px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  z-index: 999999;
  font-weight: 600;
  }
`

export function inject({ config, posthog }) 

{
  const shadow = createShadow(style);

  const promptContainer = document.createElement('div');
  promptContainer.className = 'prompt-container';
  shadow.appendChild(promptContainer);

  const textarea = Object.assign(document.createElement('button'), {
    className: `prompt`,
  });
  textarea.id = 'prompt';
  textarea.innerText = 'On a scale of 0-10, how likely are you to recommend this product?';
  promptContainer.appendChild(textarea);

  const buttonsContainer = document.createElement('div');
  buttonsContainer.className = 'button-container';
  promptContainer.appendChild(buttonsContainer);
  
  function updatePrompt() {
      console.log(`Updating prompt`);
      textarea.innerText = 'Thank you for your feedback!';
      setTimeout(function(){
        textarea.style.display = "none";
      }, 3000); // 3000 milliseconds = 3 seconds
  }
  
  function sendNPS(value: number) {
    console.log(`Sending NPS with value: ${value}`);
    updatePrompt();
    posthog.capture('NPS rating submitted', { value: value });
    const buttons = buttonsContainer.querySelectorAll('button');
    buttons.forEach(button => {
      setTimeout(function(){
      button.style.display = "none";
    }, 10); // 10 milliseconds = 0.001 seconds
  });
  buttonsContainer.style.display = 'none';
  }
  
  buttonElement = Object.assign(document.createElement('button'), {
    className: 'button button-0',
    innerText: '0',
    onclick: () => sendNPS(0),
  });
  buttonsContainer.appendChild(buttonElement);
  
  buttonElement = Object.assign(document.createElement('button'), {
    className: 'button button-1',
    innerText: '1',
    onclick: () => sendNPS(1),
  });
  buttonsContainer.appendChild(buttonElement);
  
  buttonElement = Object.assign(document.createElement('button'), {
    className: 'button button-2',
    innerText: '2',
    onclick: () => sendNPS(2),
  })
  buttonsContainer.appendChild(buttonElement)

  buttonElement = Object.assign(document.createElement('button'), {
    className: 'button button-3',
    innerText: '3',
    onclick: () => sendNPS(3),
  })
  buttonsContainer.appendChild(buttonElement)

  buttonElement = Object.assign(document.createElement('button'), {
    className: 'button button-4',
    innerText: '4',
    onclick: () => sendNPS(4),
  })
  buttonsContainer.appendChild(buttonElement)

  buttonElement = Object.assign(document.createElement('button'), {
    className: 'button button-5',
    innerText: '5',
    onclick: () => sendNPS(5),
  })
  buttonsContainer.appendChild(buttonElement)

  buttonElement = Object.assign(document.createElement('button'), {
    className: 'button button-6',
    innerText: '6',
    onclick: () => sendNPS(6),
  })
  buttonsContainer.appendChild(buttonElement)

  buttonElement = Object.assign(document.createElement('button'), {
    className: 'button button-7',
    innerText: '7',
    onclick: () => sendNPS(7),
  })
  buttonsContainer.appendChild(buttonElement)

  buttonElement = Object.assign(document.createElement('button'), {
    className: 'button button-8',
    innerText: '8',
    onclick: () => sendNPS(8),
  })
  buttonsContainer.appendChild(buttonElement)

  buttonElement = Object.assign(document.createElement('button'), {
    className: 'button button-9',
    innerText: '9',
    onclick: () => sendNPS(9),
  })
  buttonsContainer.appendChild(buttonElement)

  buttonElement = Object.assign(document.createElement('button'), {
    className: 'button button-10',
    innerText: '10',
    onclick: () => sendNPS(10),
  })
  buttonsContainer.appendChild(buttonElement)
}

function createShadow(style?: string): ShadowRoot {
  const div = document.createElement('div')
  const shadow = div.attachShadow({ mode: 'open' })
  if (style) {
    const styleElement = Object.assign(document.createElement('style'), {
      innerText: style,
    })
    shadow.appendChild(styleElement)
  }
  document.body.appendChild(div)
  return shadow
}