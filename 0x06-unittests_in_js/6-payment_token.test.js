const sinon = require('sinon')
const sendPaymentToApi= require("./6-payment_token.js");
const chai = require('chai');
const expect = chai.expect;
const jest = require("jest");

describe("getPaymentTokenFromAPI", () => {
  test('the data is peanut butter', () => {
    return getPaymentTokenFromAPI.then(data => {
      expect(data).toBe('Successful response from the API');
    });
  });
});
