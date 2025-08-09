import {Link} from "react-router-dom";
import {auth} from "../config/firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import {signOut} from "firebase/auth";
import logo from '../assets/wlogo.jpg';


export const Navbar=()=>{
    const [user]=useAuthState(auth);

    const signUserOut=async ()=>{
     await signOut(auth);
    };

    return(
        <div className="Navbar">
            <div className="nav-logo"><div className="logo">
                <img src={logo} alt="" height="70" width="80"></img></div></div>
               
            <Link className="nav-links" to="/">Home</Link>
            {!user ? (
                <Link className="nav-links" to="/login">Login</Link>):
         (<Link className="nav-links" to="/createpost">CreatePost</Link>)}
        <div className="user">
            {user && (
                <>
            
        <img src={user?.photoURL || ""} width="30" height="30" alt="" referrerPolicy="no-referrer"/>
        <button onClick={signUserOut}>Log Out</button>
        </>
              )}  </div></div>  
);
    
};