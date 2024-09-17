import React, { useState, useEffect } from 'react';

import Login from '../Login';
import Dashboard from '../Dashboard';
import Header from '../Dashboard/Header';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    setIsAuthenticated(JSON.parse(localStorage.getItem('is_authenticated')));
  }, []);

  return (
    <>
      {isAuthenticated ? (
        <>
        <Header/>
        <Dashboard setIsAuthenticated={setIsAuthenticated} /></>
      ) : (
        <Login setIsAuthenticated={setIsAuthenticated} />
      )}
    </>
  );
};

export default App;
