// Typescript does not know whether there's an anchor tag or not
// in index.html. We can use if, or "!", like bellow.

const anchor = document.querySelector('a')!;
anchor.href;
anchor.id;

// It also has special types to different HTML elements and we can use some of them:

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// ... and this is called "Type Casting". 

// inputs

const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#toFrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});