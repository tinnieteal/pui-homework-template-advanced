import React from "react";
import "./App.css";
import Homepage from "./views/home/index.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
    };
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  addToCart(item) {
    console.log(item);
    this.setState((prevState) => ({ cart: [...prevState.cart, item] }));
    console.log(this.state.cart);
  }

  removeFromCart(index) {
    let cart = [...this.state.cart];
    cart.splice(index, 1);
    this.setState({ cart });
  }

  render() {
    return (
      <Homepage
        addToCart={this.addToCart}
        cart={this.state.cart}
        removeFromCart={this.removeFromCart}
      />
    );
  }
}

export default App;
