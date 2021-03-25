class Invoice {
    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ){};

    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`
    };
};

const invOne = new Invoice('mario', 'work on the luigi website', 250);
const invTwo = new Invoice('mario', 'work on the luigi website', 200);

console.log(invOne);
console.log(invTwo);

let invoices: Invoice[] = [];

invoices.push(invOne);
invoices.push(invTwo);