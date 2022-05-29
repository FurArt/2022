import React, {Component} from 'react';
import SignIn from '../signin/SignIn';
import './nav.ccs';

  // rout state - signin && register && home

function Navigation({route, onRoutechange}) {
  if (route === "Sign in" ) {
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
       <li className='f3 link dim black underline pa3 pointer'
          style={{color:'white'}}
          >Logged </li>
       <li className='f3 link dim black underline pa3 pointer'
        onClick={()=>onRoutechange('signout')}
        >Sign Out</li>
      </ul>
    </nav>)
    } else if (route === "signout"){
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
          <li className='f3 link dim black underline pa3 pointer'
          onClick={()=>onRoutechange('signout')}
          style={{color:'white'}}
          >Sign in</li>
          <li className='f3 link dim black underline pa3 pointer'
          onClick={()=>onRoutechange('Register')}
          >Register</li>
        </ul>
      </nav>)
      
    } else {
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
          <li className='f3 link dim black underline pa3 pointer'
          onClick={()=>onRoutechange('signout')}
          >Sign in</li>
          <li className='f3 link dim black underline pa3 pointer'
          onClick={()=>onRoutechange('Register')}
          style={{color:'white'}}
          >Register</li>
        </ul>
      </nav>)
    }
  }

export default Navigation;

