import React from 'react';

import { Button } from './style';

interface ButtonProps {
  message: 'Log In' | 'Register';
  status: boolean;
}
export default function FormButton({ message, status }: ButtonProps) {
  return (
    <Button
      type="submit"
      disabled={status}
      style={{
        backgroundColor: status ? 'var(--purple-100)' : 'var(--purple-500)',
      }}
    >
      {message}
    </Button>
  );
}
