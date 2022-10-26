import React, { createContext, useContext } from 'react';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleAuth, githubAuth } from '../firebase/firebase.config';

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const googleRegister = () => {
    return signInWithPopup(auth, googleAuth);
  };

  const githubRegister = () => {
    return signInWithPopup(auth, githubAuth);
  };

  const value = {
    createUser,
    googleRegister,
    githubRegister,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
