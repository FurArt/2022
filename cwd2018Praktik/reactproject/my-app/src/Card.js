import React from 'react';


const Card = () =>{
  return (
    <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img src='https://robohash.org/tes?200x200' />
      <div>
        <h2>Robot Name</h2>
        <p>Robot email</p>
      </div>
    </div>
  )
}

export default Card;