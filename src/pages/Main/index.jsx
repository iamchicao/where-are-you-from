import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Select from 'react-select';

import { Creators as CountriesActions } from '../../store/ducks/countries';
import colors from '../../styles/colors';

import {
  Container,
  TopBar,
  Search,
  SelectDiv,
  Content,
  Country,
  Img,
  Info,
  Name,
  Data,
} from './styles';

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
      darkMode: PropTypes.bool.isRequired,
    }).isRequired,
  };

  state = {
    name: '',
    option: { value: '', label: 'No Filter' },
  };

  componentDidMount() {
    this.fetchCountries();
  }

  fetchCountries = (name = '', filter = '') => {
    const { getCountries } = this.props;
    getCountries(name, filter);
  };

  changeName = e => {
    const { value } = e.target;
    this.setState({ name: value, option: { value: '', label: 'No Filter' } });
    this.fetchCountries(value, '');
  };

  changeFilter = e => {
    this.setState({ option: e, name: '' });
    this.fetchCountries('', e.value);
  };

  render() {
    const { countries } = this.props;
    const { name, option } = this.state;
    const options = [
      { value: '', label: 'No Filter' },
      { value: 'Africa', label: 'Africa' },
      { value: 'Americas', label: 'Americas' },
      { value: 'Asia', label: 'Asia' },
      { value: 'Europe', label: 'Europe' },
      { value: 'Oceania', label: 'Oceania' },
    ];
    const selectStyles = {
      control: styles => ({
        ...styles,
        backgroundColor: countries.darkMode ? colors.darkBlue : colors.white,
        color: countries.darkMode ? colors.white : colors.veryDarkBlueTxt,
        boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.17)',
        border: 'none',
      }),
      option: styles => ({
        ...styles,
        backgroundColor: countries.darkMode ? colors.darkBlue : colors.white,
        color: countries.darkMode ? colors.white : colors.veryDarkBlueTxt,
      }),
      singleValue: styles => ({
        ...styles,
        backgroundColor: countries.darkMode ? colors.darkBlue : colors.white,
        color: countries.darkMode ? colors.white : colors.veryDarkBlueTxt,
      }),
    };
    return (
      <Container darkMode={countries.darkMode}>
        <TopBar>
          <Search darkMode={countries.darkMode}>
            <input
              placeholder="Search for a country..."
              onChange={this.changeName}
              value={name}
            />
          </Search>
          <SelectDiv>
            <Select
              options={options}
              isSearchable={false}
              value={option}
              onChange={this.changeFilter}
              styles={selectStyles}
            />
          </SelectDiv>
        </TopBar>
        <Content>
          {countries.data.map(country => (
            <Country
              key={country.name}
              darkMode={countries.darkMode}
              to={`/details/${encodeURIComponent(country.name)}`}
            >
              <Img src={country.flag} alt="img" />
              <Info>
                <Name darkMode={countries.darkMode}>{country.name}</Name>
                <Data darkMode={countries.darkMode}>
                  Population:<p>{country.population}</p>
                </Data>
                <Data darkMode={countries.darkMode}>
                  Region:<p>{country.region}</p>
                </Data>

                <Data darkMode={countries.darkMode}>
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

const mapStateToProps = state => ({
  countries: state.countries,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CountriesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
