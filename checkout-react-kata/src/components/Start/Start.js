import React from "react";
import "./Start.css";
import { Link } from "@reach/router";
import Button from 'react-bootstrap/Button';

const Start = () => {
  return (
    <div className="Button">
      <Link to="/pricingrules">
      <Button variant="success">Start</Button>
      </Link>
    </div>
  );
};

export default Start;
