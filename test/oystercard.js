const chai = require("chai");
const should = chai.should();

const Oystercard = require("../src/oystercard.js");

describe("Oystercard", () => {
  
  let oystercard;
  
  it("should have 0 initial balance", () => {
    oystercard = new Oystercard();
    oystercard.balance.should.be.equal(0);
  })
})