import React, { Component } from "react";
import { Link } from "@reach/router";
import Button from "react-bootstrap/Button";
import "./ScanItems.css";

class ScanItems extends Component {
  constructor(props) {
    super();
    let pricingRules = props.location.state.pricingRules;

    let basket = [];
    for (let i = 0; i < pricingRules.length; i++) {
      basket[i] = 0;
    }

    this.state = {
      pricingRules: pricingRules,
      basket: basket,
      total: 0,
      runningTotal: 0,
      showFinalTotal: false,
    };
  }

  render() {
    return (
      <div className="Items">
        <div className="ItemsButton">
          {this.state.pricingRules.map((item, index) => (
            <Button
              key={item.id}
              onClick={() => this.handleOnClick(item.id)}
              size="lg"
            >
              {item.itemId}
            </Button>
          ))}
        </div>
        <br />
        <br />
        <div className="Total">
          <h2 hidden={this.state.showFinalTotal}>
            Running Total: {this.state.runningTotal}
          </h2>
          <h2 hidden={!this.state.showFinalTotal}>
            Final Total: {this.state.total}
          </h2>
        </div>
        <Button
          hidden={this.state.showFinalTotal}
          onClick={this.handleOnClickDone}
        >
          DONE
        </Button>
        <div className="PayButton">
          <Link to="/payment" state={{ total: this.state.total }}>
            <Button
              hidden={!this.state.showFinalTotal}
              variant="success"
              size="lg"
            >
              PAY
            </Button>
          </Link>
        </div>
      </div>
    );
  }

    /* handleOnClick() function to set a new state when hitting each item button */
  handleOnClick = (id) => {
    let basket = this.state.basket;
    basket[id]++;
    this.setState({
      basket: basket,
    });
    this.updateRunningTotal(id);
  };

    /* handleOnClickDone() function to call the updateFinalTotal() function and update the total */
  handleOnClickDone = () => {
    this.updateFinalTotal();
  };

  /* updateRunningTotal() function to set a new state 
  after calculating it from previous total plus the newly added item */
  updateRunningTotal = (index) => {
    let runningTotal =
      this.state.runningTotal + this.state.pricingRules[index].unitPrice;
    this.setState({
      runningTotal: runningTotal,
    });
  };

  /* updateFinalTotal() function to set a new state for the final total
  after the offers have been applied */
  updateFinalTotal = () => {
    let total = 0;
     /* loop through the basket to apply offers to each individual product */
    for (let index = 0; index < this.state.basket.length; index++) {
      let pricingRule = this.state.pricingRules[index];
      let basketItem = this.state.basket[index];
      if (pricingRule.offerQty === 0 || basketItem < pricingRule.offerQty) {
        total += basketItem * pricingRule.unitPrice;
      } else {
        total +=
          Math.floor(basketItem / pricingRule.offerQty) *
            pricingRule.offerPrice +
          (basketItem % pricingRule.offerQty) * pricingRule.unitPrice;
      }
    }
    this.setState({
      total: total,
      showFinalTotal: true,
    });
  };
}

export default ScanItems;
