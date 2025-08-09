import React from 'react';
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import './App.css';
import {Navbar} from './components/navbar';
import {Home} from './pages/home/home';
import {Login} from './pages/login';
import {CreatePost} from './pages/create-post/createpost';
import {Welcome} from './pages/welcome';
import {auth} from "./config/firebase";
import {useAuthState} from "react-firebase-hooks/auth";


function App() {

  const [user,loading]=useAuthState(auth);

  if(loading)return<p>Loading..</p>

  return (
    <div className="App">
    
    <Router>
      <Navbar />
    <Routes>
    <Route path="/" element={!user ? <Welcome/>:<Navigate to="/home"/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/createpost" element={<CreatePost/>}/>
    <Route path="/home" element={user ?<Home/>:<Navigate to="/login"/>}/>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
