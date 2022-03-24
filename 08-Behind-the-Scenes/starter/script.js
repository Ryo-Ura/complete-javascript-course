'use strict';

function calcAge(birthYear) {
    const age = new Date().getFullYear() - birthYear;
    console.log(firstName + ' is ' + age + ' years old.');
    return age;
}

const firstName = 'John';
calcAge(1991);