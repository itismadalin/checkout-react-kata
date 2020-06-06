import React from "react";
import { Link } from "@reach/router";
import "./Payment.css";
import Button from "react-bootstrap/Button";

const Payment = () => {
  return (
    <div className="Payment">
      <div>
        <p>Thank you for your payment.</p>
        <p>Please press the button below to go back to the homepage...</p>
        <Link to="/">
          <Button variant="info">Done</Button>
        </Link>
      </div>
    </div>
  );
};

export default Payment;
