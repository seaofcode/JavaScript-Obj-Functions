# JavaScript-Obj-Functions

### Objects Basics

Objects are collections of key (property) value pairs\
they can be strings, numbers, bools, arrays and functions\
however within objects, functions are called methods

object literal syntax, {}\
dot notation

const person = {\
name: 'matt',\
age: 33,\
married: false,\
siblings:['hanna', 'geno'],\
sayHello(name){\
console.log(`Hello, my name is ${name}`);\
},\
};

console.log(person);\
console.log(person.name);

const name = person.name;\
console.log(name);

change or add property\
person.age = 45;\
person.city = 'dallas';

delete property\
delete person.siblings;

console.log(person);
