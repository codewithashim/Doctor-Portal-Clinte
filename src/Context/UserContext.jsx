import { createContext } from "react";
import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // user create by email and password

  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserDetails = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  };

  // user login by email and password

  const userLoing = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // user logout

  const userLogout = () => {
    setLoading(true);
    return signOut(auth);
  };

  const googleLogin = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // user update

  // user delete

  // user reset password

  // user change password

  // user change email

  // watche user state

  useEffect(() => {
    try {
      const unsubscribed = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      });
      return () => unsubscribed();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const authInfo = {
    user,
    error,
    loading,
    setError,
    registerUser,
    userLoing,
    userLogout,
    updateUserDetails,
    googleLogin,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
