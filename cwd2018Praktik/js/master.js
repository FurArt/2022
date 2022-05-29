// const urls = [
//   "https://swapi.dev/api/films/1",
//   "https://swapi.dev/api/films/2",
//   "https://swapi.dev/api/films/3",
//   "https://swapi.dev/api/films/4",
//   "https://swapi.dev/api/films/5",
// ];

// Promise.all(
//   urls.map((url) => {
//     return fetch(url)
//     .then((res) => res.json())
//     .then(data=>{
//       throw Error
//       console.log(data.title)
//     })
//     .catch(err=>console.log)
//     .finally(data=>{
//       console.log('finally Data', data);
//     });
//   })
// );


// const getDataSecondVer = async function () {
//   const arrayPromises = urls.map(url=>fetch(url))
//   for await (let req of arrayPromises){
//     const data = await req.json()
//     console.log('await: ', data);
//   }
// }

// getDataSecondVer()

// setTimeout(console.log('hi Set Time out'),0);
// Promise.resolve('hi Promise').then((data)=>console.log(data));
// setTimeout(console.log('hi Set Time out 10'),5000);

const firstArray = [2,1,1,2,3,5,1,2,4]
const secondArray = [2,5,1,2,3,5,1,2,4]
const thirdArray = [2,3,4,5,6,7,8]

const checkArray = function (arr) {
  let dataArr = []
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    dataArr.forEach(dataElement => {
      return console.log(dataElement === element)
    });
    // console.log(element);
  }
   
}
checkArray(firstArray);
checkArray(secondArray);
checkArray(thirdArray);

