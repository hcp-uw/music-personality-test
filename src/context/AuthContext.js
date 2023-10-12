import { createContext, useContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../config/firebase';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signIn = async () => {
    const result = await signInWithPopup(auth, provider);

    return result;
  }

  const getUser = () => {
    return auth.currentUser;
  }

  const signOut = async () => {
    window.location.href = "/";
    return auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    signIn,
    signOut
  }

  return (
    <AuthContext.Provider value={value}>
      {loading ? null : children}
    </AuthContext.Provider>
  )
}

