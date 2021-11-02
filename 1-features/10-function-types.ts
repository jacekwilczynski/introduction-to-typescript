// TYPES
interface Customer {
    id: string;
    name: string;
}

type CustomerProcessorType = (customer: Customer) => void;

interface CustomerProcessorInterface {
    (customer: Customer): void;
}

// DATA
const customers: Customer[] = [
    { id: '8a4962864bc941c695076920b84fe6b9', name: 'First Customer' },
    { id: 'b2269d4b3cbb41c8869522f2deb5b230', name: 'Second Customer' },
];

// FUNCTIONS

// You can replace CustomerProcessorType with CustomerProcessorInterface.
function processCustomers(customers: Customer[], processors: CustomerProcessorType[]): void {
    for (const customer of customers) {
        for (const processor of processors) {
            processor(customer);
        }
    }
}

function logCustomersName(customer: Customer): void {
    console.log(customer.name);
}

// EXECUTION
processCustomers(customers, [logCustomersName]);
