// MODULE PACKAGE CORE

// setTimeout(function(){
//   console.log("Ishga Tushdi");
// }, 1000);

// let number = 0;
// setInterval(function () {
//   console.log("Hisob", number);
//   number++;
// }, 0);

// const fs = require('fs');
// const data = fs.readFileSync('./input.txt', 'utf8');
// console.log(data);

// console.log("======== h ========");

// fs.writeFileSync('./input.txt', `${data} \n\t\t by Murod`);
// const new_data = fs.readFileSync("./input.txt", "utf8");
// console.log(new_data);
 

//MODULE PACKAGE EXTERNAL
const moment = require ("moment");

setInterval(() => {
  const time = moment().format();
  console.log(`Hozirgi vaqt: ${time}`);
}, 1000);

// const inquirer = require('inquirer');
// inquirer
//   .prompt([{ type: "input", name: "raqam", message: "raqamni kiriting" }])
//   .then((answer) => {
//     console.log('Man Kiritgan raqam:', answer.raqam);
//   })
//   .catch((err) => console.log(err));

// const validator = require("validator");
// //const test = validator.isEmail("foo@bar.com");
// const test = validator.isIP("121.151.81");
// console.log("test:", test);

// const { v4: uuidv4 } = require('uuid');    //TAKRORLANMAS RANDOM STRING HOSIL QILIB BERADI
// const random = uuidv4();
// console.log(random);

// const chalk = require('chalk');
// const log = console.log;

// log(chalk.yellow(`My random number is: ${random}`));

// mkdirp =>  BIZ AYTGAN MANZILDA BIZGA REQUIRSIVE USULDA FOLDDER OCHIB BERADI
// shelljs => MULTIPROCCESS LANGUAGE HISOBLANADI NODEJS BIR PROGRAMMA ICHIDA BOSHQA BIR SHELLDA BIZNI PROGRAMMANI RUN QILADI. TASK BAJARILGACH U PROCCESS YOPISH MUMKIN BO'LADI. U ASOSAN JOB SCHEDULE LAR BN ISH. UHAM O'RNIDA EXTERNAM NPM HISOBLANADI.
// chalk => terminalda boshqacha log qilish imkonini beradi, bezaydirs


//MODULE PACKAGE FILE
// const calculate = require('./hisob.js');

// const natija = calculate.kopaytirish(80, 33);
// console.log('Natija:', natija);

// const natija2 = calculate.qoshish(50, 33);
// console.log('Natija:', natija2);

// const Account = require("./account");
// Account.tellMeAboutClass();
// Account.tellMeTime();

// console.log("============ H ============");

// const myAccount = new Account('Jacob', 500000, 09723498742);
// myAccount.giveMeDetails();

// myAccount.makeDeposit(1000000);
// myAccount.withdrawMoney(400000);