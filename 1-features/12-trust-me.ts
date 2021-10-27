interface OrderSummary {
    orderId: string;
    total: number;
}

interface Whatever {
    name: string;
}

function showSummary(orderSummary: OrderSummary): void {
    console.log(orderSummary);
}

let variable: OrderSummary | Whatever = { orderId: 'd4886c3d85264602b05156d55edb5027', total: 15 };

if (Math.random() >= 0.5) {
    variable = { name: 'value' };
}

showSummary(variable);
