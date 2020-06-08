import React, { Component } from "react";

class PricingRule extends Component {
  render() {
    return (
      <div>
        <label>
          Item
          <input
            onChange={this.handleItemIdChange}
            type="text"
            value={this.props.item.itemId}
            className="form-control"
          />
        </label>
        <label>
          Unit Price
          <input
            onChange={this.handleUnitPriceChange}
            type="text"
            value={this.props.item.unitPrice}
            className="form-control"
          />
        </label>
        <label>
          Offer Qty
          <input
            onChange={this.handleOfferQtyChange}
            type="text"
            value={this.props.item.offerQty}
            className="form-control"
          />
        </label>
        <label>
          Special Price
          <input
            onChange={this.handleSpecialPriceChange}
            type="text"
            value={this.props.item.specialPrice}
            className="form-control"
          />
        </label>
      </div>
    );
  }

  handleItemIdChange = (event) => {
    let item = this.props.item;
    item.itemId = event.target.value;
    this.props.handlePricingRuleChange(item);
  };

  handleUnitPriceChange = (event) => {
    let item = this.props.item;
    item.unitPrice = event.target.value;
    this.props.handlePricingRuleChange(item);
  };

  handleOfferQtyChange = (event) => {
    let item = this.props.item;
    item.offerQty = event.target.value;
    this.props.handlePricingRuleChange(item);
  };

  handleSpecialPriceChange = (event) => {
    let item = this.props.item;
    item.specialPrice = event.target.value;
    this.props.handlePricingRuleChange(item);
  };
}

export default PricingRule;
