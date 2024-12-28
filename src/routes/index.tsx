import { createHashRouter } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { Dashboard } from '../pages/Dashboard';
import { ErrorBoundary } from '../components/ErrorBoundary';
import { InstagramCallback } from '../pages/auth/InstagramCallback';

export const router = createHashRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: '/auth/instagram/callback',
    element: <InstagramCallback />,
    errorElement: <ErrorBoundary />,
  }
]);