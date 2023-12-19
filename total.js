const array = [0, 4, 2, 4, 7];

const total = array.reduce((acc, currentValue, i) => {
    console.log(`${i} - acc: ${acc} - currentValue: ${currentValue}`)
    return acc + currentValue;
}, 0);

console.log(total)