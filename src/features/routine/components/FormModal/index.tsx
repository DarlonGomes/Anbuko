import React from 'react';

import { ModalForm, Box, CloseButton, CloseIcon } from './style';

interface FormModalProps {
  step: string | null;
  callback: React.Dispatch<React.SetStateAction<string | null>>;
}
export default function FormModal({ step, callback }: FormModalProps) {
  return (
    <ModalForm
      style={{
        display: step ? 'flex' : 'none',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CloseButton type="button" onClick={() => callback(null)}>
        <CloseIcon />
      </CloseButton>
      <Box>
        <h3>{step}</h3>
      </Box>
    </ModalForm>
  );
}
