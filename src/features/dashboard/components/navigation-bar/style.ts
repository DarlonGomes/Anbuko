import { GiAutogun } from 'react-icons/gi';
import styled from 'styled-components';

const Container = styled.div`
  width: 40px;
  height: calc(100% - 25px);
  background-color: var(--gray-900);
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Divider = styled.div`
  height: 2px;
  width: 20px;
  color: var(--gray-400);
`;
const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const InteractableBox = styled.button`
  width: 40px;
  height: 40px;
  cursor: pointer;
  border: none;
`;

const Logo = styled(GiAutogun)`
  font-size: 30px;
  color: var(--black-900);
`;
export { Container, Divider, BoxWrapper, InteractableBox, Logo };
