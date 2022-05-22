import React from 'react';

const Footer = () => {
    return (
        <div className='bg-secondary py-5 px-20'>
        
        <div className=" md:flex flex-row ">
            <div className="basis-1/4 md:basis-1/3 px-10">
                <p className='text-lg font-bold text-base-100'>AutoZone</p>
                <p className='text-base-100'>Banani, Baridhara, Bashundhara</p>
                <p className='text-base-100'>01712000000</p>
                <p className='text-base-100'>Sun-Thurs 9:00 to 5:00</p>
                <p className='text-base-100'>support@autozone.com</p>
            </div>
  <div className="basis-1/4 md:basis-1/3">
  <p className='text-lg font-bold text-white'>Information</p>
                <p className='text-neutral hover:text-accent'>About Us</p>
                <p className='text-neutral hover:text-accent'>Privacy Policy</p>
                <p className='text-neutral hover:text-accent'>Terms & Conditions</p>
                <p className='text-neutral hover:text-accent'>Contact Us</p>
                <p className='text-neutral hover:text-accent'>Order & Return Policy</p>
  </div>
  <div class="basis-1/2 md:basis-1/3">
  <p className='text-lg font-bold text-white '>Why Consider Us</p>
      <ul className='list-disc px-6 '>
          <li className='text-neutral hover:text-accent'>Quick Support</li>
          <li className='text-neutral hover:text-accent'>Availability</li>
          <li className='text-neutral hover:text-accent'>Secure Payment from anywhere</li>
          <li className='text-neutral hover:text-accent'>Easy return Policy</li>
          <li className='text-neutral hover:text-accent'>Warranty</li>
      </ul>
  </div>
        </div>
        <div>
        <p className='text-lg font-bold text-base-100 text-center my-5'>&copy; AutoZone all rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;