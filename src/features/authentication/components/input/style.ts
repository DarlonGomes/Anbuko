import { MdPassword, MdAlternateEmail } from 'react-icons/md';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: relative;
  margin-bottom: 10px;
`;

const InputTitle = styled.h5`
  font-weight: 600;
  font-size: 14px;
  color: var(--white-200);
`;
const Input = styled.input`
  height: 40px;
  width: 320px;
  border-radius: 5px;
  border: 1px solid var(--gray-900);
  padding: 0 35px;
  font-size: 14px;
  font-weight: 400;
  color: var(--gray-100);
  letter-spacing: 0.55px;
  ::placeholder {
    color: var(--gray-300);
  }
  :focus {
    outline: none;
    border: 1px solid var(--gray-100);
  }
`;

const EmailIcon = styled(MdAlternateEmail)`
  font-size: 22px;
  color: var(--gray-300);
  position: absolute;
  top: 28px;
  left: 8px;
`;
const PasswordIcon = styled(MdPassword)`
  font-size: 22px;
  color: var(--gray-300);
  position: absolute;
  top: 27px;
  left: 8px;
`;

export { Wrapper, InputTitle, Input, EmailIcon, PasswordIcon };
