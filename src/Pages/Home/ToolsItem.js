import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const ToolsItem = ({tool}) => {
    const {_id,name,price,minimumOrderQuantity,availableQuantity,image} =tool;
    const  {"short-description" : description} = tool;

    const navigate=useNavigate();
    const navigateToPartsDetail = id =>{
        navigate(`/tool/${id}`);

    }

    return (
        <div class="card  bg-base-100 shadow-xl bg-outline card-bordered border-accent">
  <figure><img src={image} alt="parts" /></figure>
  <div class="card-body">
    <div class="card-title flex flex-col">
       
      <p>{name}</p>
     
    </div>
    <p>{description}</p>
    <p>Price: ${price}</p>
    <p>Available Quantity: {availableQuantity}</p>
    <p>Minimum Order Quantity: {minimumOrderQuantity}</p>
    <div class="card-actions justify-center">
        <button onClick={() => navigateToPartsDetail(_id)} class="btn btn-accent w-full max-w-xs">Purchase</button>
    </div>
  </div>
</div>
    );
};

export default ToolsItem;