let sum: Function;
let age: number;
let personName: string;
let ninjas: string[] = [];
let isCool: boolean = false;

//union types 

let mixed: (string|number);
let mixedArray: (string|number)[];

mixed = 'sdsd';
mixedArray = ['Jones', 34];
mixedArray.push(30);

let uid: string|number;

//objects 

let ninja1: object;
ninja1 = {
    name : 'hello',
    age: 30,
    wearsBlack: true
};

let ninja2: {
    name: string;
    age: number;
    wearsBlack: boolean,
    eatsPineapple?: boolean
};

ninja2 = {
    name: 'Black Ninja',
    age: 89,
    wearsBlack: false
    // there's no "eatsPineapple". And it's fine because we added "?" 
};