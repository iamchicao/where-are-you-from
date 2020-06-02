import styled from 'styled-components';
import SearchIcon from '../../assets/images/search.svg';
import colors from '../../styles/colors';

export const Container = styled.div`
  background: ${colors.veryLightGrey};
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const TopBar = styled.div`
  margin-top: 40px;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  height: 50px;
  width: 400px;
  background: #fff url(${SearchIcon}) no-repeat 25px center;
  padding: 6px 7px 6px 60px;
  input {
    flex: 1;
    font-size: 18px;
    color: ${colors.darkGrey};
    border: 0;
  }
`;

export const Select = styled.select`
  border-radius: 5px;
  background: white;
  height: 50px;
  width: 200px;
`;

export const Content = styled.div`
  margin-top: 40px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Country = styled.div`
  height: 400px;
  width: 300px;
  margin: 40px 40px 0 0;
  border-radius: 15px;
  background: ${colors.white};
  display: flex;
  flex-direction: column;
`;

export const Img = styled.img`
  height: 200px;
  width: 300px;
  border-radius: 5px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.p`
  font-weight: bold;
  padding: 30px 20px 10px;
  font-size: 20px;
  color: ${colors.veryDarkBlueTxt};
`;

export const Data = styled.p`
  display: flex;
  font-weight: bold;
  padding: 5px 20px;
  font-size: 14px;
  color: ${colors.veryDarkBlueTxt};
  p {
    margin-left: 5px;
    font-weight: normal;
  }
`;