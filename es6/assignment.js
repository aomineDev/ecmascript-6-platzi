// 7. Asignación de objetos mejorada

const name = 'aomine'
const age = 20

// pre ES6
const obj1 = {
  name: name,
  age: age
}

// ES6
const obj2 = { name, age }

console.log(obj2)