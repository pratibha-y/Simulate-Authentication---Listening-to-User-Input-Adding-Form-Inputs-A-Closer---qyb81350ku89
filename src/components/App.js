


import React from "react";
import "../styles/App.css";
import User from "../models/user";
import { useState } from "react";
let loginName = "";
const App = () => {
  let [userArr, setUserArr] = useState([]);
  let [state, setState] = useState({
    signupName: "",
    signupEmail: "",
    signupPassword: "",
    signupConfirmPassword: "",
    loginEmail: "",
    loginPassword: "",
  });

  // let isLogout = false;
  let [isLogout, setIsLogout] = useState(true);

  const getInputValue = (e)=>{
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  const signUpClicked = ()=>{
    if(!state.signupName || !state.signupEmail || !state.signupPassword || !state.signupConfirmPassword || (state.signupPassword != state.signupConfirmPassword)) return;
    console.log("signUpClidked works");
    let userObj = {
      name: state.signupName,
      email: state.signupEmail,
      password: state.signupPassword,
    }
    setUserArr([...userArr, userObj]);
  }
  const logInClicked= ()=>{
    if(!state.loginEmail || !state.loginPassword) return;
    console.log("logInClicked works");
    userArr.map((user, index)=>{
      if(user.email == state.loginEmail){
        if(user.password == state.loginPassword){
          loginName = user.name;
          setIsLogout(false);
        }
      }
    })
  }
  const logOutClicked = ()=>{
    setIsLogout(true);
  }

  return (
    <div id="main">
      <table id="all-users">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
          {/* <tr>
            <td>* user's name</td>
            <td>* user's email</td>
            <td>* user's password</td>
          </tr> */}
          {userArr.map((userDetails, index)=>(
            <tr key={index}>
              <td>{userDetails.name}</td>
              <td>{userDetails.email}</td>
              <td>{userDetails.password}</td>
            </tr>
          )
          )}
        </tbody>
      </table>
      {isLogout ?
      <div>
        <form className="signup-form">
          <label htmlFor="name">Name</label>
          <input value={state.signupName} onChange={getInputValue} type="text" name="signupName" id="signupName" />
          <label htmlFor="email">Email</label>
          <input value={state.signupEmail} onChange={getInputValue} type="email" name="signupEmail" id="signupEmail" />
          <label htmlFor="password">Password</label>
          <input value={state.signupPassword} onChange={getInputValue} type="password" name="signupPassword" id="signupPassword" />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input value={state.signupConfirmPassword} onChange={getInputValue} type="password" name="signupConfirmPassword" id="signupConfirmPassword" />
        </form>
        <button onClick={signUpClicked} id="signup-button">Signup</button>

        <form className="login-styles">
          <label htmlFor="loginEmail">Email</label>
          <input value={state.loginEmail} onChange={getInputValue} id="loginEmail" name="loginEmail" type="email" />
          <label htmlFor="loginPassword">Password</label>
          <input value={state.loginPassword} onChange={getInputValue} id="loginPassword" name="loginPassword" type="password" />
        </form>
        <button onClick={logInClicked} id="login-button">Login</button>
      </div>
      :
        <div>
          <h3 id="username">{loginName}</h3>
          <h3 id="email">{state.loginEmail}</h3>
          <button onClick={logOutClicked} id="logout-button">Logout</button>
        </div>}
    </div>
  );
};

export default App;
