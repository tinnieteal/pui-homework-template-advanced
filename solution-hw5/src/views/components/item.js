import React from "react";
import PackSelector from "./packSelector.js";
import GlazingSelector, {
  glazingOptions,
  glazingValues,
} from "./glazingSelector.js";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      glazingOptionIndex: 0,
      packSize: 1,
    };
  }

  calcPrice() {
    return (
      (this.props.basePrice + glazingValues[this.state.glazingOptionIndex]) *
      this.state.packSize
    );
  }

  addToCart() {
    // console.log(this);
    const item = {
      // title: "hello"
      title: this.props.title,
      packSize: this.state.packSize,
      glazing: glazingOptions[this.state.glazingOptionIndex],
      price: this.calcPrice(),
    };
    this.props.addToCart(item);
  }

  render() {
    // console.log(this.props);
    return (
      <div className="element-container">
        <div className="image-container">
          <img src={this.props.img} alt="original cinnamon roll" />
        </div>
        <h2 className="element-title">{this.props.title}</h2>

        <GlazingSelector
          key={this.props.item_id + "-glazing"}
          item_id={this.props.item_id}
          onChange={(glazingOptionIndex) =>
            this.setState({ glazingOptionIndex })
          }
        />

        <PackSelector
          key={this.props.item_id + "-pack"}
          item_id={this.props.item_id}
          onChange={(packSize) => this.setState({ packSize })}
        />

        <div className="row-content">
          <div className="rollprice">
            <p className="price-text"> $ {this.calcPrice().toFixed(2)} </p>
          </div>
          <div className="content-right add-to-cart">
            <button
              className="button-add-to-cart link"
              onClick={() => this.addToCart()}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
