import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import SignIn from './components/Login';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import SignUp from './components/Signup';
import Home from './components/Home';
import Profile from './components/Profile';
import Analytics from './components/Analytics';
import Mailing from './components/Mailing';

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function setUser(User){
  sessionStorage.setItem('user',JSON.stringify(User))
}
function getUser(){
  const User = sessionStorage.getItem('user')
  return JSON.parse(User)
}

function getToken() {
  const tokenString = sessionStorage.getItem('token')
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

function App() {
  const token = getToken()
  const user = getUser('user')
  console.log(user)
  return (
    <Router>
    <div className="App">
      <Navbar token={token}/>
      <Routes>
      <Route  path='Home' element={< Home />}></Route>
      <Route  path='Register' element={< SignUp setToken={setToken} setUser={setUser} />}></Route>
      <Route  path='SignIn' element={token?<Profile user={user}/> :< SignIn setToken={setToken} token={token} setUser={setUser}/>}></Route>
      <Route  path='Analytics' element={<Analytics/> }></Route>
      <Route  path='Mailing' element={<Mailing user={user}/> }></Route>
      </Routes>
    </div>
    </Router>
   
  );
}

export default App;
