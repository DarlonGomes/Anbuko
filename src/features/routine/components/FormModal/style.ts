import { AiFillCloseCircle } from 'react-icons/ai';
import styled from 'styled-components';

const ModalForm = styled.div`
  width: 100%;
  height: calc(100% - 68px);
  background: rgba(6, 0, 0, 0.55);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  z-index: 1;
  position: absolute;
  top: 25px;
  left: 0px;
  border-radius: 0 0 10px 10px;
`;

const Box = styled.div`
  width: 40%;
  height: 40%;
  background-color: var(--trans-white-2);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CloseButton = styled.button`
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 20px;
  right: 10px;
  border: none;
  z-index: 2;
`;

const CloseIcon = styled(AiFillCloseCircle)`
  font-size: 30px;
  color: var(--trans-white-2);
`;

export { ModalForm, Box, CloseButton, CloseIcon };
