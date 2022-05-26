import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToolDetail = () => {
    const {toolId}= useParams();
    const [tool,setTool]=useState({});
    const [toolQuantity,setToolQuantity]=useState(0);
    

    const [user] = useAuthState(auth);
    // const [userInfo,setUserInfo]=useState({});
    // setUserInfo(user.email,user.displayName);

    

    const { register, formState: { errors }, handleSubmit } = useForm();

    useEffect( ()=>{
        const url=`https://fierce-cliffs-45144.herokuapp.com/tool/${toolId}`;
        // console.log(url);
        fetch(url)
        .then(res=>res.json())
        .then(data=>setTool(data))

    },[]);

    const onSubmit = data => {
        // console.log(data);
        // console.log("user",user);
        // const name=user.displayName;
        const email=user.email;
        const address=data.address;
        const phone=data.phone;
        const orderQuantity=data.orderQuantity;

        const orderInfo={email,address,phone,orderQuantity};

        const url=`https://fierce-cliffs-45144.herokuapp.com/order`;

        fetch(url, {
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(orderInfo)
        })
        .then(res => res.json())
        .then(data =>{          
                       
            console.log('success',data);
            toast('Order placed successfully');            
        })
        
    }

    return (
        <>
        <div class="hero mt-10">
        <div class="hero-content flex-col lg:flex-row bg-white  w-4/6  justify-items-center">
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

     
      <div className='flex justify-center item-center mb-10 w-full mt-3'>
        <div className="card bg-base-100 shadow-xl w-4/6">
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

                        <div className="form-control w-full flex flex-row max-w-xs mb-2">
                            <label className="label">
                                <span className="label-text">Address: </span>
                                
                            </label>
                            <input {...register("address", {
                                        required:{
                                            value: true,
                                            message: 'address is required'
                                        },
                                        
                                })} type="text" placeholder="Address" className="input input-bordered w-full max-w-xs" />
                                <label className="label">
                                    {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>
                                   }
                                  
                                </label>
                        </div>

                        <div className="form-control w-full flex flex-row max-w-xs">
                            <label className="label">
                                <span className="label-text">Phone: </span>
                                
                            </label>
                            <input {...register("phone", {
                                        required:{
                                            value: true,
                                            message: 'phone is required'
                                        },
                                        
                                })} type="text" placeholder="Phone" className="input input-bordered w-full max-w-xs" />
                                
                                <label className="label">
                                    {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>
                                   }
                                  
                                </label>
                        </div>
                        <div className="form-control w-full max-w-xs flex flex-row">
                            <label className="label">
                                <span className="label-text">Available  Quantity: </span>
                                
                            </label>
                            <label className="label">
                                <span className="label-text">{tool.availableQuantity}</span>
                                
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs flex flex-row">
                            <label className="label">
                                <span className="label-text">Minimum Order Quantity: </span>
                                
                            </label>
                            <label className="label">
                                <span className="label-text">{tool.minimumOrderQuantity}</span>
                                
                            </label>
                        </div>

                        <div className="form-control w-full flex flex-row max-w-xs">
                            <label className="label">
                                <span className="label-text">Order Quantity: </span>
                                
                            </label>
                            <input {...register("orderQuantity", {
                                        required:{
                                            value: true,
                                            message: 'Order Quantity is required'
                                        },
                                        
                                })} type="number" placeholder={tool.minimumOrderQuantity} className="input input-bordered w-full max-w-xs" />
                                
                                <label className="label">
                                    {errors.orderQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.orderQuantity.message}</span>
                                   }
                                  
                                </label>
                        </div>
                        
                        <input className='btn btn-accent w-full max-w-xs mt-2' type="submit" value="Place Order" />
                    </form>
    
                </div>
</div>
</div>
      </>
    );
};

export default ToolDetail;