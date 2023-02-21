#!/usr/bin/node

const fs = require('fs');

module.exports = function countStudents(path) {
  if (fs.existsSync(path) !== true) {
    throw new Error('Cannot load the database');
  }
  const data = fs.readFileSync(path,
    { encoding: 'utf8', flag: 'r' });
  const lines = data.split('\n').slice(1, data.split('\n').length - 1);
  const fields = {};
  let count = 0;
  lines.forEach((element) => {
    count += 1;
    const elemArray = element.split(',');
    const fieldValue = elemArray[elemArray.length - 1];
    const firstName = elemArray[0];
    if (fields[fieldValue] === undefined) {
      fields[fieldValue] = [];
      fields[fieldValue].push(firstName);
    } else {
      fields[fieldValue].push(firstName);
    }
  });
  console.log(`Number of students: ${count}`);
  // console.log(fields);
  for (const [key, value] of Object.entries(fields)) {
    console.log(`Number of students in ${key}: ${value.length}. List: ${value}`);
  }
  // console.log(data);
};
