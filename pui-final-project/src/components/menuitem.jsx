import React, { useState } from "react";

class Menuitem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onHover: false,
    };
  }

  // const [onHover, setOnHover] = useState(false);

  // const coffee_filling = document.querySelector(".filling");
  // const buttons = document.querySelectorAll("button");
  // let current_element = null;

  // const changeCoffeeType = (selected) => {
  //   if (current_element) {
  //     current_element.classList.remove("selected");
  //     coffee_filling.classList.remove(current_element.id);
  //   }
  //   current_element = selected;
  //   coffee_filling.classList.add(current_element.id);
  //   current_element.classList.add("selected");
  // };

  // const setActiveType = (element) => {
  //   element.toggleClass("selected");
  // };

  // [...buttons].forEach((button) => {
  //   button.addEventListener("click", () => {
  //     changeCoffeeType(button);
  //   });
  // });

  render() {
    const isFocused = this.state.onHover || this.props.isSelected;
    return (
      <div
        className="coffee-rack"
        onMouseEnter={() => this.setState({ onHover: true })}
        onMouseLeave={() => this.setState({ onHover: false })}
        onClick={() => {
          this.props.select(this.props.index);
        }}
      >
        <div className="div">
          <div className={`text-wrapper ${isFocused ? "focused" : ""}`}>
            {this.props.name}
          </div>
          <div
            className={`text-wrapper secondary ${isFocused ? "focused" : ""}`}
          >
            {this.props.price}
          </div>
        </div>
        <svg
          className={`menu-bar ${isFocused ? "focused" : ""}`}
          viewBox="0 0 473 6"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="3"
            y1="3"
            x2="470"
            y2="3"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </svg>
      </div>
    );
  }
}

export default Menuitem;
