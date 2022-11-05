import { useLogInForm } from '@/features/authentication/hooks/useLogInForm';
import React from 'react';

import { AuthStep } from '../../Background';
import AuthInput from '../../input';
import Footer from '../Footer';
import { Form } from '../style';

interface FormProps {
  changeMethod: React.Dispatch<React.SetStateAction<AuthStep>>;
}
export default function SignInForm({ changeMethod }: FormProps) {
  const { status, values, handleChange, handleSubmit } = useLogInForm();
  return (
    <Form onSubmit={(event) => handleSubmit(event)}>
      <AuthInput
        text="Email"
        type="email"
        value={values.email}
        placeholder="johndoe@gmail.com"
        status={status}
        callback={handleChange('email')}
      />
      <AuthInput
        text="Password"
        type="password"
        value={values.password}
        placeholder="******"
        status={status}
        callback={handleChange('password')}
      />
      <Footer status={status} type="Log In" changeMethod={changeMethod} />
    </Form>
  );
}
