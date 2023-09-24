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

	renderCartItems() {
		if (this.props.cart.length == 0 ) {	
			return (<div></div>);
		}

		const item = this.props.cart[this.props.cart.length - 1];

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

		return (
			<span className="tooltip-text" id="bottom">
				<p id="tooltip-title"> Added to cart: </p>
				<p id="tooltip-item"> {item.title} </p>
				<p> {item.glazing} glazing</p>
				<p> Pack of {item.packSize}</p>
				<p> Price: $ {item.price}</p>
			</span>
		);
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
                <span className="navmenu-link hover-text">CART</span>
                <div className="tooltip-container">
									{this.renderCartItems()}
								</div>
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
