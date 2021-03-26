// Here, we're just repeating a lot of code over and over again...
// uid: string | number 
// to prevent that, we can use type aliases!

const logDetails = (uid: string | number, item: string) => {
    console.log('Details here!');
};

const greet = (user: {name: string, uid: string | number}) => {
    console.log(`Hello, ${user.name}!`);
};
 
// we declare like the following...

type StringOrNum = string | number;

const logDetailsWithType = (uid: StringOrNum, item: string) => {
    console.log('Details here!');
};

const greetWithType = (user: {name: string, uid: StringOrNum}) => {
    console.log(`Hello, ${user.name}!`);
};

type objWithName = {
    name: string,
    uid: StringOrNum
};

const greetWithName = (user: objWithName) => {
    return console.log('Hello, ' + user.name) + '!';
};

// So much easier! 😁