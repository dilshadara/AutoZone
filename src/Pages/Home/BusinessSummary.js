import React from 'react';
import { BsEmojiSmileFill,BsCoin,BsHandThumbsUpFill,BsTrophyFill } from "react-icons/bs";
import { IconContext } from "react-icons";

const BusinessSummary = () => {
    return (
        <div className='mt-10'>
            <p className="text-3xl  text-center mb-10 font-medium uppercase">We make the <span className='text-accent'>difference</span></p>
       
    <div className="mb-10 flex justify-center gap-5">
        
        <div class="card w-80 bg-outline card-bordered border-accent shadow-xl">
            <figure class="px-10 pt-10">
            <IconContext.Provider value={{ verticalAlign: 'middle',
                        color: '#FDBA55',
                        size: '2em' }}>
                            <div>
                                <BsEmojiSmileFill />
                            </div>
                        </IconContext.Provider>
            </figure>
            <div class="card-body items-center text-center">
                <p className="card-title text-2xl">1000+</p>
                <p className="text-lg font-medium">Top positive reviews from customer</p>
            </div>       
        </div>
        <div class="card w-80 bg-outline card-bordered border-accent shadow-xl">
            <figure class="px-10 pt-10">
            <IconContext.Provider value={{ verticalAlign: 'middle',
                        color: '#FDBA55',
                        size: '2em' }}>
                            <div>
                                <BsCoin />
                            </div>
                        </IconContext.Provider>
            </figure>
            <div class="card-body items-center text-center">
                <p className="card-title text-2xl">10M+</p>
                <p className="text-lg font-medium">Yearly Revenew</p>
            </div>       
        </div>
        <div class="card w-80 bg-outline card-bordered border-accent shadow-xl">
            <figure class="px-10 pt-10">
            <IconContext.Provider value={{ verticalAlign: 'middle',
                        color: '#FDBA55',
                        size: '2em' }}>
                            <div>
                                <BsTrophyFill />
                            </div>
                        </IconContext.Provider>
            </figure>
            <div class="card-body items-center text-center">
                <p className="card-title text-2xl">Champion</p>
                <p className="text-lg font-medium">as per market survey</p>
            </div>       
        </div>
          
        </div>

</div>
    );
};

export default BusinessSummary;