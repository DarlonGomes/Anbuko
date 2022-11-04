import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h3`
  font-weight: 600;
  font-size: 22px;
  color: var(--white-100);
`;

const Subtitle = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: var(--white-100);
  margin-top: 10px;
`;

export { Header, Title, Subtitle };
