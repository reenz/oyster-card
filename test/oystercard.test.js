const chai = require("chai");
const should = chai.should();

const [Oystercard, MAXBALANCE] = require("../src/oystercard.js");

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

  it("should raise error if balance reached max limit", () => {
    oystercard.addBalance(50);
    should.throw(()=> oystercard.addBalance(20), Error,`You cannot exceed ${MAXBALANCE}, the max limit`);
  })
})