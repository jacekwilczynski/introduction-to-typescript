// While classes exist in JavaScript, interfaces, type aliases, and enums do not, so you can't check for them with `instanceof`.

class OrderNotFoundError extends Error {
}

class OrderNotCancellableError extends Error {
}

function cancelOrder() {
    if (Math.random() >= 0.5) {
        throw new OrderNotFoundError();
    }

    throw new OrderNotCancellableError();
}

try {
    cancelOrder();
} catch (error) {
    // ???
}
