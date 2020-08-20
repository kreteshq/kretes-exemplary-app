import * as Planet from 'Planet/Caller'

document.addEventListener('DOMContentLoaded', async () => {
  const reply = await Planet.browse();
  console.log(`Reply: ${JSON.stringify(reply)}`);
})

const App = 'Hello, World';
export { App };
