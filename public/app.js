import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payments.js';
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice('yoshi', 'web work', 250);
// docTwo = new Payments('mario', 'plumbing work', 200);
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
var invOne = new Invoice('mario', 'work on the luigi website', 250);
var invTwo = new Invoice('mario', 'work on the luigi website', 200);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
var form = document.querySelector('.new-item-form');
var type = document.querySelector('#type');
var toFrom = document.querySelector('#toFrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
var container = document.querySelector('.item-list');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var doc;
    if (type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    ;
    console.log(doc);
    var listItem = new ListTemplate(container);
    listItem.render(doc, "New " + type.value, 'start');
});
