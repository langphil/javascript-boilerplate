// @flow
/* eslint-disable no-console */

const str = 'ES6'
console.log(`Hello ${str}`)

const Dog = require('./dog')

const toby = new Dog('Toby')

console.log(toby.bark())
