// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
let arrayForEach = []
array.forEach((username) => {
  arrayForEach.push(username.username + '!')
})
// console.log(arrayForEach);
//Create an array using map that has all the usernames with a "? to each of the usernames
let arrayMap = array.map(e => {
  return e.username + '?'
});

//Filter the array to only include users who are on team: red
let arrayRedFileter = array.filter(e => {
  return e.team === 'red'
})

//Find out the total score of all users using reduce
const acc = 0
let arrayTotalScope = array.map(e => e.score).reduce((acc, score) => acc + score)

// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	// console.log(num, i);
	// alert(num);
	return num * 2;
})

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.

let arrayItems = array.map(e => {
  let arr = e
  arr.items = e.items.map(item => item + '!')
  return arr 
});