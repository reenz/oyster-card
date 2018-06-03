const MAXBALANCE = 50;
const MINBALANCE = 3;

class Oystercard {

  constructor(){
    this.balance = 0;
    this.inJourney = false;
    this.entryStation = null;
  }

  getBalance() {
    return this.balance;
  }

  addBalance(amt) {
    this.checkMaxBalance(amt);
    this.balance += amt ;
  }

  checkMaxBalance(amt) {
    if ((this.balance + amt ) > MAXBALANCE){
      throw Error(`You cannot exceed ${MAXBALANCE}, the max limit`);
    }
  }

  deductBalance(amt) {
    this.balance -= amt;
  }

  isInJourney() {
    return this.inJourney;
  }

  touchIn(station) {
    this.entryStation = station;
    if ((this.balance ) <= MINBALANCE){
      throw Error(`You must have ${MINBALANCE} as minimum balance`);
    }
    this.inJourney = true;
  }

  touchOut() {
    this.deductBalance(MINBALANCE);
    this.inJourney = false;
  }

    getEntryStation() {
      return this.entryStation;
    }
}

module.exports = [Oystercard, MAXBALANCE, MINBALANCE];