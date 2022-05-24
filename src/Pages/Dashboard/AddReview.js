import React from 'react';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddReview = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    // const [user] = useAuthState(auth);

    const onSubmit =data=>{
console.log(data);
    }

    return (
        <>
        <p className='text-3xl text-accent '>Add Reviews</p>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs ">
        
            <div className='flex'>
            <p className="label-text  mt-2 text-base">Rating:</p>
            <label htmlFor="rating1" className='mx-2 mt-2'>
                    <input
                        {...register("rating")}
                        type="radio"
                        name="rating"
                        value="1"
                        id="rating1"
                        className='radio radio-accent'
                    />
                    <p className='label-text text-base mx-2'>1</p>
                </label>
            <label htmlFor="rating2" className='mx-2 mt-2'>
                    <input
                        {...register("rating")}
                        type="radio"
                        name="rating"
                        value="2"
                        id="rating2"
                        className='radio radio-accent'
                    />
                    <p className='label-text text-base mx-2'>2</p>
                </label>
                <label htmlFor="rating3" className='mx-2 mt-2'>
                    <input
                        {...register("rating")}
                        type="radio"
                        name="rating"
                        value="3"
                        id="rating3"
                        className='radio radio-accent'
                    />
                    <p className='label-text text-base mx-2'>3</p>
                </label>
                <label htmlFor="rating2" className='mx-2 mt-2'>
                    <input
                        {...register("rating")}
                        type="radio"
                        name="rating"
                        value="4"
                        id="rating4"
                        className='radio radio-accent'
                    />
                    <p className='label-text text-base mx-2'>4</p>
                </label>
                <label htmlFor="rating2" className='mx-2 mt-2'>
                    <input
                        {...register("rating")}
                        type="radio"
                        name="rating"
                        value="5"
                        id="rating5"
                        className='radio radio-accent'
                    />
                    <p className='label-text text-base mx-2'>5</p>
                </label>
            </div>
            
                
      
            </div>
            <div className="form-control w-full max-w-xs">
            <label className="label">
                <span className="label-text text-base">Review</span>
                
            </label>
            <input {...register("review", {
                            required:{
                                value: true,
                                message: 'Review is required'
                            },
                           
                            
                    })} type="text" placeholder="Your Review" className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        {errors.review?.type === 'required' && <span className="label-text-alt text-red-500">{errors.review.message}</span>
                       }
                     
                    </label>
            </div>

<input className='btn btn-accent w-full max-w-xs' type="submit" value="Add REview" />
</form>
</>
    );
};

export default AddReview;