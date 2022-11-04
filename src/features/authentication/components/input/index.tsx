import React from 'react';

import { Wrapper, InputTitle, Input, EmailIcon, PasswordIcon } from './style';

interface AuthInputProps {
  text: string;
  type: string;
  value: string;
  placeholder: string;
  status: boolean;
  callback: (event: React.ChangeEvent<HTMLInputElement>) => unknown;
}
export default function AuthInput({
  text,
  type,
  value,
  placeholder,
  status,
  callback,
}: AuthInputProps) {
  return (
    <Wrapper>
      <InputTitle>{text}</InputTitle>
      <Input
        type={type}
        value={value}
        onChange={callback}
        placeholder={placeholder}
        disabled={status}
        autoComplete="off"
      />
      {type === 'email' && <EmailIcon />}
      {type === 'password' && <PasswordIcon />}
    </Wrapper>
  );
}
