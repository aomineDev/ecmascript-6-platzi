// 5. Spread Operator

const teamOne = ['Oscar', 'Julian', 'Ricardo']
const teamTwo = ['Valeria', 'Yesica', 'Camila']

const person = { name: 'aomine', age: 20 }

// ES6
const education = ['David', ...teamOne, ...teamTwo]

console.log(education)

const aomine = { ...person, country: 'PE' }

console.log(aomine)
