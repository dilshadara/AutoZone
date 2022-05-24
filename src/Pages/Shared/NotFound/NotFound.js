import React from 'react';
import PageNotFound from '../../../images/404.jpg';
 
const NotFound = () => {
    return (
        <div className='w-full flex justify-center item-center bg-error h-screen'>
           
                <img style={{height:'400px'}}  src={PageNotFound} alt=""></img>
           
            
        </div>
    );
};

export default NotFound;