import React from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
        <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content mt-6">
          {/* <!-- Page content here --> */}
          {/* <h2 className='mt-6'>Dashboard</h2> */}
          <Outlet ></Outlet>
         
        
        </div> 
        <div class="drawer-side">
          <label for="dashboard-sidebar" class="drawer-overlay"></label> 

          {/* <nav>
            <Link to="myProfile">My Profile</Link>{" "}
            <Link to="team">Team</Link>
          </nav> */}
          
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            
            <li> <Link to="/dashboard">My Profile</Link></li>
            <li><Link to="/dashboard/addReview">Add Review</Link></li>
            <li><Link to="/dashboard/myOrders">My Orders</Link></li>
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;