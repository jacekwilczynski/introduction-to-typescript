type PersonType = {
    name: string;
    dateOfBirth: Date;
};

interface PersonInterface {
    name: string;
    dateOfBirth: Date;
}

//
// Difference: interfaces can be extended in place
//

// new type
type DeadPersonType = PersonType & { dateOfDeath: Date };

// new interface
interface DeadPersonInterface extends PersonInterface {
    dateOfDeath: Date;
}

// modifying the interface (can't do with type aliases)
interface PersonInterface {
    photoUrl: string;
}
