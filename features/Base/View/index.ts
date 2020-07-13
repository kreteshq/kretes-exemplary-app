import * as Planet from 'Planet/Requester'
const App = 'Hello, World 3';

export { App };

document.addEventListener('DOMContentLoaded', async () => {
  const reply = await Planet.browse();
  console.log(`Reply: ${reply}`);
})
