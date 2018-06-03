class Oystercard {

  constructor(){
    this.balance = 0;
  }

  addBalance(amt) {
    this.balance = this.balance + amt ;
  }

}

module.exports = Oystercard;