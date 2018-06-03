const chai = require("chai");
const should = chai.should();

const Oystercard = require("../src/oystercard.js");

describe("Oystercard", () => {
  
  let oystercard;

  beforeEach(() => {
    oystercard = new Oystercard();
  })
  
  it("should have 0 initial balance", () => {
    oystercard.balance.should.be.equal(0);
  })

  it("should add balance", () => {
    oystercard.addBalance(10);
    oystercard.balance.should.be.equal(10);
  })
})