// 2. Promise finally

function helloWorld (bool) {
  return new Promise((resolve, reject) => {
    if (bool) setTimeout(() => resolve('Hello world'), 3000)
    else reject(Error('Test error'))
  })
}

helloWorld(true)
  .then(response => console.log(response))
  .catch(error => console.error(error.message))
  .finally(() => console.log('La promesa a finalizado!'))