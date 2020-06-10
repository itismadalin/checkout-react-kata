import React, { Component } from "react";
import { Link } from "@reach/router";
import Button from "react-bootstrap/Button";
import PricingRule from "../PricingRule/PricingRule";
import "../PricingRules/PricingRules.css";

class PricingRules extends Component {
  constructor() {
    super();
    this.handlePricingRuleChange = this.handlePricingRuleChange.bind(this);
  }
  /*  Initial state */
  state = {
    data: [
      { id: 0, itemId: "A", unitPrice: 50, offerQty: 3, offerPrice: 130 },
      { id: 1, itemId: "B", unitPrice: 30, offerQty: 2, offerPrice: 45 },
      { id: 2, itemId: "C", unitPrice: 20, offerQty: 0, offerPrice: 0 },
      { id: 3, itemId: "D", unitPrice: 15, offerQty: 0, offerPrice: 0 },
    ],
  };

  render() {
    return (
      <div>
        <div className="PricingRulesTable">
          {this.state.data.map((item, index) => (
            <PricingRule
              handlePricingRuleChange={this.handlePricingRuleChange}
              key={index}
              item={item}
            />
          ))}
          <div>
            <div>
              <Button onClick={this.handleAdd} className="float-left">
                Add Row
              </Button>
            </div>
            <div>
              {this.state.data.length > 0 ? (
                <Button
                  onClick={this.handleRemove}
                  className="btn-danger float-right"
                >
                  Remove Last
                </Button>
              ) : null}
            </div>
            <br />
            <br />
          </div>
        </div>
        <div className="Button">
          <Link to="/scanitems" state={{ pricingRules: this.state.data }}>
            <Button variant="success" size="lg">
              Scan Items
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  /* handleAdd() function to set a new state for adding a new row */
  handleAdd = () => {
    this.state.data.push({
      id: this.state.data.length,
      itemId: "",
      unitPrice: 0,
      offerQty: 0,
      offerPrice: 0,
    });
    this.setState(this.state);
  };

  /* handlePricingRuleChange() function to handle the changes
  made to the PricingRule component */
  handlePricingRuleChange = (item) => {
    let data = this.state.data;
    data[item.id] = item;
    this.setState({
      data: data,
    });
  };

  /* handleRemove() function to set a new state for removing last row */
  handleRemove = () => {
    let data = this.state.data;
    data.pop();
    this.setState({
      data: data,
    });
  };
}

export default PricingRules;
