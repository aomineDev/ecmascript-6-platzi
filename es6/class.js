// 11. Clases

class Calculator {
  constructor (valueA, valueB) {
    this.valueA = valueA
    this.valueB = valueB
  }

  sum () {
    return (this.valueA + this.valueB)
  }
}

const calculator = new Calculator(5, 4)
console.log(calculator.sum())