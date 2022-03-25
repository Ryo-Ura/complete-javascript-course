'use strict';

function calcAge(birthYear) {
    const age = new Date().getFullYear() - birthYear;
    function printAge() {
        const output = `${firstName}, you are ${age} years old, born in ${birthYear}`;
        console.log(output);
    }
    printAge();
    return age;
}

const firstName = 'John';
calcAge(1991);