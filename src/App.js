import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";
import Navbar from "./Navbar";

function App() {
  // what will be displayed
  const [currentForm, setCurrentForm] = useState('login');

  // this function will take in the forName as an argument to know which name to set/provided
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <>
    <Navbar />
    <div className="App">
      {/* <Home /> */}
      {
        // ternary operator in react: if condition is true it goes with first statement. If it's false it goes with the next statement.
        // added toggleForm so that it will pass the information on
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      };
    </div>
    </>
  );
}

export default App;
