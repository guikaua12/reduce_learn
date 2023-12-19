// carrinho de compras
// resultado esperado: 25

const items = [
    {description: 'pen', quantity: 1, price: 3},
    {description: 'pen', quantity: 2, price: 5},
    {description: 'pen', quantity: 2, price: 6},
]

const total = items.reduce((acc, currentValue) => {
    const totalToPay = currentValue.price * currentValue.quantity;
    return acc + totalToPay;
}, 0);

console.log(total);