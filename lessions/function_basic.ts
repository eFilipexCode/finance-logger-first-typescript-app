// the type is Function by default

let greet = () => {
    console.log('Hello World!');
};

// explicit type: (don't forget the captal F)

let greetAgain: Function;

// parameters

const add = (a: number, b: number, c: string | number = 10) => {
    if (c === 'print') {
        console.log(a + b);
    } else {
        return a + b;
    }
};

add(1, 4, 'string right here!');


const minus = (a: number, b: number) => {
    return a + b;
};

// result's type is the type of what is returned in the function minus.
// typescript inferes its type.

let result = minus(10, 7);


// but we can explicitly declare the type of the returned data:

const minusWithExplicitlyReturnedType = (a: number, b: number): number => {
    return a + b;
}

// if don't return something, we use void
// "Void is a complete lack of any kind of value"

const voidReturn = (name: string, age: 30): void => {
    console.log(name, age);
};