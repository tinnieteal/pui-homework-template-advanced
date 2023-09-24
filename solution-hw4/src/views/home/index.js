import React from "react";
import NavBar from "../components/navbar.js";
import Item from "../components/item.js";

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
  }

  renderItems() {
    return cinnamonRolls.map((item, index) => (
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

  render() {
    return (
      <div>
        <header>
          <NavBar cart={this.props.cart}/>
        </header>

        <main>
          <div className="grid-container">{this.renderItems()}</div>
        </main>
      </div>
    );
  }
}

export default Homepage;
