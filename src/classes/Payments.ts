import { HasFormatter } from '../interfaces/hasFormatter';

export class Payment implements HasFormatter {
    constructor(
        public recipient: string,
        private details: string,
        public amount: number,
    ){};

    format() {
        return `${this.recipient} is owed for ${this.details}`;
    };
};

export default Payment;