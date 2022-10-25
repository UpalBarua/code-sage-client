import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NameInput from '../Form/NameInput';
import EmailInput from '../Form/EmailInput';
import PasswordInput from '../Form/PasswordInput';
import PhotoUrlInput from '../Form/PhotoUrlInput';
import styles from '../Register/Register.module.css';
import utilities from '../../assets/utilities.module.css';

const Register = () => {
  const [nameInputVal, setNameInputVal] = useState('');
  const [emailInputVal, setEmailInputVal] = useState('');
  const [passwordInputVal, setPasswordInputVal] = useState('');
  const [photoUrlInputVal, setPhotoUrlInputVal] = useState('');

  return (
    <div className={`${styles.container} ${utilities.container}`}>
      <div className={styles.grid}>
        <div className={styles.col}>
          <h2 className={styles.title}>Register</h2>
          <p className={styles.text}>
            Already have an account? <Link to="/login">Log in</Link>{' '}
          </p>
        </div>

        <div className={styles.col}>
          <form className={styles.form}>
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
            <button
              className={`${styles.registerBtn} ${utilities.btn} ${utilities.btnPrimary}`}>
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
