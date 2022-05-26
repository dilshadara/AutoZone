import React, { useState,useEffect } from 'react';
import ReviewItem from './ReviewItem';

const Reviews = () => {

    const [reviews,setReviews] =useState([]);

    useEffect(() =>{
        fetch('https://fierce-cliffs-45144.herokuapp.com/review')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    } ,[]);

    return (
        <div>
            <p className='text-3xl text-center mb-10 font-medium uppercase' >Customer <span className='text-accent'>Review</span></p>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-20 '>
                {
                    reviews.map(reviewItem => <ReviewItem key={reviewItem._id} reviewItem={reviewItem}></ReviewItem>)
                }
            </div>
        </div>
    );
};

export default Reviews;