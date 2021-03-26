import { Payments } from '../src/classes/Payments';
interface HasFormatter {
    format(): string;
};

// Now, every HasFormatter class should have formatter()
// But how do we "link" an interface to a class?
// R: using "implements" keyword

export class Invoice implements HasFormatter {
    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ){};

    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`
    };
};


// we can use it in variables
let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('yoshi', 'web work', 250);
docTwo = new Payments('mario', 'plumbing work', 200);


// using with arrays...
let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);