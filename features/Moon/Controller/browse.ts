import { Handler, response } from 'kretes';

const { OK } = response;

export const browse: Handler = async ({ params }) => {
  return OK({ name: 'Collection for Moon' });
}
