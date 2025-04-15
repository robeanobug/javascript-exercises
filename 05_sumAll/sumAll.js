const sumAll = function(numA, numB) {
    if (!Number.isInteger(numA) || numA <= 0 || !Number.isInteger(numB) || numB <= 0) {
        return "ERROR";
    }
    if (numA > numB) {
        let numC = numA;
        numA = numB;
        numB = numC;
    }
    numArray = [];
    for (let i = numA; i <= numB; i++) {
        numArray.push(i);
    }
    sum = 0;
    numArray.forEach(num => {
        sum += num;
    });
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
