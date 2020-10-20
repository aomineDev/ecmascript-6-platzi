// 3. Async await

const helloWorld = (bool) => {
  return new Promise((resolve, reject) => {
    if (bool) setTimeout(() => resolve('Hello world'), 3000)
    else reject(new Error('Test error'))
  })
}

async function helloAsync (bool) {
  try {
    const hello = await helloWorld(bool)

    console.log(hello)
  } catch (error) {
    console.error(error.message)
  }
}

helloAsync(true)
