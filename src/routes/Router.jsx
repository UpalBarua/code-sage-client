import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main.jsx';
import ErrorPage from '../components/ErrorPage/ErrorPage';

export const router = createBrowserRouter([
  { path: '/', element: <Main /> },
  { path: '*', element: <ErrorPage /> },
]);
