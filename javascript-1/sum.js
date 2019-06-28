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
