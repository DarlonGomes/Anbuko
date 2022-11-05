import React from 'react';

import { StyledCheckBox } from './style';

interface CheckProps {
  callback: (event: React.ChangeEvent<HTMLInputElement>) => unknown;
  status: boolean;
  value: boolean;
}
export default function CheckBox({ value, status, callback }: CheckProps) {
  return (
    <StyledCheckBox
      type="button"
      onClick={() => callback}
      disabled={status}
      style={{
        backgroundColor: status ? 'var(--gray-900)' : 'var(--black-300)',
      }}
    >
      {value ? 'sim' : 'nao'}
    </StyledCheckBox>
  );
}
