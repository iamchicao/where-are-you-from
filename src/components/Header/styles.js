import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  height: 75px;
  background: ${props => (props.darkMode ? colors.darkBlue : colors.white)};
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    color: ${props => (props.darkMode ? colors.white : colors.veryDarkBlueTxt)};
    font-weight: bold;
    font-size: 18px;
  }
`;

export const ToggleButton = styled.button`
  border: 0;
  background: none;
  font-size: 16px;
  color: ${props => (props.darkMode ? colors.white : colors.veryDarkBlueTxt)};
`;

export const Icon = styled.i`
  font-size: 18px;
  margin-right: 10px;
`;
