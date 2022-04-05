import styled from 'styled-components';
import phone from '../images/phone.png';

export const Container = styled.div`
  padding-top: 30px;
  padding-bottom: 60px;
  width: 100%;
  height: auto;
  margin: 0 auto;
  background-size: contain;
  background-image: url(${phone});
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
