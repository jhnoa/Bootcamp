// @flow
import fs from 'fs';
import http from 'http';

let server = http.createServer();

function pipe(inputStream: stream$Readable, outputStream: http$ServerResponse) {
  inputStream.on('data', (data: Buffer) => {
    if (outputStream.write(data) === false) {
      inputStream.pause();
      outputStream.once('drain', (data: Buffer) => {
        inputStream.resume();
      });
    }
  });

  inputStream.on('end', (data: Buffer) => {
    outputStream.end();
  });
}
server.on('request', (req: http$IncomingMessage, res: http$ServerResponse) => {
  let stream = fs.createReadStream('./assets/meme.mp4');
  res.statusCode = 200;
  res.setHeader('Content-Type', 'video/mp4');
  pipe(
    stream,
    res,
  );
});

server.listen(8000);
