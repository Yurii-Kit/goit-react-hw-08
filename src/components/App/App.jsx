import { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import Layout from '../Layout/Layout';
import { refreshUser } from '../../redux/auth/operations';
import { selectIsRefreshing } from '../../redux/auth/selectors';

const HomePage = lazy(() => import('../../pages/Homepage/HomePage'));
const RegisterPage = lazy(
  () => import('../../pages/RegisterPage/RegisterPage'),
);
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(
  () => import('../../pages/ContactsPage/ContactsPage'),
);

// import css from './App.module.css';

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <strong>Refreshing user...</strong>
  ) : (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
