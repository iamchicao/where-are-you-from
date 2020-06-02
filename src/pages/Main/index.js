import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Creators as CountriesActions } from "../../store/ducks/countries";

import {
  Container,
  TopBar,
  Search,
  Select,
  Content,
  Country,
  Img,
  Info,
  Name,
  Data,
} from './style';

class Main extends Component {
  static propTypes = {
    getCountries: PropTypes.func.isRequired,
    countries: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          flag: PropTypes.string,
          population: PropTypes.number,
          region: PropTypes.string,
          capital: PropTypes.string,
        })
      ),
    }).isRequired,
  };

  state = {
    name: "",
    option: "",
  };

  componentDidMount() {
    this.fetchCountries();
  }

  fetchCountries = (name = "", filter = "") => {
    const { getCountries } = this.props;
    getCountries(name, filter);
  };

  changeName = (e) => {
    const { value } = e.target;
    this.setState({ name: value, option: "" });
    this.fetchCountries(value, "");
  };

  changeFilter = (e) => {
    const { value } = e.target;
    this.setState({ option: value, name: "" });
    this.fetchCountries("", value);
  };

  render() {
    const { countries } = this.props;
    const { name, option } = this.state;
    return (
      <Container>
        <TopBar>
          <Search>
            <input
              placeholder="Search for a country..."
              onChange={this.changeName}
              value={name}
            />
          </Search>
          <Select onChange={this.changeFilter} value={option}>
            <option value="">No filter</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </Select>
        </TopBar>
        <Content>
          {countries.data.map((country) => (
            <Country key={country.name}>
              <Img src={country.flag} alt="img" />
              <Info>
                <Name>{country.name}</Name>
                <Data>
                  Population:<p>{country.population}</p>
                </Data>
                <Data>
                  Region:<p>{country.region}</p>
                </Data>

                <Data>
                  Capital:<p>{country.capital}</p>
                </Data>
              </Info>
            </Country>
          ))}
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  countries: state.countries,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CountriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
