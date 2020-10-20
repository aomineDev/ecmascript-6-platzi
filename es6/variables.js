// 6. variables

// ES6
if (true) {
  var globalVar = 'Global Var'
}

if (true) {
  let globalLet = 'Global Let'
  console.log(globalLet)
}

console.log(globalVar)
// console.log(globalLet) Error: globalLet is not defined

const a = 'b'
// a = 'a' Error: Assignment to constant variable.

console.log(a)
