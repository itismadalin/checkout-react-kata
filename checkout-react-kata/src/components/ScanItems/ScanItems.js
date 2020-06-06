import React, { Component } from "react";

class ScanItems extends Component {
  render() {
    return (
      <div>
        <label>Item:</label>
        <input type="text"></input>
        <br />
        <br />
        <input type="submit" value="Submit"></input>
      </div>
    );
  }
}

export default ScanItems;
