// @flow
import http from 'http';
import {join} from 'path';
import fs from 'fs';
import formidable from 'formidable';

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
      var form = new formidable.IncomingForm();
      form.parse(request, (err, fields, files) => {
        if (err) {
          throw err;
        }
        var oldpath = files.uploadFile.path;
        var newpath = join(
          __dirname,
          '../assets/files/',
          files.uploadFile.name,
        );
        fs.rename(oldpath, newpath, (err) => {
          if (err) {
            throw err;
          }
          response.write('File uploaded and moved!');
          response.end();
        });
      });
    } else if (request.url === '/') {
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/html');

      response.write(
        `<form method="POST" action="/submit" target="_blank" enctype="multipart/form-data">
          <input type="file" name="uploadFile">
            </input>
          <br>
          <br>
          <button type="submit">
            Send
          </button>
        </form>`,
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
