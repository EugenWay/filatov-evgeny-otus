const makeSum = () => {
        
    const sumMemory = [];

    return (...numbers) => {

        const arr = [...numbers];

        if (arr.length > 0) {
            const sum = arr.reduce((a, x) => a += x, 0);
            sumMemory.push(sum);
            return sum;
        } else {
            const globalSum = sumMemory.reduce((a, x) => a += x, 0);
            return globalSum;
        }
    };
};

const sum = makeSum();

sum(1,2,4,5,6,6,78); //102
sum(1,3,-2,0); //2
sum(); //104 Выводит сумму всех переданных до этого значений


// Вариант с поочередный вызовом вида sum(a)(b)(n)()

const sum2 = (a) => {
    return (b) => {
        if (b) {
            return sum2(a + b)
        } else {
            return a
        }    
    }
}

console.log(sum2(2)(10)(3)(-3)(34)()) //46
console.log(sum2(2)(10)()) //12
console.log(sum2()()) //undefined