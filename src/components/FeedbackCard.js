import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Rating } from "@mui/material";
import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import TicketManager from "../managers/ticketmanager";

const FeedbackCard = (ticket) => {
  let ticketManager = new TicketManager();
  let navigate = useNavigate();
  const { TenantID, ServiceRequestID } = useParams();
  const [comments, setComments] = useState("");
  const [rating, setRating] = useState(0);

  const handleSuccessFeedback = async (e) => {
    e.preventDefault();

    try {
      // Update in Database
      await ticketManager.updateFeedbackRating(
        parseInt(ticket.ticket.ServiceRequestID),
        rating
      );
      await ticketManager.updateFeedbackComments(
        parseInt(ticket.ticket.ServiceRequestID),
        comments
      );

      // Close ticket
      await ticketManager.closeTicket(parseInt(ServiceRequestID));

      console.log("Feedback submitted!");
      navigate(`/tenantportal/tickets/${TenantID}/pending`);
    } catch (error) {
      window.alert("Error submitting feedback: " + error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSuccessFeedback}>
        <label>
          <Typography component="legend">Rating</Typography>
          <Rating
            name="simple-controlled"
            value={rating}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
          />
        </label>

        <label>
          Comments:
          <textarea
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          ></textarea>
        </label>

        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackCard;
