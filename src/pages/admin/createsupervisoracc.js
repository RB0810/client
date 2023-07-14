import { useState } from "react";
import "../../styles/createaccount.css";
import SupervisorAccount from "../../objects/SupervisorAccount";

const CreateSupervisor = () => {
  const [formError, setFormError] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [phone, setPhone] = useState("");
  const [buildingName, setBuildingName] = useState("");
  const [buildingAddress, setBuildingAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const supervisorAccount = new SupervisorAccount();
    supervisorAccount.username = username;
    supervisorAccount.email = email;
    supervisorAccount.password = password;
    supervisorAccount.rePassword = rePassword;
    supervisorAccount.phone = phone;
    supervisorAccount.buildingName = buildingName;
    supervisorAccount.buildingAddress = buildingAddress;
    supervisorAccount.postalCode = postalCode;

    try {
      const message = await supervisorAccount.createAccount();
      setFormError(message);
    } catch (error) {
      setFormError(error.message);
    }
  };

  return (
    <div className="ticket-creation-page">
      <h1 className="wlcText">Create Supervisor Account</h1>
      <form onSubmit={handleSubmit} className="create-supervisor-acc-form">
        <div className="create-supervisor-acc-row">
          <div className="create-supervisor-acc-col25">
            <label htmlFor="username">Supervisor Username:</label>
          </div>
          
          <div className="create-supervisor-acc-col75">
            <input
              type="text"
              id="username"
              className="create-supervisor-acc-input-text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>

        <div className="create-supervisor-acc-row">
          <div className="create-supervisor-acc-col25">
            <label htmlFor="email">Supervisor Email:</label>
          </div>
          
          <div className="create-supervisor-acc-col75">
            <input
              type="email"
              id="email"
              className="create-supervisor-acc-input-text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="create-supervisor-acc-row">
          <div className="create-supervisor-acc-col25">
            <label htmlFor="password">Enter Password:</label>
          </div>
          
          <div className="create-supervisor-acc-col75">
            <input
              type="password"
              id="password"
              className="create-supervisor-acc-input-text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
        </div>

        <div className="create-supervisor-acc-row">
          <div className="create-supervisor-acc-col25">
            <label htmlFor="rePassword">Re-enter Password:</label>
          </div>
          
          <div className="create-supervisor-acc-col75">
            <input
              type="password"
              id="rePassword"
              className="create-supervisor-acc-input-text"
              value={rePassword}
              onChange={(e) => setRePassword(e.target.value)}
            />
          </div>
        </div>

        <div className="create-supervisor-acc-row">
          <div className="create-supervisor-acc-col25">
            <label htmlFor="phone">Supervisor Phone:</label>
          </div>
          
          <div className="create-supervisor-acc-col75">
            <input
              type="tel"
              id="phone"
              className="create-supervisor-acc-input-text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>

        <div className="create-supervisor-acc-row">
          <div className="create-supervisor-acc-col25">
            <label htmlFor="buildingName">Building Name:</label>
          </div>
          
          <div className="create-supervisor-acc-col75">
            <input
              type="text"
              id="buildingName"
              className="create-supervisor-acc-input-text"
              value={buildingName}
              onChange={(e) => setBuildingName(e.target.value)}
            />
          </div>
        </div>

        <div className="create-supervisor-acc-row">
          <div className="create-supervisor-acc-col25">
            <label htmlFor="buildingAddress">Building Address:</label>
          </div>
          
          <div className="create-supervisor-acc-col75">
            <input
              type="text"
              id="buildingAddress"
              className="create-supervisor-acc-input-text"
              value={buildingAddress}
              onChange={(e) => setBuildingAddress(e.target.value)}
            />
          </div>
        </div>

        <div className="create-supervisor-acc-row">
          <div className="create-supervisor-acc-col25">
            <label htmlFor="postalCode">Postal Code:</label>
          </div>
          
          <div className="create-supervisor-acc-col75">
            <input
              type="tel"
              id="postalCode"
              className="create-supervisor-acc-input-text"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            />
          </div>
        </div>

        <div className="create-supervisor-acc-row">
          <input
            type="submit"
            value="Create Supervisor Account"
            className="create-supervisor-acc-input-submit"
          />
        </div> 

        {formError && <p className="create-ticket-error">{formError}</p>}
      </form>
    </div>
  );
};

export default CreateSupervisor;