import styled from 'styled-components';

const Anchor = styled.span`
  font-weight: 500;
  font-size: 14px;
  color: var(--indigo-300);
  letter-spacing: 0.3px;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

const LightText = styled.p`
  font-weight: 300;
  font-size: 14px;
  letter-spacing: 0.3px;
  color: var(--white-200);
  text-justify: kashida;
  line-height: 16px;
`;

const ThinText = styled.p`
  width: 290px;
  font-weight: 300;
  font-size: 12px;
  letter-spacing: 0.2px;
  color: var(--white-200);
  text-justify: kashida;
  line-height: 12.5px;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;
`;
export { Anchor, LightText, Form, ThinText };
