import React from 'react';

import { Button } from './style';

interface ButtonProps {
  message: 'Log In' | 'Register';
  status: boolean;
}
export default function FormButton({ message, status }: ButtonProps) {
  const [hover, setHover] = React.useState<boolean>(false);
  return (
    <Button
      type="submit"
      disabled={status}
      onMouseEnter={() => setHover((prev) => !prev)}
      onMouseLeave={() => setHover((prev) => !prev)}
      style={{
        backgroundColor:
          status || hover ? 'var(--purple-100)' : 'var(--purple-500)',
      }}
    >
      {message}
    </Button>
  );
}
