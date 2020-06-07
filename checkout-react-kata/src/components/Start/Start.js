import React from "react";
import "./Start.css";
import { Link } from "@reach/router";
import Button from 'react-bootstrap/Button';

const Start = () => {
  return (
    <div className="button">
      <Link to="/pricingrules">
      <Button variant="success" size="lg">Start</Button>
      </Link>
    </div>
  );
};

export default Start;
