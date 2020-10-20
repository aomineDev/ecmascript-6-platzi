// 1. Rest operator

const obj = {
  name: 'aomine',
  age: 20,
  country: 'PE'
}

const { name, ...all } = obj

console.log(name, all)
