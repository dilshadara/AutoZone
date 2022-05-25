import React from 'react';

const ReviewItem = ({reviewItem}) => {

    const {rating, review}=reviewItem;

    return (
        <div class="card bg-base-100 shadow-xl bg-outline card-bordered border-accent">
            <div class="card-body">
                <h2 class="card-title">Customer Rating: {rating}</h2>
                <p>{review}</p>
            
            </div>
</div>
    );
};

export default ReviewItem;