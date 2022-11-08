import { AuthenticationPage, MainPage } from '@/pages';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// import useLocalStorage from '@/hooks/useToken';

// function ProtectedRouter() {
//   const [token] = useLocalStorage('user_data', '');
// }

export default function RouterNavigator() {
  return (
    <Routes>
      <Route path="/" element={<AuthenticationPage />} />
      <Route path="/app" element={<MainPage />} />
    </Routes>
  );
}
