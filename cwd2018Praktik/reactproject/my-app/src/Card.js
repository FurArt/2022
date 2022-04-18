import React from 'react';
const Card = (props) =>{
  const {name, email, id} = props
  return (
    <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
      <img alt='robots' src={`https://robohash.org/${id+a}`} />
      <div>
        <h2>{name} </h2>
        <p>{email}</p>
      </div>
    </div>
  )
}



function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

  let a = getRandomInt(10,5);
  export default Card;