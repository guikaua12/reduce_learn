// contador de iniciais

const names = [
    "Daniel",
    "Maria",
    "Marta",
    "Juca",
    "João",
    "Jéssica",
];

// expected: { d: 1, m: 2, j: 3 }

const initialsCount = names.reduce((acc, currentValue) => {
    const initial = currentValue.at(0).toLowerCase();
    const amount = acc[initial] || 0;

    acc[initial] = amount+1;
    return acc;
}, {});

console.log(initialsCount)