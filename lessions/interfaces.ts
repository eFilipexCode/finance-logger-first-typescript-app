// An interface allow us to enforce a structure of a class or object

//example

interface IsPerson {
    // Here we say what properties an IsPerson object/class should have...
    name: string;
    age: number;
    isMarried?: boolean;
    speak(a: string): void; // The name of the paremeter here doesn't matter...
    spend(a: number): number;
};

// We don't use interface to create/instaciate objects. We are just giving a "sketch"
// to an object;

// Here, since me is using the IsPerson interface, it expects to have the properties we coded
// e. g.:
const me: IsPerson = {
    name: 'Emmanuel',
    age: 18,
    speak(sentence: string) {
        console.log(sentence);
    },
    spend(value: number) {
        console.log(`${name} just spent R$ ${value}`);
        return value;
    },
};


// Using as paremeter
const greetPerson = (person: IsPerson) => {
    console.log(`Hello, ${person.name}`)
};
greetPerson(me);