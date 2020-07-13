import { Handler, response } from 'kretes';

const { OK } = response;

export const fetch: Handler = async ({ params }) => {
  return OK({ name: 'Member for Moon' });
}
