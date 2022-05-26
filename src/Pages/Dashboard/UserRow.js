import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserRow = ({user}) => {
    const {email,name,address,phone,role} =user;

    const createAdmin = () =>{
        fetch(`https://fierce-cliffs-45144.herokuapp.com/users/admin/${email}`,{
            method:'PUT'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            toast("Admin successfully created");
        });
    }

    return (
        
               <tr>
        
        <td>{name}</td>
        <td>{email}</td>
        <td>{address}</td>
        <td>{phone}</td>
        <td>
            {
                role!=='admin' &&
                 <button onClick={createAdmin} className='btn btn-xs btn-outline'>Create New Admin</button>
            }
           </td>
       
      </tr>
      
    );
};

export default UserRow;