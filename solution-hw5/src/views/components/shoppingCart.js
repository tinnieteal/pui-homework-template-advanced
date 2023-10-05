import React, { Component } from "react";

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  calTotalPrice() {
    let totalPrice = 0.0;
    for (let i = 0; i < this.props.cart.length; i++) {
      totalPrice += this.props.cart[i].price;
    }
    return totalPrice.toFixed(2);
  }

  removeFromCart(index) {
    this.props.removeFromCart(index);
  }

  renderCartItems() {
    return this.props.cart.map((item, index) => {
      return (
        <div className="cart-item-container">
          <div className="image-container">
            <img src={item.img} alt={item.title} />
          </div>
          <p>{item.title}</p>
          <p>Glazing: {item.glazing}</p>
          <p>Pack Size: {item.packSize}</p>
          <p id="cart-price">${item.price.toFixed(2)}</p>
          <button
            className="remove-button"
            onClick={() => this.removeFromCart(index)}
          >
            Remove
          </button>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="cart-container">
        {/* Render message when condition is true, otherwise items in the cart */}
        {this.props.cart.length === 0 ? (
          <p>The cart is empty!</p>
        ) : (
          <div>
            <div className="cart-title-container">
              <p>Shopping Cart {this.props.cart.length}</p>
              <p>Total: ${this.calTotalPrice()}</p>
            </div>
            <div className="grid-container card-outermost-container">
              {this.renderCartItems()}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ShoppingCart;
