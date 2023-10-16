import React from "react";

// glazing option array
const glazingOptions = [
  "Keep original",
  "Sugar milk",
  "Vanilla milk",
  "Double chocolate",
];
const glazingValues = [0, 0, 0.5, 1.5];

class GlazingSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
    };
  }

  handleChange(index) {
    this.setState({ selected: index });
    this.props.onChange(index);
  }

  renderOptions() {
    return glazingOptions.map((value, index) => {
      return (
        <option value={index} key={index}>
          {value}
        </option>
      );
    });
  }

  render() {
    return (
      <div className="row-content">
        <p className="bodytext">Glazing:</p>
        <div className="content-right glazing-selector">
          <select
            id="glazing-dropdown"
            className="dropdown"
            name="glazing"
            onChange={(e) => this.handleChange(e.target.value)}
          >
            {this.renderOptions()}
          </select>
        </div>
      </div>
    );
  }
}

export default GlazingSelector;
export { glazingOptions, glazingValues };
