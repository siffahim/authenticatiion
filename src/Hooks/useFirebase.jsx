import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import initializationAuthentication from "../firebase/firebase.init";

initializationAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");
  const auth = getAuth();
  const [isLoading, setIsLoading] = useState(true);

  //register user
  const register = (email, password, name) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        const newUser = { email, displayName: name };
        setUser(newUser);
        setError("");

        //update on firebase
        updateProfile(auth.currentUser, { displayName: name })
          .then(() => {})
          .catch((err) => setError(err.message));
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  //signIn user
  const signIn = (email, password, navigate, location) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        setError("");
        if (result.user) {
          Swal.fire(
            `Welcome! ${result.user?.displayName}`,
            "You are successfully sign in",
            "success"
          );
          const uri = location?.state?.from || "/";
          navigate(uri);
        }
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  //google sing in
  const signInUserWithGoogle = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        setError("");
      })
      .catch((err) => setError(err.message))
      .finally(() => {
        setIsLoading(false);
      });
  };

  //user tracking
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, [auth]);

  //sing out
  const logOutUser = () => {
    signOut(auth).then(() => {
      Swal.fire("Good job!", "User successfully sign out", "success");
      setUser({});
    });
  };

  return {
    register,
    signIn,
    user,
    error,
    isLoading,
    logOutUser,
    signInUserWithGoogle,
  };
};

export default useFirebase;
