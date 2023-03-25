import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()]).then(([result1, result2]) => {
    // console.log(result1);
    // console.log(result2);
    console.log(`${result1.body} ${result2.firstName} ${result2.lastName}`);
  });
}

module.exports = handleProfileSignup;
