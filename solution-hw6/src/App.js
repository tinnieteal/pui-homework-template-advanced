import React from "react";
import "./App.css";
import Homepage from "./views/home/index.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: this.loadCart(),
    };
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  loadCart() {
    let cart = [];
    console.log(localStorage.length);
    for (let i = 0; i < localStorage.length; i++) {
      cart.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
    // make sure the order of the items in the cart is the same as the order of the items in the localStorage
    cart.sort((a, b) => a.id - b.id);
    return cart;
  }

  addToCart(item) {
    console.log(item);
    this.setState((prevState) => ({ cart: [...prevState.cart, item] }));
    localStorage.setItem(item.id, JSON.stringify(item));

    // Set a timeout to remove the tooltip after 3 seconds
    setTimeout(() => {
      // fade out the tooltip;
      const tooltip = document.querySelector(".tooltip-container");
      tooltip.style.opacity = "0";
      // after fading out, hide the tooltip
      setTimeout(() => {
        tooltip.style.display = "none";
        // reset the opacity for the next use
        tooltip.style.opacity = "1";
      }, 300);
    }, 3000);

    const tooltip = document.querySelector(".tooltip-container");
    if (tooltip === null) {
      return <div></div>;
    }
    tooltip.style.opacity = "1";
    tooltip.style.display = "block";

    tooltip.innerHTML = `<span class="tooltip-text" id="bottom">
        <p id="tooltip-title"> Added to cart: </p>
        <p id="tooltip-item"> ${item.title} </p>
        <p> ${item.glazing} glazing</p>
        <p> Pack of ${item.packSize}</p>
        <p> Price: $ ${item.price.toFixed(2)}</p>
      </span>
    `;
  }

  removeFromCart(index) {
    let cart = [...this.state.cart];
    localStorage.removeItem(cart[index].id);
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
