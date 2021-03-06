import React, { Component } from "react";
import "./SignIn.css";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: "",
      signInPassword: "",
    };
  }
  onEmailChange = (event) => {
    this.setState({ signInEmail: event.target.value });
  };
  onPasswordChange = (event) => {
    this.setState({ signInPassword: event.target.value });
  };
  onSubmitSigni = (event) => {
    event.preventDefault();
    let data = {
      email: this.state.signInEmail,
      password: this.state.signInPassword,
    };
    const messeg = {
      method: "POST",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
        "Accept-Encoding": "gzip, deflate, br",
        Connection: "keep-alive",
      },
      Host: "127.0.0.1:3000",
      body: JSON.stringify(data),
    };
    fetch("http://localhost:5000/signin", messeg)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          this.props.loadUsserData(data);
          this.props.onRoutechange("home");
        }
      })
      .catch((error) => console.log("error", error));
  };

  render() {
    const { onRoutechange } = this.props;
    const { onEmailChange, onSubmitSigni, onPasswordChange } = this;
    return (
      <div className="br3 ba dark-gray b--black-10 mv6 w-100 w-50-m w-25-l mw5 shadow-5 center">
        <main className="pa4 black-80">
          {/* Change defolt event */}
          <form onSubmit={onSubmitSigni} className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f2 fw6 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  Email
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={onEmailChange}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">
                  Password
                </label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  onChange={onPasswordChange}
                />
              </div>
            </fieldset>
            <div className="">
              <input
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Sign in"
                // onClick={onSubmitSigni}
                // onClick={()=>onRoutechange('home')}
              />
            </div>
            <div className="lh-copy mt3">
              <p
                className="f6 link dim black db pointer"
                onClick={() => onRoutechange("register")}
              >
                Register
              </p>
            </div>
          </form>
        </main>
      </div>
    );
  }
}

export default SignIn;
