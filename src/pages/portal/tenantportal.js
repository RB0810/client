<<<<<<< HEAD
import supabase from "../../config/supabaseClient";
import { useEffect, useState } from "react";

// components
import TicketCard from "../../components/TicketCard";

export default function TenantPortal() {
  const [serviceTickets, setServiceTickets] = useState([]);
  const [fetchError, setFetchError] = useState([]);

  useEffect(() => {
    const getTickets = async () => {
      let { data, error } = await supabase.from("Service Request").select("*");
      if (error) {
        setFetchError(error.message);
        setServiceTickets(null);
        console.log(error);
      }

      if (data) {
        setServiceTickets(data);
        setFetchError(null);
      }
    };

    getTickets();
  }, []);

  return (
    <div className="page tenantportal">
      <div className="tenant-portal-header">
        <p>Ticket ID</p>
        <p>Request</p>
        <p>Date</p>
        <p>Property</p>
        <p>Status</p>
      </div>
      {fetchError && <p>{fetchError}</p>}
      {serviceTickets && (
        <div className="service-tickets">
          <div className="service-ticket-row">
            {serviceTickets.map((ticket) => (
              <TicketCard key={ticket.ServiceRequestID} ticket={ticket} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
=======
import { useEffect, useState } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import TicketManager from "../../managers/ticketmanager";

// components
import TicketCard from "../../components/TicketCard";

export default function TenantPortal() {
  const ticketManager = new TicketManager();
  let { PARCStatus, TenantID } = useParams();
  const [serviceTickets, setServiceTickets] = useState([]);
  const [fetchError, setFetchError] = useState([]);

  useEffect(() => {
    const getTickets = async () => {
      let data = await ticketManager.getTicketsByPARCStatusForTenantID(
        PARCStatus.toUpperCase(),
        parseInt(TenantID)
      );

      if (data != false) {
        console.log(data);
        setServiceTickets(data);
        setFetchError(null);
      } else if (data.length == 0) {
        console.log(data);
        setFetchError("Empty!");
        setServiceTickets();
      } else {
        setFetchError("Error!");
        setServiceTickets();
      }
    };
    getTickets();
  }, []);

  return (
    <div className="page tenantportal">
      <div className="tenant-portal-header">
        <p>Ticket ID</p>
        <p>SubmittedBy</p>
        <p>AssignedTo</p>
        <p>SubmittedDate</p>
        <p>Property</p>
        <p>Status</p>
      </div>
      {fetchError && <p>{fetchError}</p>}
      {serviceTickets && (
        <div className="service-tickets">
          <div className="service-ticket-row">
            {serviceTickets.map((ticket) => (
              <TicketCard
                key={ticket.ServiceRequestID}
                ticket={ticket}
                user={TenantID}
                userRole={"tenant"}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
>>>>>>> a68d74b2e817c7184e70c9d65d952e983e357804
