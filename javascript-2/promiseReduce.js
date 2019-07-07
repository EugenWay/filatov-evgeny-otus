const promise1 = () => {
    return new Promise((resolve, reject) => {
        let daley = Math.ceil(Math.random() * 2000)
        setTimeout(() => {
            console.info(`Doing async func 1. My time for complete is ${daley}`)
            resolve(5)
        }, daley)
    })
}

const promise2 = () => {
    return new Promise((resolve, reject) => {
        let daley = Math.ceil(Math.random() * 2000)
        setTimeout(() => {
            console.info(`Doing async func 2. My time for complete is ${daley}`)
            resolve(10)
        }, daley)
    })
}

const promise3 = () => {
    return new Promise((resolve, reject) => {
        let daley = Math.ceil(Math.random() * 2000)
        setTimeout(() => {
            console.info(`Doing async func 3. My time for complete is ${daley}`)
            resolve(5)
        }, daley)
    })
}

const promises = [promise1, promise2, promise3]


async function promiseReduce(promises, reduce, initialValue) {
    let result = initialValue;

    for (let promise of promises) {
        await promise().then(value => result = reduce(result, value));
    }
    return result;
}


promiseReduce(promises, (acc, x) => acc += x, 25)
    .then(value => console.log(value));

// Doing async func 1. My time for complete is 1726
// Doing async func 2. My time for complete is 612
// Doing async func 3. My time for complete is 1296
// 45     

