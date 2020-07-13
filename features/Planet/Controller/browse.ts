import { Handler, response, database as db } from 'kretes';

const { OK } = response;

import * as PlanetSQL from 'Planet/SQL';

export const browse: Handler = async ({ params }) => {
  // const result = await db.execute(PlanetSQL.browse(2));
  return OK(['A', 'B', 'C', 'D']);
}
