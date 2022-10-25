import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main.jsx';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import Register from '../components/Register/Register.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [{ path: '/register', element: <Register /> }],
  },

  { path: '*', element: <ErrorPage /> },
]);
