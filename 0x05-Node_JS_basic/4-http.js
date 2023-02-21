#!/usr/bin/node

const http = require('http');

module.exports.app = http.createServer((req, res) => {
  res.write('Hello Holberton School!');
  res.end();
}).listen(1245);
