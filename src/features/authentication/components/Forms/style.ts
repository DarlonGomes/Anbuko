import styled from 'styled-components';

const Anchor = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: var(--cyan-800);
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

const LightText = styled.p`
  font-weight: 300;
  font-size: 14px;
  color: var(--white-200);
`;

export { Anchor, LightText };
