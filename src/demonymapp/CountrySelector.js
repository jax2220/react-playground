import React, { Component } from "react";

export default class CountrySelector extends Component {
  render() {
    const options = this.props.countries.map((country, i) => (
      <option value={country.name} key={i}></option>
    ));

    changeSelection(value) {
    if(value === "None") {
      this.props.changeHandler(null);
    } else {
      // find the country selected
      const country = this.props.countries.find(country => country.name === value);
      this.props.changeHandler(country);
    }
  }

    return (
      <div>
        <form>
          <label htmlFor="country">select a country</label>
          <select id="country" name="country">
            <option value="none">Select one...</option>
            {options}
          </select>
        </form>
      </div>
    );
  }
}

CountrySelector.defaultProps = {
  countries: []
};
