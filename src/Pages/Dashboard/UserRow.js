import React from 'react';

const UserRow = ({user}) => {
    const {email,name,address,phone} =user;
    return (
        
               <tr>
        {/* <th>1</th> */}
        <td>{name}</td>
        <td>{email}</td>
        <td>{address}</td>
        <td>{phone}</td>
      </tr>
      
    );
};

export default UserRow;