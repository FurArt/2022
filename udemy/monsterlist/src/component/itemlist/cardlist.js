import React, { Component } from 'react';
import './card.css'

const Cardlist = (props) => {
  return (
    props.user.map((ell) => {
      const { id, name, email } = ell;
      return (
        <div className="card-container" key={id}>
          <img
            alt={`monster ${name}`}
            src={`https://robohash.org/${id}?set=set2&size=180x180`}
          />
          <h1>{name}</h1>
          <p>{email}</p>
        </div>
      );
    })
  )
}

export default Cardlist