// @flow
import http from 'http';
import Router from './Router';

let server = http.createServer().listen(8000);
server.on('error', (error: Error) => {
  console.log('error', error);
});
let router = new Router();
router.addRoute('/', (reqres) => {
  console.log('homepage');
});
router.addRoute('/images/:id', (reqres, id) => {
  console.log('images, ID: ', id);
});
server.on(
  'request',
  (request: http$IncomingMessage, response: http$ServerResponse) => {
    router.handleRequest(request.url, {request, response});
  },
);
