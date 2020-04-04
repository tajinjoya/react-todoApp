import React, { useState } from 'react';
import TodoForm from './components/todoForm'
import './App.css';
import Auth from './components/Auth';
import { AuthContext } from './components/Context/auth-context';


function App() {
const [authenticated, setAuthenticated] = useState(false);

const loginHandlar = () => {
  setAuthenticated(true);
}
  return (
    <AuthContext.Provider value={{login: loginHandlar, authenticate: authenticated}}>
   
    <div className="App">
    <p className="appTitle">My todo App</p>
      {authenticated ? <TodoForm /> : <Auth />}
    </div>
    </AuthContext.Provider>
  );
}

export default App;
