//const sinon = require('sinon')
const getPaymentTokenFromAPI = require("./6-payment_token.js");
const chai = require('chai');
const expect = chai.expect;
//const jest = require("jest");

describe("getPaymentTokenFromAPI", () => {
  it('test success', () => {
	  /*
    return getPaymentTokenFromAPI(true).then(data => {
      expect(data).toBe('Successful response from the API');
      */
    const a = getPaymentTokenFromAPI(true);
    a.then((value) => {
      expect(value.data).to.equal("Successful response from the API");
    });
  });
  /*
  it('test fail', () => {
    const a = getPaymentTokenFromAPI(true);
    a.then((value) => {
      expect(value).to.equal(undefined);
  });
  */
});
