import React,{useState} from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from './SocialLogin';
import { useCreateUserWithEmailAndPassword   } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [err, setErr]=useState('');
    const navigate = useNavigate();
    const navigateRegister = () => {
      navigate('/login');
    }

    // const location =useLocation();
    // let from = location.state?.from?.pathname || "/";

    const [
        createUserWithEmailAndPassword,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    let errorElement;

   
    const onSubmit = data => {
        // console.log(data);
        if(data.password !== data.confirmPassword){
            setErr('Password does not match.');
            // console.log(password,confirmPassword);
            return;
          }

        createUserWithEmailAndPassword(data.email, data.password);
        navigate('/');
    }

    if (loading ) {
        return <Loading></Loading>;
      } 
    
      if (error) {
        errorElement = <p className='label-text-alt text-red-500'>{error?.message}</p>
      }

    //   if (user) {
    //     navigate(from, { replace: true });
    //   }


    return (
        <div className='h-screen'>
        <div className='flex justify-center item-center mb-10 mt-10'>
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-center text-2xl font-bold text-accent">Register</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                            
                        </label>
                        <input {...register("email", {
                                        required:{
                                            value: true,
                                            message: 'Email is required'
                                        },
                                        pattern: {
                                        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                        message: 'Please provide a valid email address' 
                                        }
                                })} type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs" />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>
                                   }
                                   {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>
                                   }
                                </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                            
                        </label>
                        <input {...register("password", {
                                        required:{
                                            value: true,
                                            message: 'Password is required'
                                        },
                                        minLength:{
                                            value:6,
                                            message:'Password should be 6 characters long'
                                        }
                                        
                                })} type="password" placeholder="Your Password" className="input input-bordered w-full max-w-xs" />
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>
                                   }
                                   {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>
                                   }
                                </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                            
                        </label>
                        <input {...register("confirmPassword", {
                                        required:{
                                            value: true,
                                            message: 'Confirm password is required'
                                        },
                                        minLength:{
                                            value:6,
                                            message:'Password should be 6 characters long'
                                        }
                                        
                                })} type="password" placeholder="Your Confirm Password" className="input input-bordered w-full max-w-xs" />
                                <label className="label">
                                    {errors.confirmPassword?.type === 'required' && <span className="label-text-alt text-red-500">{errors.confirmPassword.message}</span>
                                   }
                                   {errors.confirmPassword?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.confirmPassword.message}</span>
                                   }
                                </label>
                        </div>
        
      <input className='btn btn-accent w-full max-w-xs' type="submit" value="Register" />
    </form>
     {errorElement} 
     <p className='label-text-alt text-red-500'>{err}</p>
     
                <div className="divider">OR</div>
                <p className='mb-2 label-text'>Already have an account in AutoZone? <Link to="/login" className=' text-accent label-text hover:font-bold' onClick={navigateRegister}>Log In</Link></p>
           
                <div className="card-actions justify-center">
                    <SocialLogin></SocialLogin>
                </div>
            </div>
</div>
</div>
</div>
    );
};

export default Register;