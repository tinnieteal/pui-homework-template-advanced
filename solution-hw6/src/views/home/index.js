import React from "react";
import NavBar from "../components/navbar.js";
import Item from "../components/item.js";
import SearchSort from "../components/searchSort.js";
import ShoppingCart from "../components/shoppingCart.js";

const cinnamonRolls = [
  {
    title: "Original cinnamon roll",
    img: "assets/products/original-cinnamon-roll.jpg",
    basePrice: 2.49,
  },
  {
    title: "Apple cinnamon roll",
    img: "assets/products/apple-cinnamon-roll.jpg",
    basePrice: 3.49,
  },
  {
    title: "Raisin cinnamon roll",
    img: "assets/products/raisin-cinnamon-roll.jpg",
    basePrice: 2.99,
  },
  {
    title: "Walnut cinnamon roll",
    img: "assets/products/walnut-cinnamon-roll.jpg",
    basePrice: 3.49,
  },
  {
    title: "Double-chocolate cinnamon roll",
    img: "assets/products/double-chocolate-cinnamon-roll.jpg",
    basePrice: 3.99,
  },
  {
    title: "Strawberry cinnamon roll",
    img: "assets/products/strawberry-cinnamon-roll.jpg",
    basePrice: 3.99,
  },
];

// create 6 cinammon rolls using JSX

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderingRolls: [...cinnamonRolls],
      query: "",
      cartClicked: false,
    };
    this.updateOrder = this.updateOrder.bind(this);
    this.updateQuery = this.updateQuery.bind(this);
    this.updateCartClicked = this.updateCartClicked.bind(this);
  }
  renderItems() {
    return this.state.renderingRolls.map((item, index) => (
      <Item
        key={index}
        item_id={index}
        title={item.title}
        img={item.img}
        basePrice={item.basePrice}
        addToCart={this.props.addToCart}
      />
    ));
  }

  updateOrder(command) {
    let newRenderingRolls = [...this.state.renderingRolls]; // copy the array
    if (command == 0) {
      // sort renderingRolls state by base price
      newRenderingRolls.sort((a, b) => a.basePrice - b.basePrice);
      this.setState({
        renderingRolls: newRenderingRolls,
      });
    } else if (command == 1) {
      // sort cinnamonrolls by title
      newRenderingRolls.sort((a, b) => a.title.localeCompare(b.title));
      this.setState({
        renderingRolls: newRenderingRolls,
      });
    }
  }

  updateQuery(query) {
    this.setState({ query: query });
    if (query == "") {
      this.setState({ renderingRolls: [...cinnamonRolls] });
    } else {
      let newRenderingRolls = [...cinnamonRolls];
      newRenderingRolls = newRenderingRolls.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      this.setState({ renderingRolls: newRenderingRolls });
    }
  }

  updateCartClicked() {
    console.log("updateCartClicked");
    this.setState({ cartClicked: !this.state.cartClicked });
  }

  render() {
    return (
      <div>
        <header>
          <NavBar cartClicked={this.updateCartClicked} cart={this.props.cart} />
        </header>

        <main>
          <div className="body-container">
            {/* conditionally render shopping cart component based on cartClicked state */}
            {this.state.cartClicked && (
              <ShoppingCart
                removeFromCart={this.props.removeFromCart}
                cart={this.props.cart}
              />
            )}
            <SearchSort
              updateQuery={this.updateQuery}
              updateOrder={this.updateOrder}
            />
            {/* if no matching */}
            {this.state.renderingRolls.length == 0 ? (
              <p>No Match!</p>
            ) : (
              <div className="grid-container">{this.renderItems()}</div>
            )}
          </div>
        </main>
      </div>
    );
  }
}

export default Homepage;
