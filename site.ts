// site.ts

const style =`

.bordered {
  top: 0;
  border: 2px solid black;
  padding: 15px;
  border-radius: 25px;
  background-color: white
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.prompt-container {
  position: sticky;
  top: 110;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 999999;
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
  font-weight: bold;
  bottom: 25px;
}

.button-0 {
  right: 620px;
  background-color: #db7149
}

.button-1 {
  right: 560px;
  background-color: #db7149
}

.button-2 {
  right: 500px;
  background-color: #db7149
}

.button-3 {
  right: 440px;
  background-color: #db7149
}

.button-4 {
  right: 380px;
  background-color: #eda83f
}

.button-5 {
  right: 320px;
  background-color: #eda83f
}

.button-6 {
  right: 260px;
  background-color: #eda83f
}

.button-7 {
  right: 200px;
  background-color: #abc48a
}

.button-8 {
  right: 140px;
  background-color: #abc48a
}

.button-9 {
  right: 80px;
  background-color: #abc48a
}

.button-10 {
  right: 20px;
  background-color: #abc48a
}

.prompt {
  color: black;
  background: white;
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

  const container = document.createElement('div');
  container.className = 'container';
  shadow.appendChild(container);

  const textarea = Object.assign(document.createElement('button'), {
    className: `prompt`,
  });
  textarea.id = 'prompt';
  textarea.innerText = 'On a scale of 0-10, how likely are you to recommend this product?';
  promptContainer.appendChild(textarea);

  const buttonsContainer = document.createElement('div');
  buttonsContainer.className = 'bordered';
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