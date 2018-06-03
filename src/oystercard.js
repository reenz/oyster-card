const MAXBALANCE = 50;

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
    this.inJourney = true;
  }

  touchOut() {
    this.inJourney = false;
  }

}

module.exports = [Oystercard, MAXBALANCE];