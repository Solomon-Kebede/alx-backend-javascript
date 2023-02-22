#!/usr/bin/node

arg = process.argv[2];

const countStudents = require('./3-read_file_async');
countStudents(arg);


const http = require('http');

const app = http.createServer((req, res) => {
  res.write('Hello Holberton School!');
  res.end();
}).listen(1245);

module.exports = app;

