import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { auth, googleAuth, githubAuth } from '../firebase/firebase.config';

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const googleRegister = () => {
    return signInWithPopup(auth, googleAuth);
  };

  const githubRegister = () => {
    return signInWithPopup(auth, githubAuth);
  };

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const updateUserProfile = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, { displayName, photoURL });
  };

  const value = {
    currentUser,
    createUser,
    updateUserProfile,
    googleRegister,
    githubRegister,
    logIn,
    logOut,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
