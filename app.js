// this 
// points to the left of the dot

// const gary = {
//     firstName: 'gary',
//     lastName: 'gygax',
//     fullName: function(){
//         console.log(`My full name is ${this.firstName} ${this.lastName}`);
//     },
// };
// const john = {
//     firstName: 'john',
//     lastName: 'mac',
//     fullName: function(){
//         console.log('My full name is john mac');
//     },
// };

// gary.fullName();
// john.fullName();


/********************** */

// In Reg Functions -not arrow- "this"
// determined by HOW the function is invoked -left of

// defaults to global window
// arrow functions - pump the breaks

// function showThis(){
//     console.log(this);
// }

// const jojo = {
//     name: 'jojo',
//     showThis: showThis,
// };
// const dood = {
//     name: 'dood',
//     showThis: showThis,
// };

// // If the object invokes this, calls that object
// jojo.showThis();
// dood.showThis();

// // if nothing is invoked left of the dot, the window object is called
// showThis();

// ******************************

// Blue Print
// Factory Functions and Constructor Functions

// Factory Function
// function createPerson(firstName, lastName) {
//     return {
//         firstName: firstName,
//         lastName: lastName,
//         fullName: function() {
//             console.log(`My full name is ${this.firstName} ${this.lastName}`);
//         },
//     };
// };

// const gary = createPerson('gary','gygax');
// gary.fullName();
// const bob = createPerson('bob','evans');
// bob.fullName();
// const dan = createPerson('dan','max');
// dan.fullName();


// // Constructor Function
// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.fullName = function() {
//         console.log(`My full name is ${this.firstName} ${this.lastName}`);
//     };
// }

// const john = new Person('john', 'daily');
// john.fullName();


// ****************************************

/* 
    Prototypal Inheritance Model
    Javascript uses prototypal inheritance model. That means that
    every constructor function/class has a prototype property that is
    shared by every instance of the constructor/class. So any properties
    and methods or prototype can be acessed by every instance, prototype
    property returns an object
*/

// function Account(name, initialBalance) {
//     this.name = name;
//     this.initialBalance = initialBalance;
// }

// const john = new Account('john', 300);
// const bob = new Account('bob', 200);

// console.log(Account.prototype);

// Account.prototype.bank = 'CHASE';
// Account.prototype.deposit = function(amount) {
//         this.initialBalance += amount;
//         console.log(`Hello ${this.name}, your balance is ${this.initialBalance}`);
//     };

// console.log(john.bank);
// console.log(bob);

// john.deposit(300);


// ES6 Class Syntax
// class Account {
//     constructor(name, initialBalance){
//         this.name = name;
//         this.initialBalance = initialBalance;
//     }
//     bank = 'CHASE';
//     deposit(amount){
//         this.initialBalance += amount;
//         console.log(`Hello ${this.name}, your balance is ${this.initialBalance}`);
//     }
// }

// const john = new Account('john', 0);
// console.log(john);
// console.log(john.name);
// john.deposit(500);
// console.log(john.bank);


// call - runs instantly, arguments - list of items

// const john = {
//     name: 'john',
//     age: 22,
//     greet: function(){
//         console.log(this);
//         console.log(`Hello I am ${this.name} and I am ${this.age} years old`);
//     }

// } 
// const sue = {
//     name: 'sue',
//     age: 28,
// } 

// john.greet.call(sue);


