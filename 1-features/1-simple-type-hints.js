function getFullOrderNumber(shopId, numericPart) {
    return shopId + '-' + numericPart;
}

const orderNumber = getFullOrderNumber('ABC', 123456);

console.log(orderNumber);
