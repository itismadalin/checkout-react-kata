import React from 'react';
import "./Header.css";
import { Link } from "@reach/router";
import Button from 'react-bootstrap/Button';

const Header = () => {
  return (
    <div>
          <div className="Header">
            <Link to="/">
            <Button className="HeaderButtons" variant="light">Start</Button>
            </Link>
            <Link to="/pricingrules">
            <Button className="HeaderButtons" variant="light">Pricing Rules</Button>
            </Link>
            <Link to="/scanitems">
            <Button className="HeaderButtons" variant="light">Scan Items</Button>
            </Link>
            <Link to="/payment">
            <Button className="HeaderButtons" variant="light">Payment</Button>
            </Link>
          </div>
    </div>
  );
};

export default Header;