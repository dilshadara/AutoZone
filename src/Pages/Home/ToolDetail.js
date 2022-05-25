import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const ToolDetail = () => {
    const {toolId}= useParams();
    const [tool,setTool]=useState({});
    const [toolQuantity,setToolQuantity]=useState(0);

    const [user] = useAuthState(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();

    useEffect( ()=>{
        const url=`http://localhost:5000/tool/${toolId}`;
        // console.log(url);
        fetch(url)
        .then(res=>res.json())
        .then(data=>setTool(data))

    },[toolQuantity]);

    const onSubmit = data => {
        // console.log(data);
        
    }

    return (
        <>
        <div class="hero mt-10">
        <div class="hero-content flex-col lg:flex-row bg-white  w-full  justify-items-center">
          <img src={tool.image} alt=""/>
          <div>
            <h1 class="text-2xl font-bold">{tool.name}</h1>
            <p class="py-6">{tool.description}</p>
            <p class="py-6">Unit Price: {tool.price}</p>
            <p class="py-6">Minimum Order Quantity: {tool.minimumOrderQuantity}</p>
            <p class="py-6">Available Quantity: {tool.availableQuantity}</p>
          </div>
        </div>
        
      </div>

     
      <div className='flex justify-center item-center mb-10 w-full mt-10'>
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-center text-2xl font-bold text-accent">Place the order</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full max-w-xs flex flex-row">
                            <label className="label">
                                <span className="label-text">Email: </span>
                                
                            </label>
                            <label className="label">
                                <span className="label-text">{user.email}</span>
                                
                            </label>
                        </div>
                        <div className="form-control w-full flex flex-row max-w-xs">
                            <label className="label">
                                <span className="label-text">Name: </span>
                                
                            </label>
                            <label className="label">
                                <span className="label-text">{user.displayName}</span>
                                
                            </label>
                        </div>
                        
                     
        
      <input className='btn btn-accent w-full max-w-xs' type="submit" value="Place Order" />
    </form>
    
            </div>
</div>
</div>
      </>
    );
};

export default ToolDetail;