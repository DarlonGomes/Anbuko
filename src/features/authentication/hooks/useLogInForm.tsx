import React from 'react';
import { useNavigate } from 'react-router-dom';

interface FormValue {
  email: string;
  password: string;
}
export function useLogInForm() {
  const navigate = useNavigate();
  const [status, setStatus] = React.useState<boolean>(false);
  const [values, setValues] = React.useState<FormValue>({
    email: '',
    password: '',
  });

  const handleChange =
    (prop: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus((prev) => !prev);
    setTimeout(() => {
      setStatus((prev) => !prev);
      setValues({
        email: '',
        password: '',
      });
    }, 3000);
  };

  return { status, values, handleChange, handleSubmit };
}
