/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import { ThinText } from '../style';
import { Wrapper, StyledCheckBox, Check } from './style';

interface CheckProps {
  callback: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => unknown;
  status: boolean;
  value: boolean;
}
export default function CheckBox({ value, status, callback }: CheckProps) {
  return (
    <Wrapper>
      {!value && (
        <StyledCheckBox
          type="button"
          onClick={(event) => callback(event)}
          disabled={status}
          style={{
            backgroundColor: status ? 'var(--gray-900)' : 'var(--black-300)',
          }}
        />
      )}
      {value && (
        <StyledCheckBox
          type="button"
          onClick={(event) => callback(event)}
          disabled={status}
          style={{
            backgroundColor: status ? 'var(--purple-100)' : 'var(--purple-500)',
          }}
        >
          <Check />
        </StyledCheckBox>
      )}
      <ThinText>
        (Optional) It’s okay to send me details with APP updates, tips, and
        special offers. You can opt out any time.
      </ThinText>
    </Wrapper>
  );
}
