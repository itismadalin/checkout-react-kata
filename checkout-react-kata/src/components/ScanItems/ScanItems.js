import React, { Component } from "react";
import { Link } from "@reach/router";
import Item from "../Item/Item";

class ScanItems extends Component {
  state = {};

  constructor(props) {
    super();
    let pricingRules = props.location.state.pricingRules;
    this.state = {
      pricingRules: pricingRules,
      basket: [],
      total: 0,
    };
  }

  render() {
    return (
      <div>
        {this.state.pricingRules.map((item, index) => (
          <Item key={index} item={item} />
        ))}

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
