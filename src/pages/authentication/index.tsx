import React from 'react';
import styled from 'styled-components';

import lofi from '../../assets/images/lofi-girl.gif';

const Background = styled.img`
  width: 1200px;
  height: 647px;
  object-fit: cover;
  position: relative;
  border-radius: 0 0 10px 10px;
`;

const Blur = styled.div`
  width: 1200px;
  height: 647px;
  background-color: rgba(71, 76, 87, 0.4);
  position: absolute;
  top: 25px;
  border-radius: 0 0 10px 10px;
  z-index: 1;
`;
export default function Backsplash() {
  return (
    <>
      <Background src={lofi} alt="backsplash" />
      <Blur />
    </>
  );
}
