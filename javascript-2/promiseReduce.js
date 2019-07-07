

const promise1 = () => {
    return new Promise((resolve, reject) => {
        let daley = Math.ceil(Math.random() * 2000)
        setTimeout(() => {
            console.info(`Doing async func 1, my time ${daley}`)
            resolve(5)
        }, daley)
    })
}
const promise2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.info('Doing async func 2')
            resolve(12)
        }, 2000)
    })
}

const promise3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.info('Doing async func 3')
            resolve(4)
        }, 1300)
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

