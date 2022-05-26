import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form";



const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = data => {
        // console.log(data);
        //  console.log("user",user);
         const name=data.name;
        //  const email=user.email;
         const price=data.price;
         const minimumOrderQuantity=data.minimumOrderQuantity;
         const availableQuantity=data.availableQuantity;
         const image=data.image;
         const description=data.description;
 
         const partsDetails={name,price,minimumOrderQuantity,availableQuantity,image,description};
 
         const url='http://localhost:5000/tools';
 
         fetch(url, {
             method:'POST',
             headers:{
                 'content-type':'application/json'
             },
             body: JSON.stringify(partsDetails)
         })
         .then(res => res.json())
         .then(data =>{          
             toast('New parts added successfully.');            
         })
         
     }

    return (
        <div>
            <p className='text-3xl text-accent'>Add product</p>
            <hr></hr>

            <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                            
                        </label>
                        <input {...register("name", {
                                        required:{
                                            value: true,
                                            message: 'Name is required'
                                        },
                                        
                                })} type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>
                                   }
                                  
                                </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Price</span>
                            
                        </label>
                        <input {...register("price", {
                                        required:{
                                            value: true,
                                            message: 'Price is required'
                                        },
                                        
                                })} type="number" placeholder="Price" className="input input-bordered w-full max-w-xs" />
                                <label className="label">
                                    {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>
                                   }
                                  
                                </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Description</span>
                            
                        </label>
                        <input {...register("description", {
                                        required:{
                                            value: true,
                                            message: 'Description is required'
                                        },
                                        
                                        
                                })} type="text" placeholder=" Description" className="input input-bordered w-full max-w-xs"  />
                                <label className="label">
                                    {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>
                                   }
                                   
                                </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Minimum Order Quantity</span>
                            
                        </label>
                        <input {...register("minimumOrderQuantity", {
                                        required:{
                                            value: true,
                                            message: 'Minimum Order Quantity is required'
                                        },
                                        
                                })} type="number" placeholder="Price" className="input input-bordered w-full max-w-xs" />
                                <label className="label">
                                    {errors.minimumOrderQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minimumOrderQuantity.message}</span>
                                   }
                                  
                                </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                            
                        </label>
                        <input {...register("availableQuantity", {
                                        required:{
                                            value: true,
                                            message: 'Available Quantity is required'
                                        },
                                        
                                })} type="number" placeholder="Available Quantity" className="input input-bordered w-full max-w-xs" />
                                <label className="label">
                                    {errors.availableQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.availableQuantity.message}</span>
                                   }
                                  
                                </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Image Link</span>
                            
                        </label>
                        <input {...register("image", {
                                        
                                        
                                        
                                })} type="text" placeholder="Image Link" className="input input-bordered w-full max-w-xs"  />
                                <label className="label">
                                    {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.linkedin.image}</span>
                                   }
                                   
                                </label>
                        </div>
        
      <input className='btn btn-accent w-full max-w-xs' type="submit" value="Add Product" />
    </form>
        </div>
    );
};

export default AddProduct;