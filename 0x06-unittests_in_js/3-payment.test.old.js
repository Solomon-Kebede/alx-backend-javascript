//const sendPaymentToApi= require("./3-payment.js");
//sendPaymentToApi(1, 2)
//

const sinon = require('sinon')
const sendPaymentToApi= require("./3-payment.js");
const Utils = require('./utils.js');
const chai = require('chai');
const expect = chai.expect;

//sendPaymentToApi(1, 2)

describe("Test suite", () => {
  /*
  const sandbox = sinon.createSandbox();
  beforeEach(() => {
    sandbox.spy(sendPaymentToApi);
  })
  afterEach(() => {
    sandbox.spy(sendPaymentToApi);
  })
  */
  it("Test if calculateNumber has been called", () => {
    const spy = sinon.spy(Utils, "calculateNumber");
    sendPaymentToApi(100, 20);
    // sinon.assert.calledOnce(spy);
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith('SUM', 100, 20)).to.be.true;
  })
})
