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