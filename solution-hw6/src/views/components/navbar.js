import React from "react";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  calTotalPrice() {
    let totalPrice = 0.0;
    for (let i = 0; i < this.props.cart.length; i++) {
      totalPrice += this.props.cart[i].price;
    }
    return totalPrice;
  }

  render() {
    return (
      <div className="nav-row-container">
        <div className="logo-container">
          <img src="assets/logo/logo-01.svg" alt="logo" />
        </div>
        <div className="nav-column-container">
          <div className="navbar">
            <ul>
              <button type="submit" className="navmenu-link link">
                PRODUCTS
              </button>
              <li>
                <button
                  type="submit"
                  className="navmenu-link link"
                  onClick={() => this.props.cartClicked()}
                >
                  CART
                </button>
                <div className="tooltip-container"></div>
              </li>
            </ul>
          </div>
          {/* text under add to cart */}
          <div className="nav-menu">
            <p className="cart-text" id="total-item">
              {this.props.cart.length} item
            </p>
            <p className="cart-text" id="final-price">
              Total: $ {this.calTotalPrice().toFixed(2)}
            </p>
          </div>
          <p className="web-title">Our hand-made cinnamon rolls</p>
        </div>
      </div>
    );
  }
}

export default NavBar;
