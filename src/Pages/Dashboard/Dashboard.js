import React from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import arrow from '../../images/Vector.png';
import {useQuery} from 'react-query';
import Loading from '../Shared/Loading';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const {data: userInfo,isLoading}=useQuery('userInfo', () => 
  fetch(`https://fierce-cliffs-45144.herokuapp.com/user/${user.email}`,{
      method:'GET'
  }).then(res => res.json()));

  if(isLoading){
      return <Loading></Loading>
  }

    return (
        <div class="drawer drawer-mobile">
        <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content mt-6">
          {/* <!-- Page content here --> */}
          {/* <h2 className='mt-6'>Dashboard</h2> */}
          <Outlet ></Outlet>
         
        
        </div> 
        <div class="drawer-side">
          <label htmlFor="dashboard-sidebar" class="drawer-overlay"></label> 

        
          {/* {console.log(users)} */}
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

          <li> <Link to="/dashboard">My Profile <img className='mt-1' src={arrow}alt=""></img></Link></li>
           {
          (userInfo.role!=='admin') && 
            <>
              
            <li><Link to="/dashboard/addReview">Add Review <img className='mt-1' src={arrow}alt=""></img></Link></li>
            <li><Link to="/dashboard/myOrders">My Orders <img className='mt-1' src={arrow}alt=""></img></Link></li>
              
            </>
            
          }

          {
          (userInfo.role==='admin') && 
            <>
                  <li><Link to="/dashboard/manageOrders">Manage All Orders <img className='mt-1' src={arrow}alt=""></img></Link></li>
            <li><Link to="/dashboard/addProduct">Add Product <img className='mt-1' src={arrow}alt=""></img></Link></li>
            <li><Link to="/dashboard/makeAdmin">Make Admin <img className='mt-1' src={arrow}alt=""></img></Link></li>
            <li><Link to="/dashboard/manageProducts">Manage Products <img className='mt-1' src={arrow}alt=""></img></Link></li>
            </>
          }
          </ul>
          

        
        </div>
      </div>
    );
};

export default Dashboard;