// site.ts

const style =`

.nps-title {
  font-family: -apple-system, BlinkMacSystemFont, Inter, Segoe UI, Roboto, Helvetica, Arial, sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', Segoe UI Symbol;
  color: #2d2d2d;
  font-size: 1.125rem;
  font-weight: 700;
  text-align: left;
  margin-top: 0;
}
.button {
  position: fixed;
  bottom: 20px;
  color: black;
  font-weight: normal;
  font-family: -apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", "Roboto", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  text-align: left;
  width: 48px;
  height: 48px;
  border-radius: 100%;
  text-align: center;
  line-height: 40px;
  font-size: 16px;
  border: 1px;
  cursor: pointer;
  z-index: 999999;
}

.button:hover {
  filter: brightness(0.8);
  font-weight: bold;
  bottom: 25px;
}

.button-0 {
  right: 560px;
}

.button-1 {
  right: 500px;
}

.button-2 {
  right: 500px;
}

.button-3 {
  right: 440px;
}

.button-4 {
  right: 380px;
}

.button-5 {
  right: 320px;
}

.button-6 {
  right: 260px;
}

.button-7 {
  right: 200px;
}

.button-8 {
  right: 140px;
}

.button-9 {
  right: 80px
}

.button-10 {
  right:20px
}
  .prompt {
    position: fixed;
    bottom: 100px;
    right: 60px;
    color: black;
    font-weight: normal;
    font-family: -apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", "Roboto", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    text-align: center;
    text-align: center;
    line-height: 20px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    z-index: 999999;
  }
`

export function inject({ config, posthog }) 

{
  const shadow = createShadow(style);
  const buttonsContainer = document.createElement(`div`);
  shadow.appendChild(buttonsContainer);
  
  let buttonElement: HTMLButtonElement;
  
  const textarea = Object.assign(document.createElement('button'), {
    className: `prompt`,
  });
  textarea.id = 'prompt';
  textarea.innerText = 'On a scale of 0-10, how likely are you to recommend this product?';
  shadow.appendChild(textarea);
  
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
    className: 'button button-10',
    innerText: '10',
    onclick: () => sendNPS(10),
  });
  buttonsContainer.appendChild(buttonElement);
  
  buttonElement = Object.assign(document.createElement('button'), {
    className: 'button button-9',
    innerText: '9',
    onclick: () => sendNPS(9),
  });
  buttonsContainer.appendChild(buttonElement);
  

  buttonElement = Object.assign(document.createElement('button'), {
    className: 'button button-8',
    innerText: '8',
    onclick: () => sendNPS(8),
  })
  buttonsContainer.appendChild(buttonElement)

  buttonElement = Object.assign(document.createElement('button'), {
    className: 'button button-7',
    innerText: '7',
    onclick: () => sendNPS(7),
  })
  buttonsContainer.appendChild(buttonElement)

  buttonElement = Object.assign(document.createElement('button'), {
    className: 'button button-6',
    innerText: '6',
    onclick: () => sendNPS(6),
  })
  buttonsContainer.appendChild(buttonElement)

  buttonElement = Object.assign(document.createElement('button'), {
    className: 'button button-5',
    innerText: '5',
    onclick: () => sendNPS(5),
  })
  buttonsContainer.appendChild(buttonElement)

  buttonElement = Object.assign(document.createElement('button'), {
    className: 'button button-4',
    innerText: '4',
    onclick: () => sendNPS(4),
  })
  buttonsContainer.appendChild(buttonElement)

  buttonElement = Object.assign(document.createElement('button'), {
    className: 'button button-3',
    innerText: '3',
    onclick: () => sendNPS(3),
  })
  buttonsContainer.appendChild(buttonElement)

  buttonElement = Object.assign(document.createElement('button'), {
    className: 'button button-2',
    innerText: '2',
    onclick: () => sendNPS(2),
  })
  buttonsContainer.appendChild(buttonElement)

  buttonElement = Object.assign(document.createElement('button'), {
    className: 'button button-1',
    innerText: '1',
    onclick: () => sendNPS(1),
  })
  buttonsContainer.appendChild(buttonElement)

  buttonElement = Object.assign(document.createElement('button'), {
    className: 'button button-0',
    innerText: '0',
    onclick: () => sendNPS(0),
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