const findTheOldest = function(people) {
    let remappedPeople = people.map((person) => {
        const yearOfBirth = person.yearOfBirth;
        const yearOfDeath = ("yearOfDeath" in person) ? person.yearOfDeath : new Date().getFullYear();

        return { name: person.name, age: yearOfDeath - yearOfBirth };
    });

    remappedPeople.sort((a,b) => b.age - a.age);
    return remappedPeople[0];
};

// Do not edit below this line
module.exports = findTheOldest;
