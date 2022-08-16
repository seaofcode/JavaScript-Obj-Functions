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
function createPerson(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName,
        fullName: function() {
            console.log(`My full name is ${this.firstName} ${this.lastName}`);
        },
    };
};

const gary = createPerson('gary','gygax');
gary.fullName();
const bob = createPerson('bob','evans');
bob.fullName();
const dan = createPerson('dan','max');
dan.fullName();


// Constructor Function
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function() {
        console.log(`My full name is ${this.firstName} ${this.lastName}`);
    };
}

const john = new Person('john', 'daily');
john.fullName();


