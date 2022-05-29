import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function HookForm(props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  

  // WARNING REMBER THAT >>>>[]
  const [userErrors, setUserErrors] = useState({
    email: false,
    password: false,
  });

  const onSubmit = (user, e) => {
    console.log(user);
    if (user.route === "register") {
      props.onRoutechange(user.route);
    }
    let data = {
      email: user.email,
      password: user.password,
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
        if (data.id === "error") {
          setUserErrors({
            email: data.email && !!data.email.message,
            password: data.password && !!data.password.message,
          });
        } else {
          props.loadUsserData(data);
          props.onRoutechange(user.route);
        }
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="br3 ba dark-gray b--black-10 mv6 w-100 w-50-m w-25-l mw5 shadow-5 center">
      <main className="pa4 black-80">
        {/* Change defolt event */}
        <form onSubmit={handleSubmit(onSubmit)} className="measure">
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
                {...register("email", { required: true, minLength: 2 })}
              />
              <p>
                {errors.email?.type === "required" && "Email is required"}
                {userErrors.email ? "Email is not register" : ""}
              </p>
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
                {...register("password", { required: true, minLength: 2 })}
              />
              <p>
                {errors.password?.type === "required" && "Password is required"}
                {userErrors.password ? "Wrong pasword" : ""}
              </p>
            </div>
          </fieldset>
          <div className="">
            <input
              {...register("route", { defaultValues: { route: "home" } })}
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Sign in"
            />
          </div>
          <div className="lh-copy mt3">
            <p
              onClick={() => onSubmit({ route: "register" })}
              className="f6 link dim black db pointer"
            >
              Register
            </p>
          </div>
        </form>
      </main>
    </div>
  );
}
