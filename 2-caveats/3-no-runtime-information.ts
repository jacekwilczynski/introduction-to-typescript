// Although classes exist in JavaScript, interfaces, type aliases, and enums do not, so you can't check for them with `instanceof`.

interface OrderNotFoundErrorInterface {
    type: 'OrderNotFoundError';
}

interface OrderNotCancellableErrorInterface {
    type: 'OrderNotCancellableError';
}

class OrderNotFoundError extends Error implements OrderNotFoundErrorInterface {
    public readonly type = 'OrderNotFoundError';
}

class OrderNotCancellableError extends Error implements OrderNotCancellableErrorInterface {
    public readonly type = 'OrderNotCancellableError';
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
    if (error instanceof OrderNotCancellableError) {
    }

    // can't do: if (error instanceof OrderNotFoundErrorInterface)
    if (error.type === 'OrderNotCancellableError') {
    }
}
