// Solve the below problems:


// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

let dragonsJohn = dragons.filter(dragon => dragon === 'John' )
// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragonsTwo = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
let dragonsTwoJohn = dragonsTwo.filter(dragon => dragon.includes("John"))
 

// #3) Create a function that calulates the power of 100 of a number entered as a parameter

const degree100 = (x)=> x**100

degree100(2)
// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result

const degree10000 = (x)=>BigInt(x)**10000n

degree10000(2n)