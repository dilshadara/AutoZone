import React, { useState,useEffect } from 'react';
import ToolsItem from './ToolsItem';

const Tools = () => {
    const [tools,setTools] =useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/tools')
        .then(res=>res.json())
        .then(data=>setTools(data))
    } ,[]);

    let tools6=tools.slice(0,6);

    return (
        <div className='mb-10'>
           <p className='text-3xl text-center mb-10 font-medium uppercase' >Available <span className='text-accent'>Parts</span></p>

           <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-20 '>
                {
                    tools6.map(tool => <ToolsItem key={tool._id} tool={tool}></ToolsItem>)
                }
            </div>
        </div>
    );
};

export default Tools;