import React from "react";
import NavBar from "../components/navbar.js";
import Item from "../components/item.js";
import SearchSort from "../components/searchSort.js";

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
          <NavBar cart={this.props.cart} />
        </header>

        <main>
          <div className="body-container">
            <div className="cart-container">
              <div className="cart-title-container">
                <p>Shopping Cart ({this.props.cart.length} items)</p>
                <p>Total: $xx</p>
              </div>
              <div className="grid-container card-outermost-container">
                {/* cinammon roll 1: */}
                <div className="cart-item-container">
                  <div className="image-container">
                    <img
                      src="assets/products/original-cinnamon-roll.jpg"
                      alt="original cinnamon roll"
                    />
                  </div>
                  <p>Original Cinnamon Roll</p>
                  <p>Glazing: Sugar Milk</p>
                  <p>Pack Size: 6</p>
                  <p id="cart-price">$2.49</p>
                  <button className="remove-button">Remove</button>
                </div>

                {/* cinammon roll 2: */}
                <div className="cart-item-container">
                  <div className="image-container">
                    <img
                      src="assets/products/original-cinnamon-roll.jpg"
                      alt="original cinnamon roll"
                    />
                  </div>
                  <p>Original Cinnamon Roll</p>
                  <p>Glazing: Sugar Milk</p>
                  <p>Pack Size: 6</p>
                  <p id="cart-price">$2.49</p>
                  <button className="remove-button">Remove</button>
                </div>

                {/* cinammon roll 3: */}
                <div className="cart-item-container">
                  <div className="image-container">
                    <img
                      src="assets/products/original-cinnamon-roll.jpg"
                      alt="original cinnamon roll"
                    />
                  </div>
                  <p>Original Cinnamon Roll</p>
                  <p>Glazing: Sugar Milk</p>
                  <p>Pack Size: 6</p>
                  <p id="cart-price">$2.49</p>
                  <button className="remove-button">Remove</button>
                </div>

                {/* cinammon roll 4: */}
                <div className="cart-item-container">
                  <div className="image-container">
                    <img
                      src="assets/products/original-cinnamon-roll.jpg"
                      alt="original cinnamon roll"
                    />
                  </div>
                  <p>Original Cinnamon Roll</p>
                  <p>Glazing: Sugar Milk</p>
                  <p>Pack Size: 6</p>
                  <p id="cart-price">$2.49</p>
                  <button className="remove-button">Remove</button>
                </div>
              </div>
            </div>

            <SearchSort />
            {/* // cinnamon rolls */}
            <div className="grid-container">{this.renderItems()}</div>
          </div>
        </main>
      </div>
    );
  }
}

export default Homepage;
