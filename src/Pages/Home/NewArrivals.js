import React, { useState,useEffect } from 'react';
import NewItem from './NewItem';


const NewArrivals = () => {
    const [tools,setTools] =useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/tools')
        .then(res=>res.json())
        .then(data=>setTools(data))
    } ,[]);

    let tools3=tools.slice(0,3);

    return (
        <div className='mb-10'>
            <p className="text-3xl  text-center mb-10 font-medium uppercase">New <span className='text-accent'>Arrivals</span></p>

            <div className='grid grid-cols-1 lg:grid-cols-3  gap-10 px-20 '>
                {
                    tools3.map(tool => <NewItem key={tool._id} tool={tool}></NewItem>)
                }
            </div>
        </div>
    );
};

export default NewArrivals;