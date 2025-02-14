import React from 'react';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <div>
      <h1>Cloud Mining Platform</h1>
      <Register />
      <hr />
      <Login />
      <hr />
      <Dashboard />
    </div>
  );
};

export default App;
