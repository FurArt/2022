import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function HookFormRegister(props) {
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
    let data = {
      email: user.email,
      password: user.password,
      name: user.name,
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
    fetch("http://localhost:5000/register", messeg)
      .then((response) => response.json())
      .then((data) => {
        if (data.id === "error") {
          setUserErrors({
            email: data.email && !!data.email.message,
          });
        } else {
          props.loadUsserData(data);
          props.onRoutechange('Sign in');
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
            <legend className="f2 fw6 ph0 mh0">Register</legend>
            <div className="mt3">
              <label
                className="db fw6 lh-copy f6"
                htmlFor="email-address-register"
              >
                Name
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="text"
                name="name-address-register"
                id="name-address-register"
                {...register("name", { required: true, minLength: 2 })}
              />
              <p>{errors.email?.type === "required" && "Name is required"}</p>
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
                {errors.email?.type === "required" && "Email is required. "}
                {userErrors.email ? "Email registered, try another." : ""}
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
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="Submit"
              value="Submit"
            />
          </div>
        </form>
      </main>
    </div>
  );
}
