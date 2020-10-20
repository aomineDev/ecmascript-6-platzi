// 10. Promesas

const helloPromise = (bool) => {
  return new Promise((resolve, reject) => {
    if (bool) resolve ('Hey!')
    else reject(Error('Ups!'))
  })
}

helloPromise(false)
  .then(response => console.log(response))
  .catch(error => console.error(error.message))