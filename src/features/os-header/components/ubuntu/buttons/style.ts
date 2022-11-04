import {
  IoCloseOutline,
  IoRemoveOutline,
  IoStopOutline,
} from 'react-icons/io5';
import styled from 'styled-components';

const Option = styled.button`
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: var(--gray-900);
  border-radius: 20px;
  box-sizing: border-box;
`;

const Minimize = styled(IoRemoveOutline)`
  font-size: 13px;
  color: var(--white-900);
`;

const Close = styled(IoCloseOutline)`
  font-size: 15px;
  color: var(--white-900);
`;

const Resize = styled(IoStopOutline)`
  font-size: 12px;
  color: var(--white-900);
`;

export { Option, Minimize, Close, Resize };
