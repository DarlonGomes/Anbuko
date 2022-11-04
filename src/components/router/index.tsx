import { AuthenticationWrapper } from '@/pages';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

export default function RouterNavigator() {
  return (
    <Routes>
      <Route path="/" element={<AuthenticationWrapper />} />
    </Routes>
  );
}
