// @flow
import fs from 'fs';
import http from 'http';

let server = http.createServer();

function pipe(inputStream: stream$Readable, outputStream: http$ServerResponse) {
  inputStream.on('data', (data: Buffer) => {
    if (outputStream.write(data) === false) {
      console.log('Paused');
      inputStream.pause();
    }
  });

  inputStream.on('end', (data: Buffer) => {
    console.log('End');
    outputStream.end();
  });

  outputStream.on('drain', (data: Buffer) => {
    console.log('Drain');
    inputStream.resume();
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
