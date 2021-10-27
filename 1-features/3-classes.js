class Person {
    static MINIMUM_AGE = 18;

    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.verifyAge();
    }

    getIntroduction() {
        return `Hi, my name is ${this.name}, and I'm ${this.age} years old.`;
    }

    verifyAge() {
        if (this.age < Person.MINIMUM_AGE) {
            throw Error(`Sorry, adults only.`);
        }
    }
}

const adult = new Person('Jay Pea Two', 101);
console.log(adult.getIntroduction());

const child = new Person('Pigtail girl', 8);
console.log(child.getIntroduction());
