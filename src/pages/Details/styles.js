import styled from 'styled-components';
import { Link } from 'react-router-dom';

import colors from '../../styles/colors';

export const Container = styled.div`
  background: ${props =>
    props.darkMode ? colors.veryDarkBlueBg : colors.veryLightGray};
  min-height: 100%;
  display: flex;
  justify-content: center;
  flex: 1;
`;

export const InnerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 90%;
`;

export const BackArrow = styled(Link)`
  margin: 100px 0 0 20px;
  height: 40px;
  width: 125px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.17);
  align-self: flex-start;
  text-decoration: none;
  background: ${props =>
    props.darkMode ? colors.darkBlue : colors.veryLightGray};
  color: ${props => (props.darkMode ? colors.white : colors.veryDarkBlueTxt)};

  > img {
    width: 20px;
  }
`;

export const Wrapper = styled.div`
  margin: 100px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 400px;
  width: 100%;
`;

export const Flag = styled.img`
  width: 30%;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
  align-items: flex-start;
  justify-content: space-between;
  width: 40%;
`;

export const Name = styled.p`
  font-weight: bold;
  font-size: 28px;
  color: ${props => (props.darkMode ? colors.white : colors.veryDarkBlueTxt)};
`;

export const MinorInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Side = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100%;
`;

export const Data = styled.p`
  display: flex;
  font-weight: bold;
  padding: 5px;
  font-size: 16px;
  color: ${props => (props.darkMode ? colors.white : colors.veryDarkBlueTxt)};
  p {
    margin-left: 5px;
    font-weight: normal;
  }
`;

export const Border = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 5px;
  font-size: 16px;
  font-weight: bold;
  color: ${props => (props.darkMode ? colors.white : colors.veryDarkBlueTxt)};
`;

export const Title = styled.div`
  width: 190px;
`;

export const P = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  font-weight: normal;
  width: 100%;
`;

export const BorderCountry = styled(Link)`
  text-decoration: none;
  padding: 5px 10px;
  margin: 5px;
  border-radius: 5px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.17);
  color: ${props => (props.darkMode ? colors.white : colors.veryDarkBlueTxt)};
  font-size: 14px;
  background: ${props => (props.darkMode ? colors.darkBlue : colors.white)};
`;
