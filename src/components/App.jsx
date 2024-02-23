import React from "react";
import Login from "./Login";

var isLoggedin = false

const renderConditionally = () => {
  if (isLoggedin === true){
    return  <h1>Hello</h1>
  }else {
    return <Login />
  }
}

function App() {
  return (
    <div className="container">
      <h1>Hello</h1>
      <form className="form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;
