import React from 'react';

interface FormValue {
  email: string;
  password: string;
  birthday: string;
  news: boolean;
}
export default function useLogInForm() {
  const [status, setStatus] = React.useState<boolean>(false);
  const [values, setValues] = React.useState<FormValue>({
    email: '',
    password: '',
    birthday: '',
    news: false,
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
        birthday: '',
        news: false,
      });
    }, 3000);
  };

  return { status, values, handleChange, handleSubmit };
}
