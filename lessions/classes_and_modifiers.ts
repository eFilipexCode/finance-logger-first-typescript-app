import { Invoice } from './modules.js';
// We can instanciate
const invOne = new Invoice('mario', 'work on the luigi website', 250);
const invTwo = new Invoice('mario', 'work on the luigi website', 200);

console.log(invOne);
console.log(invTwo);

// we can create arrays where only instances of Invoices are allowed
let invoices: Invoice[] = [];

// invoices.push('Hey!') - Not allowed!

invoices.push(invOne); // - Allowed!
invoices.push(invTwo); // - Allowed!