const Utils = require('./utils.js');

function sendPaymentToApi(totalAmount, totalShipping) {
  const total = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${total}`);
}

// console.log(Utils.calculateNumber('SUM', 1, 5));
// sendPaymentToApi(1, 2)
module.exports = sendPaymentToApi;
