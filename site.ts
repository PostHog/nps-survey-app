// site.ts

const style =`

.prompt-container {
  position: fixed;
  background: white;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
  justify-content: center;
  z-index: 999999;
  align-items: center;
  border: 1px solid grey;
  background-color: white;
  border-bottom: none;
  min-width: 530px;
}
.prompt {
  color: black;
  background: transparent;
  font-weight: normal;
  font-family: -apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", "Roboto", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  text-align: center;
  font-size: 15px;
  border: none;
  cursor: pointer;
  z-index: 999999;
  padding-top: 12px;
  font-weight: 600;
  min-width: 500px;
}
.subtitle {
  color: #9c9ea6;
  background: transparent;
  font-weight: normal;
  font-family: -apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", "Roboto", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  text-align: center;
  font-size: 12px;
  border: none;
  cursor: pointer;
  z-index: 999999;
  font-weight: 600;
  min-width: 500px;
  text-decoration: none;
}
.button-container {
  position: fixed;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 1px solid grey;
  padding: 15px;
  background-color: white;
  align-items: flex-start;
  display: flex;
  justify-content: center;
  border-top: none;
  min-width: 500px;
}
.button {
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
  margin-left: 5px;
  font-weight: bold;
}
.close-button {
  color: #9c9ea6;
  font-weight: normal;
  font-family: -apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", "Roboto", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  text-align: center;
  font-size: 11px;
  background: none;
  border: none;
  cursor: pointer;
  vertical-align: text-top;
  z-index: 999999;
}
.button-0:hover, .button-1:hover, .button-2:hover, .button-3:hover {
  background-color: #db7149;
}
.button-4:hover, .button-5:hover, .button-6:hover {
  background-color: #eda83f;
}
.button-7:hover, .button-8:hover, .button-9:hover, .button-10:hover {
  background-color: #abc48a
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
  
  const closeButton = Object.assign(document.createElement('button'), {
    className: 'close-button',
    innerText: 'x',
    onclick: () => {
      promptContainer.style.display = 'none';
    },
  });
  promptContainer.appendChild(closeButton);

  const buttonsContainer = document.createElement('div');
  buttonsContainer.className = 'button-container';
  promptContainer.appendChild(buttonsContainer);
  
  function updatePrompt() {
    textarea.innerText = 'Thanks for your feedback!';
    textarea.style.marginLeft = "20px";

    let lineBreak = document.createElement('br');
    promptContainer.appendChild(lineBreak);
  
    var linkContainer = document.createElement('div');
    linkContainer.style.textAlign = 'center';
    promptContainer.appendChild(linkContainer);
  
    let link = document.createElement('a');
    link.setAttribute('href', 'https://posthog.com');
    link.innerText = 'Powered by PostHog';
    link.className = 'subtitle';
    linkContainer.appendChild(link);
  
    promptContainer.style.borderBottom = '2px solid black';
    promptContainer.style.paddingBottom = '10px';
    closeButton.style.opacity = "0";
    
    setTimeout(function() {
      textarea.style.opacity = "0";
      textarea.style.display = "none";
      promptContainer.style.display = "none";
    }, 5000); // 5 seconds because Tim wanted the PostHog name visible bigger, but I think it's big enough idk
  }
  
  function sendNPS(value: number) {
    updatePrompt();
    posthog.capture('NPS rating submitted', { value: value });
    const buttons = buttonsContainer.querySelectorAll('button');
    buttons.forEach(button => {
      button.style.display = "none";
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