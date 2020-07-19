import { Handler, response } from 'kretes';

const { OK } = response;

export const fetch: Handler = async ({ params }) => {
  // return HTMLStream('<h1>Hello world is great</h1>')
  return OK('fetch');
}
