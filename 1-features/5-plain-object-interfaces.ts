interface Customer {
    id: string;
    name: string;
}

interface OrderItem {
    productId: string;
    quantity: number;
    unitPrice: number;
}

interface Order {
    id: string;
    customer: Customer;
    items: OrderItem[];
    comment?: string;
}

const firstOrder: Order = {
    id: '722102d516a94324bef07697f672fe8c',
    customer: {
        id: 'e5b18b3ec28f471ebe09db75568b141b',
        name: 'Abee Ceedy',
    },
    items: [
        {
            productId: '2efcd86d4a314b269e64a5a7a1cfb864',
            quantity: 3,
            unitPrice: 30,
        },
        {
            productId: '802e7deeec9b434baa7b8fca90ff13a9',
            quantity: 1,
            unitPrice: 10,
        },
    ],
};

const secondOrder: Order = {
    id: 'f1ad8b86757a4aed98f5e5d4716db4ae',
    customer: {
        id: '58ef8e2ba33a4b4da714eb4cd2e47061',
        name: 'Eaeff Gee',
    },
    items: [
        {
            productId: '3a5ff67b6f644483a076c6668a0910d9',
            quantity: 1,
            unitPrice: 20,
        },
    ],
    comment: 'Ship this ASAP!',
};

const orders: Order[] = [firstOrder, secondOrder];

for (const order of orders) {
    const total = calculateTotal(order.items);
    console.log(`Order ${order.id} for a total of ${total}.`);
}

function calculateTotal(items: OrderItem[]): number {
    const itemTotals = items.map(item => item.unitPrice * item.quantity);

    return itemTotals.reduce((a, b) => a + b);
}
