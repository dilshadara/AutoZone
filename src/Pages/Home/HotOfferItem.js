import React from 'react';
import saleLogo from '../../images/parts/sale.gif';

const HotOfferItem = ({tool}) => {
    const {name,image,price} =tool;
    return (
        <div class="card  bg-base-100 shadow-xl bg-outline card-bordered border-accent">
             <div class="badge badge-accent">25% Off</div>
             <img width='80px' src={saleLogo} alt=""></img>
            <figure><img width='200px' src={image} alt="parts" /></figure>
            <div class="card-body">
                <div class="card-title flex flex-col">
       
                    <p>{name}</p>
     
                </div>
    
                <p>Price: ${price}</p>
  </div>
</div>
    );
};

export default HotOfferItem;