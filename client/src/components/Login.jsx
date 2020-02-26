import React from 'react';

export default function Login({logIn}) {
  return (
    <div className="container">
        <div className="login">
        <h1>LOG IN</h1>
        <br />
        <input placeholder="username"></input>
        <br />
        <input type="password" placeholder="password"></input>
        <br />
        <button onClick={logIn}>SUBMIT</button>
        </div>
    </div>
  )
}