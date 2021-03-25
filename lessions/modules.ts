// The first thing we need to do before working with module system is:
// 1 - Go to tsconfig.json
// 2 - Change "target" to es6 and "module" to es2015
// 3 - Go to html file
// 4 - Add type="module" to the script which imports the js file

// Now we can use export and import (see class_and_modifiers.ts)
export class Invoice {
    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ) { };

    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`
    };
};  