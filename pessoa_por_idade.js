// organizar pessoas por idade
// expected: { '28': [ 'Daniel' ], '29':[ 'Maria', 'Marta' ] }

const pessoas = [
    { nome: 'Daniel', idade: 28 },
    { nome: 'Maria', idade: 29 },
    { nome: 'Marta', idade: 29 }
];

const reduce = pessoas.reduce((acc, currentValue) => {
    const currentAgeArray = acc[currentValue.idade] || [];
    currentAgeArray.push(currentValue.nome);
    acc[String(currentValue.idade)] = currentAgeArray;
    return acc;
}, {});

console.log(reduce);