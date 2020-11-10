import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useRoutes } from './routes';
import 'materialize-css';
import { useAuth } from './hooks/auth.hooks';
import { AuthContext } from './context/AuthContext';

function App() {
  const { token, userID, login, logout } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);
  return (
    <AuthContext.Provider
      value={{
        token,
        userID,
        login,
        logout,
        isAuthenticated,
      }}
    >
      <Router>
        <div className="container">{routes}</div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
