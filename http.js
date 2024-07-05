const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url == '/') {
    res.end('Welcome to our home page');
  }
  if (req.url === '/about') {
    res.end('here is your short');
  }
  res.end(`<h1>OOps</h1>
    <p>We dont care</p>
    <a href='/'>back Home </a>`);
  console.log(req);
  res.write();
  res.end();
});

server.listen(3000);
