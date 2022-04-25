import React, {Component} from 'react';
function FaceFinder({imageUrl}) {
  return (
    <div className='FaceFinder centre'>
    <div className='absolute ma2'>
     <img src={imageUrl} alt={'it foto'} width='500px' height={'auto'}></img>
    </div>
    </div>
  );
}

export default FaceFinder;