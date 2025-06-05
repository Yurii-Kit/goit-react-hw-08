import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { AppBar } from '../AppBar/AppBar';

const HomePage = lazy(() => import('../../pages/Homepage/HomePage'));
const RegisterPage = lazy(
  () => import('../../pages/RegisterPage/RegisterPage'),
);
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(
  () => import('../../pages/ContactsPage/ContactsPage'),
);

import css from './App.module.css';

export default function App() {
  return (
    <div className={css.app}>
      <AppBar />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
