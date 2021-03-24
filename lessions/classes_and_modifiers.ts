class Invoice {
    // Properties this class would have...
    // Note that they would be public by default. We can modify this behavior using the
    // Typescript classes' modifiers, like bellow:
    public client: string; // - By default, but we can declare anyway
    private details: string; // - It becomes private. Therefore, we cannot access this property in instances of this class
    readonly amount: number; // - We can only read, not change

    // Initializing them:
    constructor(c: string, d: string, a: number) {
        this.client = c;
        this.details = d;
        this.amount = a
    };

    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`
    };
};

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