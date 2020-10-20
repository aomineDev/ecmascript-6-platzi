// 1. Parametros por defecto

// Pre ES6
function newFunction (name, age, country) {
  var name = name || 'oscar'
  var age = age || 32
  var country = country || 'MX'

  console.log(name, age, country)
}

// ES6
function newFunciton2 (name = 'omar', age = '20', country = 'PE') {
  console.log(name, age, country)
}

newFunciton2()
newFunciton2('Ricardo', '23', 'CO')
