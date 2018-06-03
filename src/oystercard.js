const MAXBALANCE = 50;

class Oystercard {

  constructor(){
    this.balance = 0;
  }

  addBalance(amt) {
    this.checkMaxBalance();
    this.balance += amt ;
  }

  checkMaxBalance() {
    if (this.balance === MAXBALANCE){
      throw Error(`You cannot exceed ${MAXBALANCE}, the max limit`);
    }
  }

  deductBalance(amt) {
    this.balance -= amt;
  }

}

module.exports = [Oystercard, MAXBALANCE];