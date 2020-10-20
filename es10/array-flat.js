// 1. array flat method

const arr = [1, 2, 3, [4, 5, 6, [7, 8, 9]]]

console.log(arr.flat(2))

const arrTwo = [1, 2, 3, 4, 5]

console.log(arrTwo.flatMap(value => [value, value * 2]))