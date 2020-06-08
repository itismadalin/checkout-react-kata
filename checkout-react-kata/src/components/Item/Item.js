import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class Item extends Component {
  render() {
    return (
      <div>
        <Button>{this.props.item.itemId}</Button>
      </div>
    );
  }
}

export default Item;
