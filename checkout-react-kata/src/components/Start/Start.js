import React from "react";
import "./Start.css";
import { Link } from "@reach/router";

const Start = () => {
  return (
    <div className="button">
      <Link to="/pricingrules">
        <button>START</button>
      </Link>
    </div>
  );
};

export default Start;
