// 9. Funciones anónimas

// pre ES6
var sayHelloOne = function (name) {
  console.log('Hola ' + name + '!')   
}

// ES6
const sayHelloTwo = name => {
  console.log(`Hola ${name}!`)
}

sayHelloTwo('aomine')

// Podemos omitir los corchetes si solo haremos un return

const square = num => num * num
const number = 4

console.log(`${number} * ${number} = ${square(number)}`)