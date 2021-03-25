import { Invoice } from './classes/Invoice.js';

const invOne = new Invoice('mario', 'work on the luigi website', 250);
const invTwo = new Invoice('mario', 'work on the luigi website', 200);

console.log(invOne);
console.log(invTwo);

let invoices: Invoice[] = [];

invoices.push(invOne);
invoices.push(invTwo);

const form = document.querySelector('.new-item-form') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#toFrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.value);
});