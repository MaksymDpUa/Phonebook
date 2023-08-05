import { Layout } from 'components/Layout/Layout';
import Loader from 'components/Loader/Loader';
import { PrivateRoute } from 'components/Routes/PrivatRoute';
import { RestrictedRoute } from 'components/Routes/RestrictedRoute';
import { useAuth } from 'hooks/useAuth';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/operations';

const HomePage = lazy(() => import('pages/HomePage'));
const LogInPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();

  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {isRefreshing ? (
        <Loader />
      ) : (
        <Layout>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/login"
                element={
                  <RestrictedRoute redirectTo="/contacts">
                    <LogInPage />
                  </RestrictedRoute>
                }
              />
              <Route
                path="/register"
                element={
                  <RestrictedRoute redirectTo="/contacts">
                    <RegisterPage />
                  </RestrictedRoute>
                }
              />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute redirectTo="/login">
                    <ContactsPage />
                  </PrivateRoute>
                }
              />
            </Routes>
          </Suspense>
        </Layout>
      )}
    </>
  );
};
