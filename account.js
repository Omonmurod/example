const moment = require('moment');

class Account {
  #amount
  #account_number

  constructor (name, amount, account_number) {
    this.name = name;
    this.#amount = amount;
    this.#account_number = account_number;
  }

  tellMeBalance() {
    console.log(`Sizning hisobingizdagi qoldiq:`, this.#amount);
    return this.#amount;
  }

  withdrawMoney(amount) {
    if (this.#amount > amount) {
      this.#amount -= amount;
      console.log(`Hisobdan ${amount} yechildi va qoldiq ${this.#amount}`);
    } else {
      console.log(`Sizning balansingizdagi pul yetarli emas: ${this.#amount}`);
    }
  }

  makeDeposit(amount) {
    this.#amount += amount;
    console.log(`Hisobingiz toldirildi, hisobingiz ${this.#amount} tashkil etdi`);
  }

  giveMeDetails() {
    console.log(`Salom hurmatli ${this.name} sizning hisobingiz ${this.#amount}$ ga teng`);
    console.log(`Hisob raqamingiz:`, this.#account_number);
  }

  static tellMeAboutClass() {
    console.log(`Bu class accountlarni yasash un ishlatiladi`);
  }

  static tellMeTime() {
    console.log(`Hozirgi vaqt ${moment().format('DD-MM-YYYY HH:mm:ss')}`);
  }
}

module.exports = Account;