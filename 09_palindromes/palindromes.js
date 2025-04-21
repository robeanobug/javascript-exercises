const palindromes = function (string) {
    const stringArr = string
        .toLowerCase()
        .split('')
        .filter(char => /\w/.test(char));
    const stringArrFlip = [...stringArr].reverse();

    return stringArr.length === stringArrFlip.length &&
        stringArr.every((letter, index) => letter === stringArrFlip[index]);
};

// Do not edit below this line
module.exports = palindromes;
