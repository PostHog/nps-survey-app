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
  .button10 {
    position: fixed;
    bottom: 20px;
    right: 20px;
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
    border: none;
    cursor: pointer;
    z-index: 999999;
  }
  .button9 {
    position: fixed;
    bottom: 20px;
    right: 80px;
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
    border: none;
    cursor: pointer;
    z-index: 999999;
  }
  .button8 {
    position: fixed;
    bottom: 20px;
    right: 140px;
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
    border: none;
    cursor: pointer;
    z-index: 999999;
  }
  .button7 {
    position: fixed;
    bottom: 20px;
    right: 200px;
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
    border: none;
    cursor: pointer;
    z-index: 999999;
  }
  .button6 {
    position: fixed;
    bottom: 20px;
    right: 260px;
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
    border: none;
    cursor: pointer;
    z-index: 999999;
  }
  .button5 {
    position: fixed;
    bottom: 20px;
    right: 320px;
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
    border: none;
    cursor: pointer;
    z-index: 999999;
  }
  .button4 {
    position: fixed;
    bottom: 20px;
    right: 380px;
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
    border: none;
    cursor: pointer;
    z-index: 999999;
  }
  .button3 {
    position: fixed;
    bottom: 20px;
    right: 440px;
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
    border: none;
    cursor: pointer;
    z-index: 999999;
  }
  .button2 {
    position: fixed;
    bottom: 20px;
    right: 500px;
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
    border: none;
    cursor: pointer;
    z-index: 999999;
  }
  .button1 {
    position: fixed;
    bottom: 20px;
    right: 560px;
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
    border: none;
    cursor: pointer;
    z-index: 999999;
  }
  .button0 {
    position: fixed;
    bottom: 20px;
    right: 620px;
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
    border: none;
    cursor: pointer;
    z-index: 999999;
  }
  .prompt {
    position: fixed;
    bottom: 100px;
    right: 100px;
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
  const shadow = createShadow(style)
  const buttonsContainer = document.createElement(`div`)
  shadow.appendChild(buttonsContainer)
  let buttonElement: HTMLButtonElement

  const textarea = Object.assign(document.createElement('button'),{className: `prompt`,},)
  shadow.appendChild(textarea)

  textarea.innerText=config.prompt
  
  function sendNPS10(): NPS10 {
    console.log(config.NPS10)
    posthog.capture('NPS10', { content: config.NPS10 })
  }

  buttonElement = Object.assign(document.createElement('button'), {
    className: 'button10',
    innerText: '10',
    onclick: sendNPS10,
  })
  buttonsContainer.appendChild(buttonElement)

  function sendNPS9(): NPS9 {
    console.log('NPS 9')
    posthog.capture('NPS9', { content: config.NPS9 })
  }

  buttonElement = Object.assign(document.createElement('button'), {
    className: 'button9',
    innerText: '9',
    onclick: sendNPS9,
  })
  buttonsContainer.appendChild(buttonElement)

  function sendNPS8(): NPS8 {
    console.log('NPS 8')
    posthog.capture('NPS8', { content: config.NPS8 })
  }

  buttonElement = Object.assign(document.createElement('button'), {
    className: 'button8',
    innerText: '8',
    onclick: sendNPS8,
  })
  buttonsContainer.appendChild(buttonElement)

  function sendNPS7(): NPS7 {
    console.log('NPS 7')
    posthog.capture('NPS7', { content: config.NPS7 })
  }

  buttonElement = Object.assign(document.createElement('button'), {
    className: 'button7',
    innerText: '7',
    onclick: sendNPS7,
  })
  buttonsContainer.appendChild(buttonElement)

  function sendNPS6(): NPS6 {
    console.log('NPS 6')
    posthog.capture('NPS6', { content: config.NPS6 })
  }

  buttonElement = Object.assign(document.createElement('button'), {
    className: 'button6',
    innerText: '6',
    onclick: sendNPS6,
  })
  buttonsContainer.appendChild(buttonElement)

  function sendNPS5(): NPS5 {
    console.log('NPS 5')
    posthog.capture('NPS5', { content: config.NPS5 })
  }

  buttonElement = Object.assign(document.createElement('button'), {
    className: 'button5',
    innerText: '5',
    onclick: sendNPS5,
  })
  buttonsContainer.appendChild(buttonElement)

  function sendNPS4(): NPS4 {
    console.log('NPS 4')
    posthog.capture('NPS4', { content: config.NPS4 })
  }

  buttonElement = Object.assign(document.createElement('button'), {
    className: 'button4',
    innerText: '4',
    onclick: sendNPS4,
  })
  buttonsContainer.appendChild(buttonElement)

  function sendNPS3(): NPS3 {
    console.log('NPS 3')
    posthog.capture('NPS3', { content: config.NPS3 })
  }

  buttonElement = Object.assign(document.createElement('button'), {
    className: 'button3',
    innerText: '3',
    onclick: sendNPS3,
  })
  buttonsContainer.appendChild(buttonElement)

  function sendNPS2(): NPS2 {
    console.log('NPS 2')
    posthog.capture('NPS2', { content: config.NPS2 })
  }

  buttonElement = Object.assign(document.createElement('button'), {
    className: 'button2',
    innerText: '2',
    onclick: sendNPS2,
  })
  buttonsContainer.appendChild(buttonElement)

  function sendNPS1(): NPS1 {
    console.log('NPS 1')
    posthog.capture('NPS1', { content: config.NPS1 })
  }

  buttonElement = Object.assign(document.createElement('button'), {
    className: 'button1',
    innerText: '1',
    onclick: sendNPS1,
  })
  buttonsContainer.appendChild(buttonElement)

  function sendNPS0(): NPS0 {
    console.log('NPS 0')
    posthog.capture('NPS0', { content: config.NPS0 })
  }

  buttonElement = Object.assign(document.createElement('button'), {
    className: 'button0',
    innerText: '0',
    onclick: sendNPS0,
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