import React from 'react';

import useRegisterForm from '../../../hooks/useRegisterForm';
import { AuthStep } from '../../Background';
import AuthInput from '../../input';
import CheckBox from '../checkbox';
import Footer from '../Footer';
import { Form } from '../style';

interface FormProps {
  changeMethod: React.Dispatch<React.SetStateAction<AuthStep>>;
}
export default function SignUpForm({ changeMethod }: FormProps) {
  const { status, values, handleChange, handleSubmit, handleClick } =
    useRegisterForm();
  return (
    <Form>
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
      <CheckBox
        value={values.news}
        status={status}
        callback={handleClick('news')}
      />
      <Footer status={status} type="Register" changeMethod={changeMethod} />
    </Form>
  );
}
