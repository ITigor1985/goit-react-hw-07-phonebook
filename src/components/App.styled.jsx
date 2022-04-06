import styled from 'styled-components';
import phone from '../images/phone.png';
import icons from '../images/icons.png';

export const Container = styled.div`
  position: relative;
  padding-top: 30px;
  padding-bottom: 30px;
  width: 100%;
  height: 700px;
  margin: 0 auto;
  background-size: contain;
  background: url(${icons}), url(${phone});
  background-repeat: no-repeat;
  background-position: center 120px, top;
  background-size: 260px 400px, 365px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
