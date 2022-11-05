import { FaCheck } from 'react-icons/fa';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 320px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;
const StyledCheckBox = styled.button`
  height: 24px;
  width: 24px;
  border-radius: 5px;
  border: 1px solid var(--gray-900);
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

const Check = styled(FaCheck)`
  color: var(--white-200);
  box-sizing: border-box;
`;

export { Wrapper, StyledCheckBox, Check };
