
const promiseTemplate = (funcNumber, value) => {
    return new Promise((resolve, reject) => {
        let delay = Math.ceil(Math.random() * 2000)
        setTimeout(() => {
            console.info(`Doing async func ${funcNumber}. My time for complete is ${delay}`)
            resolve(value)
        }, delay)
    })
}

const p1 = promiseTemplate(1, 5)
const p2 = promiseTemplate(2, 10)
const p3 = promiseTemplate(3, 5)

const promises = [p1, p2, p3]

async function promiseReduce(promises, reduce, initialValue) {
    let result = initialValue

    for (let promise of promises) {
        await promise.then(value => result = reduce(result, value))
    }
    return result
}

promiseReduce(promises, (acc, x) => acc += x, 25)
    .then(value => console.log(value))


// Doing async func 1. My time for complete is 1726
// Doing async func 2. My time for complete is 612
// Doing async func 3. My time for complete is 1296

// Doing async func 1. My time for complete is 1726
// Doing async func 2. My time for complete is 612
// Doing async func 3. My time for complete is 1296
// 45     

