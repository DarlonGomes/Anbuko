import React from 'react';

import { titleBarHandler } from '../../../services';
import { Option, Minimize, Resize, Close } from './style';

interface Props {
  method: 'minimize' | 'close' | 'resize';
}
export function Button({ method }: Props) {
  const [status, setStatus] = React.useState<boolean>(false);
  return (
    <>
      {method === 'minimize' && (
        <Option
          type="button"
          onClick={() => titleBarHandler.minimize()}
          onMouseEnter={() => setStatus((prev) => !prev)}
          onMouseLeave={() => setStatus((prev) => !prev)}
          style={{ backgroundColor: status ? '#6c6c6c' : 'var(--gray-900)' }}
        >
          <Minimize />
        </Option>
      )}
      {method === 'resize' && (
        <Option
          type="button"
          onClick={() => titleBarHandler.resize()}
          onMouseEnter={() => setStatus((prev) => !prev)}
          onMouseLeave={() => setStatus((prev) => !prev)}
          style={{ backgroundColor: status ? '#6c6c6c' : 'var(--gray-900)' }}
        >
          <Resize />
        </Option>
      )}
      {method === 'close' && (
        <Option
          type="button"
          onClick={() => titleBarHandler.close()}
          onMouseEnter={() => setStatus((prev) => !prev)}
          onMouseLeave={() => setStatus((prev) => !prev)}
          style={{ backgroundColor: status ? '#6c6c6c' : 'var(--gray-900)' }}
        >
          <Close />
        </Option>
      )}
    </>
  );
}
