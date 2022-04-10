// // prompt('Hello World')
// let userData = [
//   {
//     userName: 'andrei',
//     userPassword: 'paswords'
//   },
//   {
//     userName: 'selly',
//     userPassword: 'paswords1'
//   },
//   {
//     userName: 'SonmeOneElse',
//     userPassword: 'paswords2'
//   }
// ]
// function signInFor(name = 1,paswords = 1) {
//  for (let i = 0; i < userData.length; i++) {
//    if ((userData[i].userName === name) && (userData[i].userPassword === paswords) ) {

//      console.log(userData[i].userName, userData[i].userPassword)
//      console.log('Name corect')
//      return true
//    } 
   
//   }
//   console.log('Name wrong')
//   return false
// }

 
// let inputUserName = prompt('Tell you name')
// let inputUserPassword = prompt('Tell you password')

// // function signIn(userName,paswords){
// //  for (let i = 0; i < userData.length; i++) {
// //    const verName = userData[i].userName;
// //   }
// // }
// signInFor(inputUserName, inputUserPassword)
// // signIn('userName','paswords')

// // let counter = 0.1
// // while (counter < 10) {
// //   console.log(counter);
// //   counter++
// // }

// const buttonEv = document.getElementsByTagName('button')[0]

// buttonEv.addEventListener('mouseenter', function(){
//   console.log('Click!');
// })

// model
let button = document.getElementById('pushButton')
let inputText = document.getElementById('pushText')
let ul = document.querySelector('ul')

function innutLength(){
  return inputText.value.length > 0
}
// viewer
function createElementLi(){
  let li = document.createElement('li')
  li.appendChild(document.createTextNode( inputText.value))
  ul.appendChild(li)
  inputText.value = ''
}
// program
function addListenerClick(){
  if ( innutLength()) {
    createElementLi()
  }
}
function addListenerKeypress(e){
  if (innutLength() && e.keyCode === 13){
    createElementLi()
  }
}
button.addEventListener('click', addListenerClick)
inputText.addEventListener('keypress', addListenerKeypress)