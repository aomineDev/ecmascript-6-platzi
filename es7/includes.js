// 1. Función include

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

const val = 7

if (numbers.includes(val)) {
  console.log(`El número ${val} SI se encuentra en el arreglo :)`)
} else {
  console.log(`El número ${val} NO se encuentra en el arreglo :(`)
}