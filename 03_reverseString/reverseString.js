const reverseString = function(string) {
    let stringArray = string.split('');
    let stringArrayReverse = [];
    for (let i = 0; i < string.length; i++) {
        stringArrayReverse.push(stringArray.pop());
    }
    let stringReverse = stringArrayReverse.join('');
    return stringReverse;
};

// Do not edit below this line
module.exports = reverseString;
