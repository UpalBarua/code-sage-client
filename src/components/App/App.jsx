import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from '../../routes/Router';
import Main from '../../layouts/Main';

const App = () => {
  return (
    <RouterProvider router={router}>
      <Main />
    </RouterProvider>
  );
};

export default App;
