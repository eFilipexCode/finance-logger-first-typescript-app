import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payments.js';
import { HasFormatter } from './interfaces/hasFormatter';

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice('yoshi', 'web work', 250);
// docTwo = new Payments('mario', 'plumbing work', 200);

// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

const invOne = new Invoice('mario', 'work on the luigi website', 250);
const invTwo = new Invoice('mario', 'work on the luigi website', 200);

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
    let doc: HasFormatter;
    
    if (type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    } else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    };
    
    console.log(doc);
});
