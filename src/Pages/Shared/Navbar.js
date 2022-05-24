import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

const Navbar = () => {

  const [user] = useAuthState(auth);

  const handleSignOut =() =>{
    signOut(auth);
  }

    const menuItems=<>
        <li><Link to='/home' className='font-bold'>Home</Link></li>
        <li><Link to='/blogs' className='font-bold'>Blogs</Link></li>
        <li><Link to='/portfolio' className='font-bold'>My Portfolio</Link></li>
        {
          user?
          // <button onClick={handleSignOut} className='font-bold '>
          // Sign Out
          // </button>

          <li onClick={handleSignOut} className='font-bold'><Link to=''><p className='text-white'>{user.displayName}</p> Sign Out</Link></li>
           
          :
          <li><Link to='/login' className='font-bold'>Login</Link></li>
         
        }
        
    </>
    
    return (
        <div className="navbar bg-accent">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {menuItems}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">AutoZone</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
        {menuItems}
    </ul>
  </div>
 
</div>
    );
};

export default Navbar;