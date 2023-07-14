<<<<<<< HEAD
import React, { useState } from 'react';
import "../../styles/login.css";
import {LoginAuth} from "../../managers/accountmanager";

export default function AdminLogin() {
  const [ID, setID] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();

    const eventData = {
      ID,
      Type: 'Tenant',
      password
    };

    try {
      await LoginAuth(eventData);
    } catch (error) {
      console.error('Login error:', error);
      window.alert(`Error: ${error.message}`);
    }
  };

  return (
    <div className='logindiv'>
      <form className='loginForm'>
        <div>
          <h1 className='wlcText'>Tenant Portal <br/> Login</h1>
        </div>
        <div>
          <p>Create and Manage Tickets!</p>
        </div>

        <div>
          <label></label>
          <input className='loginInput' type='text' onChange={(e) => setID(e.target.value)} name='ID' placeholder='ID Number/Email'/>
        </div>

        <div>
          <label></label>
          <input className='loginInput' type='password' onChange={(e) => setPassword(e.target.value)} name='password' placeholder='Password'/>
        </div>

        <button className='loginBtn' onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
}
=======
import React, { useState } from "react";
import "../../styles/login.css";
import AccountManager from "../../managers/accountmanager";
import "../../styles/login.css";

export default function AdminLogin() {
  const [ID, setID] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();

    const accountManager = new AccountManager();

    const eventData = {
      ID,
      Type: "Tenant",
      password,
    };

    try {
      await accountManager.loginAuth(eventData);
    } catch (error) {
      console.error("Login error:", error);
      window.alert(`Error: ${error.message}`);
    }
  };

  return (
    <div className="logindiv">
      <form className="loginForm" onSubmit={handleLogin}>
        <div>
          <h1 className="wlcText">
            Tenant Portal <br /> Login
          </h1>
        </div>
        <div>
          <p>Create and Manage Tickets!</p>
        </div>
        <div>
          <label></label>
          <input
            className="loginInput"
            type="text"
            value={ID}
            onChange={(e) => setID(e.target.value)}
            name="ID"
            placeholder="ID Number/Email"
          />
        </div>
        <div>
          <label></label>
          <input
            className="loginInput"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            placeholder="Password"
          />
        </div>
        <button className="loginBtn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
>>>>>>> a68d74b2e817c7184e70c9d65d952e983e357804
