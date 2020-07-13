import fs from 'fs';
import { Routes, response, routing, background } from 'kretes';

const { OK } = response;
const { Route: { GET, POST } } = routing;
const { schedule } = background;

import SendEmail from 'SendEmail';

const routes: Routes = [
  GET('/hello', _ => 'Hello, Kretes!'),
  GET('/json', _ => {
    // explicit `return` with a 200 response of `application/json` type
    return OK({ a: 1, b: 2 });
  }),
  GET('/stream', _ => {
    // stream the response
    return fs.createReadStream('static/index.html');
  }),
  GET('/headers', _ => {
    // set your own headers
    return { body: 'Hello B', statusCode: 201, headers: { 'Authorization': 'PASS' } };
  }),
  GET('/send', async _ => {
    await schedule({ task: SendEmail, payload: { name: 'Zaiste' } });
    return 'scheduled';
  }),
  POST('/bim', request => {
    return `Hello POST! ${request.params.name}`;
  }),

  // Resources: [
  //   {
  //     feature: 'Planet',
  //     alias: 'planets',
  //     children: [
  //       { feature: 'Moon', alias: 'moons' }
  //     ]
  //   }
  // ]
 ];

export default routes;
