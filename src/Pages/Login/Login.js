import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate,useLocation } from "react-router-dom";
import SocialLogin from './SocialLogin';
import { useSignInWithEmailAndPassword   } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Login = () => {
   
    const { register, formState: { errors }, handleSubmit } = useForm();

    const navigate = useNavigate();
    const navigateRegister = () => {
      navigate('/register');
    }

    const location =useLocation();
    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let errorElement;

   
    const onSubmit = data => {
        // console.log(data);
        signInWithEmailAndPassword(data.email, data.password);

            
    }

    if (loading ) {
        return <Loading></Loading>;
      } 
    
      if (error) {
        errorElement = <p className='label-text-alt text-red-500'>{error?.message}</p>
      }

      if (user) {
        navigate(from, { replace: true });
      }

    return (
        <div className='h-screen'>
        <div className='flex justify-center item-center mb-10 mt-10'>
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-center text-2xl font-bold text-accent">Login</h2>
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
        
      <input className='btn btn-accent w-full max-w-xs' type="submit" value="Login" />
    </form>
    {errorElement} 
                <div className="divider">OR</div>
                <p className='mb-2 label-text'>New to AutoZone? <Link to="/register" className=' text-accent label-text hover:font-bold' onClick={navigateRegister}>Create New Account</Link></p>
          
                <div className="card-actions justify-center">
                    <SocialLogin></SocialLogin>
                </div>
            </div>
</div>
</div>
</div>
    );
};

export default Login;