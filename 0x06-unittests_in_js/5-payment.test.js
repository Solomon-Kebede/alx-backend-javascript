const sinon = require('sinon')
const sendPaymentToApi= require("./5-payment.js");
const Utils = require('./utils.js');
const chai = require('chai');
const expect = chai.expect;

/*
beforeEach(() => {
    const spy = sinon.spy(console, 'log');
});
*/
describe("Test suite", () => {
  //beforeEach(() => {});
  //var spy = sinon.spy(console, 'log');
  it("sendPaymentRequestToAPI(100, 20)", () => {
	  const spy = sinon.spy(console, 'log');
    sendPaymentToApi(100, 20);
    expect(spy.calledWith("The total is: 120")).to.be.true;
    expect(spy.calledOnce).to.be.true;
  });
  it("sendPaymentRequestToAPI(10, 10)", () => {
	  const spy = sinon.spy(console, 'log');
    sendPaymentToApi(10, 10);
    expect(spy.calledWith("The total is: 20")).to.be.true;
    expect(spy.calledOnce).to.be.true;
  });
  afterEach(() => {
    //expect(spy.calledOnce).to.be.true;
    sinon.restore();
  });
});
