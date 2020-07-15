import { App } from 'Base/View';
// import { BaseRequester } from 'Base/Requester'
// import { PlanetRequester } from 'Planet/Requester'

// const passBrowserFetchAPI = (input: any, init: any) => fetch(input, init);

// const baseRequester = new BaseRequester(passBrowserFetchAPI);
// const planetRequester = new PlanetRequester(passBrowserFetchAPI);

// const appElement = document.getElementById("app")!
// appElement.innerHTML = App;

// document.addEventListener('DOMContentLoaded', async () => {
//   const reply = await planetRequester.browse()
//   console.log(`Reply: ${reply}`);
// })

import * as Planet from 'Planet/Caller'

document.addEventListener('DOMContentLoaded', async () => {
  const reply = await Planet.browse();
  console.log(`Reply: ${reply}`);
})
