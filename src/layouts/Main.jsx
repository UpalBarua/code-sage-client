import React from 'react';
import * as ReactDOM from 'react-dom';
import { Outlet } from 'react-router-dom';
import { useSpinner } from '../contexts/SpinnerContext';
import Navbar from '../components/Navbar/Navbar';
import Spinner from '../components/spinner/Spinner';

const Main = () => {
  const { isSpinnerVisible } = useSpinner();
  return (
    <>
      <Navbar />
      <Outlet />

      {isSpinnerVisible &&
        ReactDOM.createPortal(
          <Spinner />,
          document.getElementById('spinner-root')
        )}
      {/* <Spinner /> */}
    </>
  );
};

export default Main;
