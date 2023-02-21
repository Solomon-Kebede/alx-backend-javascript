#!/usr/bin/node

module.exports = function countStudents(path) {
  const fs = require('fs');
  if (fs.existsSync(path) !== true) {
	  throw new Error("Cannot load the database");
  }
  const data = fs.readFileSync(path,
	  {encoding:'utf8', flag:'r'});
  console.log(data);
}
