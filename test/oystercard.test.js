const chai = require("chai");
const should = chai.should();

const [Oystercard, MAXBALANCE, MINBALANCE] = require("../src/oystercard.js");

describe("Oystercard", () => {
  
  let oystercard;

  beforeEach(() => {
    oystercard = new Oystercard();
  })
  
  it("should have 0 initial balance", () => {
    oystercard.getBalance().should.be.equal(0);
  })

  it("should add balance", () => {
    oystercard.addBalance(10);
    oystercard.getBalance().should.be.equal(10);
  })

  it("should raise error if balance reached max limit", () => {
    oystercard.addBalance(49);
    should.throw(()=> oystercard.addBalance(20), Error,`You cannot exceed ${MAXBALANCE}, the max limit`);
  })

  it("should not raise error if it is topped up within the max limit", () => {
    oystercard.addBalance(20);
    should.not.throw(()=> oystercard.addBalance(30), Error);
  })

  it("should deduct balance", () => {
    oystercard.addBalance(20);
    oystercard.deductBalance(10);
    oystercard.getBalance().should.be.equal(10);
  })

  it("should return in journey as true if touched in", () => {
    oystercard.addBalance(30);
    oystercard.touchIn();
    oystercard.isInJourney().should.be.equal(true);
  })

  it("should return in journey as false if touched out", () => {
    oystercard.addBalance(30);
    oystercard.touchIn();
    oystercard.touchOut();
    oystercard.isInJourney().should.be.equal(false);
  })

  it("should raises error if one does not have min bal for a single journey", () => {
    oystercard.addBalance(1);
    should.throw(() => oystercard.touchIn(), Error,`You must have ${MINBALANCE} as minimum balance`)
  })

  it("deducts balance when touched out", () => {
    oystercard.addBalance(20);
    oystercard.touchIn();
    oystercard.touchOut();
    oystercard.getBalance().should.be.equal(17);
  })

})