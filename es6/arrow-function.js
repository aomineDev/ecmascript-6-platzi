// 8. Funciones de tipo flecha

const names = [
  { name: 'aomine', age: 20 },
  { name: 'Oscar', age: 32 },
  { name: 'Yesica', age: 27 }
]

// pre ES6
names.map(function (item) {
  return console.log(item.name + ' tiene ' + item.age + ' años')
})

// ES6
names.map(({ name, age }) => console.log(`${name} tiene ${age} años`))
