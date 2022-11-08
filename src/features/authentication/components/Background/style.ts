import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
const Background = styled.img`
  width: 100%;
  max-height: 100%;
  object-fit: cover;
  border-radius: 0 0 10px 10px;
`;

const Blur = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(71, 76, 87, 0.4);
  position: absolute;
  top: 0;
  border-radius: 0 0 10px 10px;
`;

export { Container, Background, Blur };
