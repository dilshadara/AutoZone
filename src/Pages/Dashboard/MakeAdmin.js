import React from 'react';
import {useQuery} from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const MakeAdmin = () => {

    const {data: users,isLoading}=useQuery('users', () => 
    fetch('https://fierce-cliffs-45144.herokuapp.com/users',{
        method:'GET'
    }).then(res => res.json()));

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
            <p className='text-3xl text-accent'>All Users : {users.length}</p>

            <div class="overflow-x-auto mt-5">
  <table class="table w-full">
   
    <thead >
      <tr >
       
        <th className='bg-accent'>Name</th>
        <th className='bg-accent'>Email</th>
        <th className='bg-accent'>Address</th>
        <th className='bg-accent'>Phone No</th>
        <th className='bg-accent'>Admin</th>
      
      </tr>
    </thead>
    <tbody>
    {
            users.map(user=><UserRow
            key={user._id}
            user={user}></UserRow>)
            }
    </tbody>

  </table>
</div>
        </div>
    );
};

export default MakeAdmin;