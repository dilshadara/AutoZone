import React, { useState,useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import {useQuery} from 'react-query';
import Loading from '../Shared/Loading';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyProfile = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [user] = useAuthState(auth);
    // const [name, setName] = useState('');

    const [userInfo,setUserInfo]=useState({
    //    name:"name",
    //    education:"abc",
    //    city:"city",
    //    phone:"phone",
    //    linkedin:"abc"
    });

    // const handleNameChange = (e) => {
        // console.log(e.target.value)
        // console.log(userInfo)
        // const{name, ...rest} = userInfo;
        // // console.log(name,rest);
        // const newName=e.target.value;
        // const newUser={name:newName, ...rest};
        // console.log(newUser);
        // setUserInfo(newUser);
    //     setName(e.target.value);
    //   };
   
    useEffect( ()=>{
        const url=`http://localhost:5000/user/${user.email}`;
        // console.log(url);
        fetch(url)
        .then(res=>res.json())
        .then(data=>setUserInfo(data))

    },[userInfo]);



    

//     const {data: userInfo,isLoading, refetch}=useQuery('userInfo', () => 
//         fetch(`http://localhost:5000/user/${user.email}`,{
//             method:'GET'
//         }).then(res => res.json()));

//   if(isLoading){
//       return <Loading></Loading>
//   }

    const onSubmit = data => {
       console.log(data);
        console.log("user",user);
        const name=data.name;
        const email=user.email;
        const city=data.city;
        const phone=data.phone;
        const linkedin=data.linkedin;
        const education=data.education;

        const userDetails={name,email,city,phone,linkedin,education};

        const url=`http://localhost:5000/user/${email}`;

        fetch(url, {
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(userDetails)
        })
        .then(res => res.json())
        .then(data =>{          
                //    refetch();    
            console.log('success',data);
            setUserInfo(userDetails);
            toast('Your profile info saved / updated successfully.');            
        })
        
    }

    return (
        <div className='mb-5'>
            <p className='text-3xl text-accent'>My Profile</p>
            <hr className='bg-accent mb-2 mt-2' ></hr>
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
                                        
                                })} type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" value={user.displayName} />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>
                                   }
                                  
                                </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                            
                        </label>
                        <label className="label">
                            <span className="label-text">{user.email}</span>
                            
                        </label>
                        
                        
                        </div>
                        <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Education</span>
                            
                        </label>
                        <input {...register("education", {
                                        required:{
                                            value: true,
                                            message: 'Education is required'
                                        },
                                        
                                        
                                })} type="text" placeholder=" Education" className="input input-bordered w-full max-w-xs" value={userInfo.education} />
                                <label className="label">
                                    {errors.education?.type === 'required' && <span className="label-text-alt text-red-500">{errors.education.message}</span>
                                   }
                                   
                                </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">City / District</span>
                            
                        </label>
                        <input {...register("city", {
                                        required:{
                                            value: true,
                                            message: 'City is required'
                                        },
                                        
                                        
                                })} type="text" placeholder=" City / District" className="input input-bordered w-full max-w-xs" value={userInfo.city} />
                                <label className="label">
                                    {errors.city?.type === 'required' && <span className="label-text-alt text-red-500">{errors.city.message}</span>
                                   }
                                   
                                </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Phone No</span>
                            
                        </label>
                        <input {...register("phone", {
                                        required:{
                                            value: true,
                                            message: 'Phone is required'
                                        },
                                        
                                        
                                })} type="text" placeholder="Phone" className="input input-bordered w-full max-w-xs" value={userInfo.phone} />
                                <label className="label">
                                    {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>
                                   }
                                   
                                </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">LinkedIn Profile</span>
                            
                        </label>
                        <input {...register("linkedin", {
                                        
                                        
                                        
                                })} type="text" placeholder="LinkedIn Profile" className="input input-bordered w-full max-w-xs" value={userInfo.linkedin} />
                                <label className="label">
                                    {errors.linkedin?.type === 'required' && <span className="label-text-alt text-red-500">{errors.linkedin.message}</span>
                                   }
                                   
                                </label>
                        </div>
        
      <input className='btn btn-accent w-full max-w-xs' type="submit" value="Save / Update" />
    </form>
        </div>
    );
};

export default MyProfile;