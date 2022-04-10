let coloroInput1 = document.getElementById('color')
let coloroInput2 = document.getElementById('color2')
let codeCss = document.querySelector('h3')
let body = document.getElementsByTagName('body')[0]
function changeColor(){
  body.style.background = `linear-gradient(to right, ${coloroInput1.value}, ${coloroInput2.value})`
  codeCss.textContent = document.createTextNode(body.style.background + ';') 
}
coloroInput1.addEventListener('input',changeColor)
coloroInput2.addEventListener('input',changeColor)


console.log(body.style.background);
// linear-gradient(45deg, black, transparent)