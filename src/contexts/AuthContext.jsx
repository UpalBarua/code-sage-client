import React, { createContext, useContext } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const value = {
    createUser,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
