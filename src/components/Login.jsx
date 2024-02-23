import React from "react";
import Input from "./Input";

const Login = (props) => {
  return (
    <form className="form">
      <Input
      type = "text"
      placeholder = "username"
       />
      <Input
      type = 'password'
      placeholder = "Password"
       />
    </form>
  );
};

export default Login;
