import finalhandler from 'finalhandler'
import http from 'http'
import serveStatic from 'serve-static'

export default function runServer(rootDir, port) {
  console.log('Listening on port ' + port);
  let serve = serveStatic(rootDir, { index: ['index.html'] });
  let server = http.createServer(function(req, res) {
    serve(req, res, finalhandler(req, res));
  });
  server.listen(port);
}
