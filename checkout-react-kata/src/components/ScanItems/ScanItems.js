import React, { Component } from "react";
import { Link } from "@reach/router";

class ScanItems extends Component {
  
  render() {
    console.log(this.props);
    return (
      <div>
        <label>Item:</label>
        <input type="text"></input>
        <br />
        <br />
        <Link to="/total">
        <input type="submit" value="Submit"></input>
        </Link>
      </div>
    );
  }
}

export default ScanItems;
