import React from "react";
import "./App.css";
import Homepage from "./views/home/index.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
    };
    this.addToCart = this.addToCart.bind(this)
  }

  addToCart(item) {
    console.log(item);
    this.setState( prevState => ( {cart: [...prevState.cart, item]} ) );
  }

  render() {
    return <Homepage addToCart={this.addToCart} cart={this.state.cart}/>;
  }
}

export default App;
