const findTheOldest = function(people) {
    let ages = people.map(person => 
        (person.yearOfDeath || new Date().getFullYear()) - person.yearOfBirth);
    return people.find(person => ((person.yearOfDeath || new Date().getFullYear()) - person.yearOfBirth) ===Math.max(...ages));
};

// Do not edit below this line
module.exports = findTheOldest;
