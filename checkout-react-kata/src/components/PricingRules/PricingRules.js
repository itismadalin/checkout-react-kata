import React, { Component } from "react";
import { Link } from "@reach/router";
import Button from "react-bootstrap/Button";
import PricingRule from "../PricingRule/PricingRule";

class PricingRules extends Component {
  constructor () {
      super();
      this.handlePricingRuleChange = this.handlePricingRuleChange.bind(this);
  }      
  state = {
    data: [{"id": 0, "itemId": "A", "unitPrice": 50, "offerQty": 3, "specialPrice": 130},
          {"id": 1, "itemId": "B", "unitPrice": 30, "offerQty": 2, "specialPrice": 45},
          {"id": 2, "itemId": "C", "unitPrice": 20, "offerQty": "", "specialPrice": ""},
          {"id": 3, "itemId": "D", "unitPrice": 15, "offerQty": "", "specialPrice": ""}]
  };


  render() {
    return (
      <div>
          {this.state.data.map((item, index)=> 
            <PricingRule handlePricingRuleChange={this.handlePricingRuleChange} key={index} item={item} />)}
        <div>
          <Button onClick={this.handleAdd}>Add Row</Button>
        </div>
        <div>
            { (this.state.data.length > 0) ? <Button onClick={this.handleRemove}>Remove Last</Button> : null}
        </div>
        <div>
          <Button onClick={this.handleSave}>Save</Button>
        </div>
        <div>
          <Link to="/scanitems">
            <Button variant="success" size="lg">
              Scan Items
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  handleAdd = () => {
    this.state.data.push({"id": this.state.data.length, "itemId": "", "unitPrice": "", "offerQty": "", "specialPrice": ""});
    this.setState(this.state); 
  };

  handleSave = () => {
    // console.log(this.state.data.length);
    // console.log(this.state.data[4]);
  }

  handlePricingRuleChange = (item) => {
    let data = this.state.data;
    data[item.id] = item; 
    this.setState({
        data: data
      });
    // console.log(this.state);
  }

  handleRemove = () => {
      let data = this.state.data;
      data.pop();
      this.setState({
        data: data
      });
      console.log(this.state);
  }

}

export default PricingRules;
