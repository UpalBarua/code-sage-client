import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineGoogle, AiOutlineGithub } from 'react-icons/ai';
import NameInput from '../Form/NameInput';
import EmailInput from '../Form/EmailInput';
import PasswordInput from '../Form/PasswordInput';
import PhotoUrlInput from '../Form/PhotoUrlInput';
import { useAuth } from '../../contexts/AuthContext';
import styles from '../Register/Register.module.css';
import utilities from '../../assets/utilities.module.css';

const Register = () => {
  const [nameInputVal, setNameInputVal] = useState('');
  const [emailInputVal, setEmailInputVal] = useState('');
  const [passwordInputVal, setPasswordInputVal] = useState('');
  const [photoUrlInputVal, setPhotoUrlInputVal] = useState('');
  const [registerError, setRegisterError] = useState('');
  const { createUser, googleRegister, githubRegister } = useAuth();

  const handleRegister = async event => {
    event.preventDefault();

    try {
      await createUser(emailInputVal, passwordInputVal);
      console.log('Account created');
    } catch (error) {
      setRegisterError('Failed to register user.');
    }
  };

  const handleGoogleRegister = async () => {
    try {
      await googleRegister();
      console.log('REGISTERD');
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleGithubRegister = async () => {
    try {
      await githubRegister();
      console.log('REGISTERD');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className={`${styles.container} ${utilities.container}`}>
      <div className={styles.grid}>
        <div className={styles.formHeader}>
          <h2 className={styles.title}>Register</h2>
          <p className={styles.text}>
            Already have an account? <Link to="/login">Log in</Link>{' '}
          </p>
          <p>Or register with...</p>

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

        <form className={styles.form} onSubmit={handleRegister}>
          <div className={styles.formBody}>
            <NameInput
              nameInputVal={nameInputVal}
              setNameInputVal={setNameInputVal}
            />
            <EmailInput
              emailInputVal={emailInputVal}
              setEmailInputVal={setEmailInputVal}
            />
            <PasswordInput
              passwordInputVal={passwordInputVal}
              setPasswordInputVal={setPasswordInputVal}
            />
            <PhotoUrlInput
              photoUrlInput={photoUrlInputVal}
              setPhotoUrlInputVal={setPhotoUrlInputVal}
            />
          </div>

          <div className={styles.formFooter}>
            {registerError && (
              <p className={styles.errorMessage}>{registerError}</p>
            )}
            <button className={`${utilities.btn} ${styles.registerBtn}`}>
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
