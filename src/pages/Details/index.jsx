import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import LeftArrow from '../../assets/images/left-arrow.svg';
import { Creators as DetailsActions } from '../../store/ducks/details';

import {
  Container,
  InnerBox,
  BackArrow,
  Wrapper,
  Flag,
  Info,
  Name,
  MinorInfo,
  Side,
  Data,
  Border,
} from './styles';

class Details extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        country: PropTypes.string,
      }),
    }).isRequired,
    getDetails: PropTypes.func.isRequired,
    details: PropTypes.shape({
      flag: PropTypes.string,
      name: PropTypes.string,
      nativeName: PropTypes.string,
      population: PropTypes.number,
      region: PropTypes.string,
      subregion: PropTypes.string,
      capital: PropTypes.string,
      topLevelDomain: PropTypes.arrayOf(PropTypes.string),
      currencies: PropTypes.string,
      languages: PropTypes.string,
      borders: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
    countries: PropTypes.shape({
      darkMode: PropTypes.bool,
    }).isRequired,
  };

  componentDidMount() {
    const { match, getDetails } = this.props;
    getDetails(decodeURIComponent(match.params.country));
  }

  render() {
    const { details, countries } = this.props;
    return (
      <Container darkMode={countries.darkMode}>
        <InnerBox>
          <BackArrow to="/" darkMode={countries.darkMode}>
            <img src={LeftArrow} alt="Go back" />
            <p>Back</p>
          </BackArrow>
          <Wrapper>
            <Flag src={details.flag} alt={details.name} />
            <Info>
              <Name darkMode={countries.darkMode}>{details.name}</Name>
              <MinorInfo>
                <Side>
                  <Data darkMode={countries.darkMode}>
                    Native Name:<p>{details.nativeName}</p>
                  </Data>
                  <Data darkMode={countries.darkMode}>
                    Population:<p>{details.population}</p>
                  </Data>
                  <Data darkMode={countries.darkMode}>
                    Region:<p>{details.region}</p>
                  </Data>
                  <Data darkMode={countries.darkMode}>
                    Sub Region:<p>{details.subregion}</p>
                  </Data>
                  <Data darkMode={countries.darkMode}>
                    Capital:<p>{details.capital}</p>
                  </Data>
                </Side>
                <Side>
                  <Data darkMode={countries.darkMode}>
                    Top Level Domain:<p>{details.topLevelDomain}</p>
                  </Data>
                  <Data darkMode={countries.darkMode}>
                    Currencies:<p>{details.currencies}</p>
                  </Data>
                  <Data darkMode={countries.darkMode}>
                    Languages:<p>{details.languages}</p>
                  </Data>
                </Side>
              </MinorInfo>
              <Border>
                <Data darkMode={countries.darkMode}>
                  Border Countries:<p>{details.borders}</p>
                </Data>
              </Border>
            </Info>
          </Wrapper>
        </InnerBox>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  details: state.details,
  countries: state.countries,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(DetailsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details);
