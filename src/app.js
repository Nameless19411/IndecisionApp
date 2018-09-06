// import subtract, { square, add } from './utils.js'
import isSenior, {isAdult, canDrink} from './person.js'

console.log('app.js is running')
// console.log(square(4))
// console.log(add(100,23))
// console.log(subtract(100,10))

let age = 21
console.log(isAdult(age) ? `${age} is adult` : `${age} is not adult`)
console.log(canDrink(age) ? `${age} can drink!` : `${age} cannot drink :(`)
console.log(isSenior(age) ? `${age} is senior` : `${age} is not senior!`)