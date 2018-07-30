// @flow
import http from 'http';
import {join} from 'path';

let server = http.createServer();

server.on(
  'request',
  (request: http$IncomingMessage, response: http$ServerResponse) => {
    if (request.url.startsWith('/files/')) {
      let fileName = request.url.split('/').pop();
      let filesPath = join(__dirname, '../assets/files/');
      let filePath = join(filesPath, fileName);
      if (!filePath.startsWith(filesPath)) {
        serveNotFound(request, response);
        return;
      }
    } else if (request.url === '/submit') {
      if (request.method === 'POST') {
        let body = '';
        request.on('data', (data: Buffer) => {
          body += data.toString();
        });
        request.on('end', () => {
          response.statusCode = 200;
          let data = JSON.parse(body);
          console.log(data.name);
          response.setHeader('Content-Type', 'text/plain');
          response.write(`Name: ${data.name}\n`);
          response.write(`Price: ${data.price}\n`);

          response.end();
        });
      }
    } else if (request.url === '/') {
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/html');

      response.write(
        `<form id="form" method="POST" action="/submit" target="_blank">
          <input type="text" name="Item" placeholder="Item Name">
          <input type="text" name="Price" placeholder="Price">
          <br>
          <br>
          <button type="submit">
            Send
          </button>
        </form>
        <script>
          let form = document.getElementById('form');
          form.addEventListener('submit',(event) => {
            console.log(event);
            event.preventDefault();
            let item = {
              name: event.target[0].value,
              price: event.target[1].value
            }

            fetch('/submit', {
              method: 'POST',
              body:    JSON.stringify(item),
              headers: { 'Content-Type': 'application/json' },
            })
            .then(res => res.text())
            .then(json => console.log(json));
          })
        </script>`,
      );
      response.end();
    }
  },
);

function serveNotFound(request, response) {
  response.statusCode = 404;
  response.setHeader('Content-Type', 'text/html');
  response.write('<p>Page Not Found</p>');
  response.write('\n');
  response.end();
}

server.listen(8000);
