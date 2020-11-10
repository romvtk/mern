import { createContext } from 'react';

export const AuthContext = createContext({
  userID: null,
  token: null,
  login: () => {},
  logout: () => {},
  isAuthenticated: false,
});
