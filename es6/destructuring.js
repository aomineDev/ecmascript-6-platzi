// 4. Desctructuring

const person = {
  name: 'aomine',
  age: 20,
  country: 'PE'
}

// Pre ES6
console.log(person.name, person.age, person.country)

// ES6
const { name, age, country } = person

console.log(name, age, country)
