import React from "react";
import Login from "./Login";

var isLoggedin = false;

const renderConditionally = () => {
  if (isLoggedin === true) {
    return <h1>Hello</h1>;
  } else {
    return <Login />;
  }
};

function App() {
  return (
    <div className="container">
      {renderConditionally()}
    </div>
  );
}

export default App;
