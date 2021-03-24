// example 1
let greeeeeet: (a: string, b: string) => void;
greeeeeet = (name: string, b: string) => {
    // do stuff here...
    // OBS: the function signature's parameters doesn't neeed
    // to match with  the parameters of the declared function, like so.
};

//example 2 
let calc: (a: number, b: number, c: string) => number;

calc = function (numOne: number, numTwo: number, action: string) {
    if (action === 'add')
        return numOne + numTwo;
    else
        return numOne - numTwo;
};

// example 3
type person = {
    name: string;
    age: number;
};

let logDetails: (obj: person) => void;

logDetails = (ninja: person) => console.log(`${ninja.name} is ${ninja.age} years old!`);