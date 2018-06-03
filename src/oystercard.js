const MAXBALANCE = 50;
const MINBALANCE = 3;

class Oystercard {

  constructor(){
    this.balance = 0;
    this.inJourney = false;
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

  touchIn() {
    if ((this.balance ) <= MINBALANCE){
      throw Error(`You must have ${MINBALANCE} as minimum balance`);
    }
    this.inJourney = true;
  }

  touchOut() {
    this.inJourney = false;
  }

}

module.exports = [Oystercard, MAXBALANCE, MINBALANCE];