const sinon = require('sinon')
const sendPaymentToApi= require("./4-payment.js");
const Utils = require('./utils.js');
const chai = require('chai');
const expect = chai.expect;


describe("Test suite", () => {
  it("Stub Utils.calculateNumber", () => {
    const stub = sinon.stub(Utils, "calculateNumber");
    // stub.withArgs(10, 20).returns(300);
    // expect(sendPaymentToApi(100, 20)).to.be.equal(300);
    stub.withArgs('SUM', 100, 20).returns(10);
    //const d = {};
    //d.s = sendPaymentToApi;
    //const spy = sinon.spy(sendPaymentToApi);
    //const spy = sinon.spy(d, 's');
    const spy = sinon.spy(console, 'log');
    sendPaymentToApi(100, 20);
    expect(spy.calledWith("The total is: 10")).to.be.true;
    //expect(sendPaymentToApi(100, 20)).to.be.equal(10);
    /*
    sinon.assert.calledOnce(spy);
    spy.calledWith('SUM', 100, 20)*/
  })
})
