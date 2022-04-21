import React, {Component} from 'react';
import './nav.ccs';


function Navigation() {
  return (
    <nav >
      <ul style={{
        'display': 'flex',
        'flexDirection': 'row',
        'flexWrap': 'nowrap',
        'padding': '0 2em',
        'justifyContent': 'end',
        'listStyle': 'none'
    }}>
        <li className='f3 link dim black underline pa3 pointer'>Sign In</li>
        <li className='f3 link dim black underline pa3 pointer'>Sign Up</li>
        <li className='f3 link dim black underline pa3 pointer'>Sign Out</li>

      </ul>
    </nav>
  );
}

export default Navigation;