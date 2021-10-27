//
// Union type
//
function f1(arg: string | number): void {
}

f1(1);
f1('s');
f1(false);



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

f2({ first: 1 });
f2({ second: 1 });
f2({ first: 1, second: 1 });



//
// Crazy generics
//

function f3(people: { id: string, name: string, dateOfBirth: Date, friends: Set<{ personId: string, friendsSince: Date }> }[]) {
}
