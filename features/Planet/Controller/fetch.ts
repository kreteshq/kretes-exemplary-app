import { Handler } from 'kretes';

const Marko = (name: string) => {
  const template = require(`../View/${name}.js`);
  return template.stream({});
}

export const fetch: Handler = async ({ params }) => {
  // return HTMLStream('<h1>Hello world is great</h1>')
  return Marko('fetch');
}
