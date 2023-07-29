import React, { useState } from "react";
import "../../styles/login.css";
import AccountManager from "../../managers/accountmanager";
import {Button, Grid, TextField} from '@mui/material'

export default function AdminLogin() {
  const [ID, setID] = useState("");
  const [password, setPassword] = useState("");

  const accountManager = new AccountManager();

  const handleLogin = async (event) => {
    event.preventDefault();

    const eventData = {
      ID,
      Type: "Admin",
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
      <form className="loginForm">
        <div>
          <h1 className="wlcText">
            Admin Portal <br /> Login
          </h1>
        </div>
        <div>
          <p>Manage Landlords and Properties!</p>
        </div>

        <Grid container spacing={1}>
          <Grid item xs = {12}>
              <TextField 
              className="login-portal-textfield"
              id="outlined-basic" 
              label="ID Number/Email"
              onChange={(e) => setID(e.target.value)} 
              variant="outlined" />
          </Grid>
          <Grid item xs = {12}>
              <TextField 
              type="password"
              className="login-portal-textfield"
              id="outlined-basic" 
              label="Password" 
              onChange={(e) => setPassword(e.target.value)}
              variant="outlined" />
          </Grid>
          <Grid item xs = {12}>
            <Button 
            type="submit"
            variant="contained"
            className="login-portal-button">
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
