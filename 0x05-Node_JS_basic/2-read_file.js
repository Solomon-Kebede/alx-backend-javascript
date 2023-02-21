#!/usr/bin/node

module.exports = function countStudents(path) {
  const fs = require('fs');
  if (fs.existsSync(path) !== true) {
	  throw new Error("Cannot load the database");
  }
  const data = fs.readFileSync(path,
	  {encoding:'utf8', flag:'r'});
  const lines = data.split('\n').slice(1, data.split('\n').length - 1);
  const fields = {};
  let count = 0
  lines.forEach((element) => {
    count++;
    const elemArray = element.split(',');
    //fields.push(elemArray[elemArray.length - 1]);
  });
  console.log(`Number of students: ${count}`);
  //console.log(data);
}
