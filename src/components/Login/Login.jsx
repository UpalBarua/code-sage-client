import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineGoogle, AiOutlineGithub } from 'react-icons/ai';
import EmailInput from '../Form/EmailInput';
import PasswordInput from '../Form/PasswordInput';
import { useAuth } from '../../contexts/AuthContext';
import styles from '../Register/Register.module.css';
import utilities from '../../assets/utilities.module.css';
import { async } from '@firebase/util';

const Login = () => {
  const [emailInputVal, setEmailInputVal] = useState('');
  const [passwordInputVal, setPasswordInputVal] = useState('');
  const [loginError, setLoginError] = useState('');
  const { googleRegister, githubRegister, logIn } = useAuth();

  const handleLogin = async event => {
    event.preventDefault();

    try {
      await logIn(emailInputVal, passwordInputVal);
      setLoginError('');
    } catch (error) {
      setLoginError(error);
    }
  };

  const handleGoogleRegister = async () => {
    try {
      await googleRegister();
      setLoginError('');
    } catch (error) {
      setLoginError(error);
    }
  };

  const handleGithubRegister = async () => {
    try {
      await githubRegister();
      setLoginError('');
    } catch (error) {
      setLoginError(error);
    }
  };

  return (
    <div className={`${styles.container} ${utilities.container}`}>
      <div className={styles.grid}>
        <div className={styles.formHeader}>
          <h2 className={styles.title}>Log In</h2>
          <p className={styles.text}>
            Don't an account? <Link to="/register">Register</Link>{' '}
          </p>
          <p>Or log in with...</p>

          <div className={styles.btnGroup}>
            <button
              className={`${utilities.btn} ${styles.formBtn}`}
              onClick={handleGoogleRegister}>
              <AiOutlineGoogle />
              Google
            </button>
            <button
              className={`${utilities.btn} ${styles.formBtn}`}
              onClick={handleGithubRegister}>
              <AiOutlineGithub />
              Github
            </button>
          </div>
        </div>

        <form className={styles.form} onSubmit={handleLogin}>
          <div className={styles.formBody}>
            <EmailInput
              emailInputVal={emailInputVal}
              setEmailInputVal={setEmailInputVal}
            />
            <PasswordInput
              passwordInputVal={passwordInputVal}
              setPasswordInputVal={setPasswordInputVal}
            />
          </div>

          <div className={styles.formFooter}>
            {loginError && <p className={styles.errorMessage}>{loginError}</p>}
            <button className={`${utilities.btn} ${styles.registerBtn}`}>
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
