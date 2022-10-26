import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main.jsx';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import Register from '../components/Register/Register.jsx';
import Courses from '../components/Courses/Courses.jsx';
import Details from '../components/Details/Details';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      { path: '/register', element: <Register /> },
      { path: '/courses', element: <Courses /> },
      { path: '/details/:courseId', element: <Details /> },
      { path: '/f&q', element: <h1>f&q</h1> },
      { path: '/blog', element: <h1>Blog</h1> },
    ],
  },

  { path: '*', element: <ErrorPage /> },
]);
