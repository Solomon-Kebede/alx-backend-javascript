const sinon = require('sinon')
const sendPaymentToApi= require("./3-payment.js");
const Utils = require('./utils.js');
const chai = require('chai');
const expect = chai.expect;


describe("Test suite", () => {
  it("Test if calculateNumber has been called", () => {
    const spy = sinon.spy(Utils, "calculateNumber");
    sendPaymentToApi(100, 20);
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith('SUM', 100, 20)).to.be.true;
  })
})
