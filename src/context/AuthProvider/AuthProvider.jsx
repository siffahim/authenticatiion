/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext } from "react";
import useFirebase from "../../Hooks/useFirebase";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const allUserInfoFrom = useFirebase();
  return (
    <AuthContext.Provider value={allUserInfoFrom}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
