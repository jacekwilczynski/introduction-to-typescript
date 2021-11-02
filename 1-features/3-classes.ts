class Person {
    private static readonly MINIMUM_AGE: number = 18;

    public constructor(
        private readonly name: string,
        private readonly age: number
    ) {
        this.verifyAge();
    }

    public getIntroduction(): string {
        return `Hi, my name is ${this.name}, and I'm ${this.age} years old.`;
    }

    private verifyAge(): void {
        if (this.age < Person.MINIMUM_AGE) {
            throw Error('Sorry, adults only.');
        }
    }
}

const adult = new Person('Jay Pea Two', 101);
console.log(adult.getIntroduction());

const child = new Person('Pigtail girl', 8);
console.log(child.getIntroduction());
