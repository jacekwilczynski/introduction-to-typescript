//
// Union type
//

type StringOrNumber = string | number;

function f1(arg: StringOrNumber): void {
}

f1(1);
f1('s');
f1(false); // not allowed



//
// Intersection type
//

interface A {
    first: number;
}

interface B {
    second: number;
}

type AB = A & B;

function f2(arg: AB): void {
}

f2({ first: 1 }); // not allowed
f2({ second: 1 }); // not allowed
f2({ first: 1, second: 1 });



//
// Crazy generics
//

interface Friend {
    personId: string;
    friendsSince: Date;
}

interface PersonAbc {
    id: string;
    name: string;
    dateOfBirth: Date;
    friends: Set<Friend>;
}

function f3(people: PersonAbc[]) {
}
