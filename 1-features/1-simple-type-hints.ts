function getFullOrderNumber(shopId: string, numericPart: number): string {
    return shopId + '-' + numericPart;
}

const orderNumber: string = getFullOrderNumber('ABC', 123456);

let num: number | string = 5;

num = 5;
num = 'str';

console.log(orderNumber);
