enum CustomerType {
    PRIVATE = 'private',
    BUSINESS = 'business',
}

interface CustomerWithType {
    id: string;
    name: string;
    type: CustomerType;
}

const customer: CustomerWithType = {
    id: '33a5b6171f494f139a0af8e404066b9b',
    name: 'Whatever',
    type: CustomerType.PRIVATE,
};

console.log(customer.type);

switch (customer.type) {
    case CustomerType.PRIVATE:
        break;
    case CustomerType.BUSINESS:
        break;
}
