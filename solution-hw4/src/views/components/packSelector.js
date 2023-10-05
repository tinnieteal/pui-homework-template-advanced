import React from "react";

const packSizeOptions = [1, 3, 6, 12];

class PackSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
    };
  }

  handleChange(index) {
    this.setState({ selected: index });
    this.props.onChange(packSizeOptions[index]);
  }

  renderOptions(item_id) {
    return packSizeOptions.map((value, index) => {
      const unid = "pack-size-" + item_id + "-" + index;
      return (
        <div key={unid}>
          <input
            type="radio"
            name={unid}
            id={unid}
            value={value}
            onChange={() => this.handleChange(index)}
            checked={this.state.selected == index}
          ></input>
          <label htmlFor={unid}>{value}</label>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="row-content">
        <p className="bodytext">Pack size:</p>
        <fieldset>
          <div className="content-right radio-selector">
            {this.renderOptions(this.props.item_id)}
          </div>
        </fieldset>
      </div>
    );
  }
}

export default PackSelector;
