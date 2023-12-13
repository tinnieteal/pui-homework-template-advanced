import React, { useState } from "react";

class Menuitem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onHover: false,
    };
  }

  // {this.props.price ? (
  //   <div
  //     className={`text-wrapper secondary ${isFocused ? "focused" : ""}`}
  //   >
  //     {this.props.price}
  //   </div>
  // ) : null}

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
