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
        {
          user && <li><Link to='/dashboard' className='font-bold'>Dashboard</Link></li>
        }
       
        <li><Link to='/blogs' className='font-bold'>Blogs</Link></li>
        <li><Link to='/portfolio' className='font-bold'>My Portfolio</Link></li>
        {
          user?
          <li onClick={handleSignOut} className='font-bold'><Link to=''><p className='text-white uppercase'>{user.displayName}</p> Sign Out</Link></li>
           
          :
          <li><Link to='/login' className='font-bold'>Login</Link></li>
         
        }
        
    </>
    
    return (
        <div className="navbar bg-accent">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex="0" className="btn btn-ghost  lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex="0" className="menu menu-compact bg-accent  dropdown-content mt-2 p-2 shadow   w-52">
            {menuItems}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-2xl font-semibold">AutoZone</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
        {menuItems}
    </ul>
  </div>
 <div className="navbar-end">
 <label tabIndex="1" for="dashboard-sidebar" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
 
 </div>
</div>
    );
};

export default Navbar;