#!/usr/bin/node

const fs = require('fs');

module.exports = async function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        resolve(data);
        // console.log(data);
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
          console.log(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`);
        }
      }
    });
  });
};
