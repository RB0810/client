import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import TenantAccount from "../../objects/TenantAccount";
import "./../../../src/styles/createtenantacc.css"
import {Button, Grid, TextField} from '@mui/material'

const CreateTenantAcc = () => {
  const [tenantUsername, setTenantUsername] = useState("");
  const [tenantEmail, setTenantEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reEnterPassword, setReEnterPassword] = useState("");
  const [tenantPhone, setTenantPhone] = useState("");
  const [tradeType, setTradeType] = useState("");
  const [monthlyRental, setMonthlyRental] = useState("");
  const [leaseCommencementDate, setLeaseCommencementDate] = useState("");
  const [leaseTerminationDate, setLeaseTerminationDate] = useState("");
  const [areaOfUnit, setAreaOfUnit] = useState("");
  const [numberOfUnits, setNumberOfUnits] = useState(1);
  const [unitFields, setUnitFields] = useState([]);
  const [formError, setFormError] = useState(null);
  const { SupervisorID } = useParams();

  const handleUnitFieldChange = (index, value) => {
    const updatedUnitFields = [...unitFields];
    updatedUnitFields[index] = value;
    setUnitFields(updatedUnitFields);
  };

  const handleNumberOfUnitsChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setNumberOfUnits(value);
    setUnitFields(Array(value).fill(""));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const tenantAccount = new TenantAccount();
    tenantAccount.username = tenantUsername;
    tenantAccount.email = tenantEmail;
    tenantAccount.password = password;
    tenantAccount.rePassword = reEnterPassword;
    tenantAccount.phone = tenantPhone;
    tenantAccount.supervisor = SupervisorID;
    tenantAccount.commenceDate = leaseCommencementDate;
    tenantAccount.terminationDate = leaseTerminationDate;
    tenantAccount.AreaInSqMeters = areaOfUnit;
    tenantAccount.tradetype = tradeType;
    tenantAccount.monthlyrental = monthlyRental;
    tenantAccount.numberofunits = numberOfUnits;
    tenantAccount.units = unitFields;

    try {
      const message = await tenantAccount.createAccount();
      setFormError(message);
    } catch (error) {
      setFormError(error.message);
    }
  };

  const renderUnitFields = () => {
    const fields = [];
    if (numberOfUnits>0){
        for (let i = 0; i < numberOfUnits; i++) {
        fields.push(
            <Grid item xs = {12}>
              <TextField 
              type="text"
              key={i}
              className="create-tenant-acc-textfield"
              id="outlined-basic" 
              variant="filled" 
              value={unitFields[i] || ""}
              onChange={(e) => handleUnitFieldChange(i,e.target.value)}/>
            </Grid>
        );
      }
    }
    
    return fields;
  };

  return (
    <div className="create-tenant-acc-div">
      <h1>Create Tenant Account</h1>
      <form onSubmit={handleSubmit} className="create-tenant-acc-form">
        <div className="create-tenant-acc-row">
          <div className="create-tenant-acc-col-25">
            <label className="create-tenant-acc-label">Tenant Username:</label>
          </div>
          
          <div className="create-tenant-acc-col-75">
            <Grid container spacing={1}>
              <Grid item xs = {12}>
                  <TextField 
                  type="text"
                  className="create-tenant-acc-textfield"
                  id="outlined-basic" 
                  variant="filled" 
                  value={tenantUsername}
                  onChange={(e) => setTenantUsername(e.target.value)}/>
              </Grid>
            </Grid>
          </div>
        </div>
        
        
        <div className="create-tenant-acc-row">
          <div className="create-tenant-acc-col-25">
            <label className="create-tenant-acc-label">Tenant Email:</label>
          </div>
          
          <div className="create-tenant-acc-col-75">
            <Grid container spacing={1}>
              <Grid item xs = {12}>
                  <TextField 
                  type="email"
                  className="create-tenant-acc-textfield"
                  id="outlined-basic" 
                  variant="filled" 
                  value={tenantEmail}
                  onChange={(e) => setTenantEmail(e.target.value)}/>
              </Grid>
            </Grid>
          </div>
        </div>
        
        
        <div className="create-tenant-acc-row">
          <div className="create-tenant-acc-col-25">
            <label className="create-tenant-acc-label">Password:</label>
          </div>
          
          <div className="create-tenant-acc-col-75">
            <Grid container spacing={1}>
              <Grid item xs = {12}>
                  <TextField 
                  type="password"
                  className="create-tenant-acc-textfield"
                  id="outlined-basic" 
                  variant="filled" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}/>
              </Grid>
            </Grid>
          </div>
        </div>
        
        
        <div className="create-tenant-acc-row">
          <div className="create-tenant-acc-col-25">
            <label className="create-tenant-acc-label">Re-enter Password:</label>
          </div>
          
          <div className="create-tenant-acc-col-75">
            <Grid container spacing={1}>
              <Grid item xs = {12}>
                  <TextField 
                  type="password"
                  className="create-tenant-acc-textfield"
                  id="outlined-basic" 
                  variant="filled" 
                  value={reEnterPassword}
                  onChange={(e) => setReEnterPassword(e.target.value)}/>
              </Grid>
            </Grid>
          </div>
        </div>
        
        <div className="create-tenant-acc-row">
          <div className="create-tenant-acc-col-25">
            <label className="create-tenant-acc-label">Tenant Phone:</label>
          </div>
          
          <div className="create-tenant-acc-col-75">
            <Grid container spacing={1}>
              <Grid item xs = {12}>
                  <TextField 
                  type="tel"
                  className="create-tenant-acc-textfield"
                  id="outlined-basic" 
                  variant="filled" 
                  value={tenantPhone}
                  onChange={(e) => setTenantPhone(e.target.value)}/>
              </Grid>
            </Grid>
          </div>
        </div>
        
        <div className="create-tenant-acc-row">
          <div className="create-tenant-acc-col-25">
            <label className="create-tenant-acc-label">Trade Type:</label>
          </div>
          
          <div className="create-tenant-acc-col-75">
            <Grid container spacing={1}>
              <Grid item xs = {12}>
                  <TextField 
                  type="text"
                  className="create-tenant-acc-textfield"
                  id="outlined-basic" 
                  variant="filled" 
                  value={tradeType}
                  onChange={(e) => setTradeType(e.target.value)}/>
              </Grid>
            </Grid>
          </div>
        </div>
        
        <div className="create-tenant-acc-row">
          <div className="create-tenant-acc-col-25">
            <label className="create-tenant-acc-label">Monthly Rental:</label>
          </div>
          
          <div className="create-tenant-acc-col-75">
            <Grid container spacing={1}>
              <Grid item xs = {12}>
                  <TextField 
                  type="text"
                  className="create-tenant-acc-textfield"
                  id="outlined-basic" 
                  variant="filled" 
                  value={monthlyRental}
                  onChange={(e) => setMonthlyRental(e.target.value)}/>
              </Grid>
            </Grid>
          </div>
        </div>
        
        <div className="create-tenant-acc-row">
          <div className="create-tenant-acc-col-25">
            <label className="create-tenant-acc-label">Lease Commencement Date:</label>
          </div>
          
          <div className="create-tenant-acc-col-75">
            <Grid container spacing={1}>
              <Grid item xs = {12}>
                  <TextField 
                  type="date"
                  className="create-tenant-acc-textfield"
                  id="outlined-basic" 
                  variant="filled" 
                  value={leaseCommencementDate}
                  onChange={(e) => setLeaseCommencementDate(e.target.value)}/>
              </Grid>
            </Grid>
          </div>
        </div>
        
        <div className="create-tenant-acc-row">
          <div className="create-tenant-acc-col-25">
            <label className="create-tenant-acc-label">Lease Termination Date:</label>
          </div>
          
          <div className="create-tenant-acc-col-75">
            <Grid container spacing={1}>
              <Grid item xs = {12}>
                  <TextField 
                  type="date"
                  className="create-tenant-acc-textfield"
                  id="outlined-basic" 
                  variant="filled" 
                  value={leaseTerminationDate}
                  onChange={(e) => setLeaseTerminationDate(e.target.value)}/>
              </Grid>
            </Grid>
          </div>
        </div>
        
        <div className="create-tenant-acc-row">
          <div className="create-tenant-acc-col-25">
            <label className="create-tenant-acc-label">Area (in Sq Meters):</label>
          </div>
          
          <div className="create-tenant-acc-col-75">
            <Grid container spacing={1}>
              <Grid item xs = {12}>
                  <TextField 
                  type="number"
                  className="create-tenant-acc-textfield"
                  id="outlined-basic" 
                  variant="filled" 
                  value={areaOfUnit}
                  InputProps={{
                    inputProps: {min: 0 }
                  }}
                  onChange={(e) => setAreaOfUnit(e.target.value)}/>
              </Grid>
            </Grid>
          </div>
        </div>
        
        <div className="create-tenant-acc-row">
          <div className="create-tenant-acc-col-25">
            <label className="create-tenant-acc-label">Number of Units:</label>
          </div>
          
          <div className="create-tenant-acc-col-75">
            <Grid container spacing={1}>
              <Grid item xs = {12}>
                  <TextField 
                  className="create-tenant-acc-textfield"
                  id="outlined-basic" 
                  variant="filled" 
                  type="number"
                  value={numberOfUnits}
                  onChange={handleNumberOfUnitsChange}
                  InputProps={{
                    inputProps: {min: 1 }
                  }}
                  onKeyDown={(e) => e.preventDefault()}/>
              </Grid>
            </Grid>
          </div>
        </div>
        
        <div className="create-tenant-acc-row">
          <div className="create-tenant-acc-col-25">
          <label className="create-tenant-acc-label">Unit:</label>
        </div>
        
        <div className="create-tenant-acc-col-75">
          <Grid container spacing={1}>
            {renderUnitFields()}
          </Grid>
        </div>
        </div>
        
        <div className="create-tenant-acc-row">
          <Grid container spacing={1}>
            <Grid item xs = {12}>
              <Button
              variant="contained"
              className="create-tenant-acc-button">
                Create Account
              </Button>
            </Grid>
          </Grid>
        </div>
        

        {formError && <p className="create-ticket-error">{formError}</p>}
      </form>
    </div>
  );
};

export default CreateTenantAcc;
