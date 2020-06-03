import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Container, ToggleButton, Icon } from './styles';
import { Creators as CountriesActions } from '../../store/ducks/countries';

const Header = ({ toggleDarkMode, countries }) => (
  <Container darkMode={countries.darkMode}>
    <div>
      <p>Where in the world?</p>
      <ToggleButton onClick={toggleDarkMode} darkMode={countries.darkMode}>
        <Icon className="fa fa-moon-o" />
        Dark mode
      </ToggleButton>
    </div>
  </Container>
);

Header.propTypes = {
  toggleDarkMode: PropTypes.func.isRequired,
  countries: PropTypes.shape({ darkMode: PropTypes.bool }).isRequired,
};

const mapStateToProps = state => ({
  countries: state.countries,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CountriesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
