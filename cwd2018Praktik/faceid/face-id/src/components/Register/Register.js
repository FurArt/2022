import React, {Component} from 'react';
function Register({onRoutechange}) {
  return (
    <div className="br3 ba dark-gray b--black-10 mv6 w-100 w-50-m w-25-l mw5 shadow-5 center">
      <main className="pa4 black-80">
        <form className="measure">
          <fieldset id="sign_up_register" className="ba b--transparent ph0 mh0">
            <legend className="f2 fw6 ph0 mh0">Register</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address-register">Email</label>
              <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address-register"  id="email-address-register"/>
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password-register">Password</label>
              <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password-register"  id="password-register"/>
            </div>
          </fieldset>
          <div className="">
            <input 
            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
            type="submit" 
            value="Register"
            onClick={()=>onRoutechange('home')}  
            />
          </div>
        </form>
      </main>
    </div>
  );
}

export default Register;