// AuthContext.js
import React, { createContext, useState } from 'react';

// Define the shape of the auth state
const defaultAuthState = {
  username: '',
  email: '',
  id: '',
  status: false,
};

export const AuthContext = createContext({
  authState: defaultAuthState,
  setAuthState: () => {}, // placeholder function
});

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState(defaultAuthState);

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      {children}
    </AuthContext.Provider>
  );
};
