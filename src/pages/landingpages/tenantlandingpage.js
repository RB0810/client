<<<<<<< HEAD
import React from 'react';
import '../../styles/tenantlandingpage.css';
import { useNavigate, useParams } from 'react-router-dom';

export default function TenantLandingPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  var status = "";

  const handleButtonClickPending = () => {
    status = "pending";
    navigate(`/tenantportal/${id}/${status}`);
  };

  const handleButtonClickActive = () => {
    status = "active";
    navigate(`/tenantportal/${id}/${status}`);
  };

  const handleButtonClickClosed = () => {
    status = "closed";
    navigate(`/tenantportal/${id}/${status}`);
  };
  const handleButtonClickNew = () => {
    navigate(`/createticket/${id}`);
  };

  return (
    <div>
      <div className="centered-card">
        <button className="card" onClick={handleButtonClickNew}>
          <img src="/addticket.png" alt="Card" className="card-image" />
          <div>
            <button>Create Ticket</button>
          </div>
        </button>
        
      </div>
      <div className="card-container">
        <button className="card" onClick={handleButtonClickPending}>
          <img src="/pendingticket.png" alt="Card" className="card-image" />
          <div>
            <button>Pending Tickets</button>
          </div>
        </button>
        <button className="card" onClick={handleButtonClickActive}>
          <img src="/activeticket.png" alt="Card" className="card-image" />
          <div>
            <button>Active Tickets</button>
          </div>
        </button>
        <button className="card" onClick={handleButtonClickClosed}>
          <img src="/closedticket.png" alt="Card" className="card-image" />
          <div>
            <button>Closed Tickets</button>
          </div>
        </button>
      </div>
    </div>
  );
}
=======
import React from 'react';
import '../../styles/tenantlandingpage.css';
import { useNavigate, useParams } from 'react-router-dom';

export default function TenantLandingPage() {
  const navigate = useNavigate();
  const { TenantID } = useParams();
  var status = "";

  const handleButtonClickPending = () => {
    status = "pending";
    navigate(`/tenantportal/tickets/${TenantID}/${status}`);
  };

  const handleButtonClickActive = () => {
    status = "active";
    navigate(`/tenantportal/tickets/${TenantID}/${status}`);
  };

  const handleButtonClickClosed = () => {
    status = "closed";
    navigate(`/tenantportal/tickets/${TenantID}/${status}`);
  };
  const handleButtonClickNew = () => {
    navigate(`/tenantportal/createticket/${TenantID}`);
  };

  return (
    <div>
      <div className="centered-card">
        <button className="card" onClick={handleButtonClickNew}>
          <img src="/addticket.png" alt="Card" className="card-image" />
          <div>
            <button>Create Ticket</button>
          </div>
        </button>
        
      </div>
      <div className="card-container">
        <button className="card" onClick={handleButtonClickPending}>
          <img src="/pendingticket.png" alt="Card" className="card-image" />
          <div>
            <button>Pending Tickets</button>
          </div>
        </button>
        <button className="card" onClick={handleButtonClickActive}>
          <img src="/activeticket.png" alt="Card" className="card-image" />
          <div>
            <button>Active Tickets</button>
          </div>
        </button>
        <button className="card" onClick={handleButtonClickClosed}>
          <img src="/closedticket.png" alt="Card" className="card-image" />
          <div>
            <button>Closed Tickets</button>
          </div>
        </button>
      </div>
    </div>
  );
}
>>>>>>> a68d74b2e817c7184e70c9d65d952e983e357804
