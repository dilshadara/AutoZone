import React from 'react';
import carousel1 from '../../../images/carousel/auto-banner-5.jpg';
import carousel2 from '../../../images/carousel/auto-banner-6.jpg';
import carousel3 from '../../../images/carousel/auto-banner-8.jpg';
import carousel4 from '../../../images/carousel/auto-banner-9.jpg';import './banner.css';





const Banner = () => {

    let carousel1Text=<><p style={{color:'black', fontWeight:'bold', fontSize:'20px'}}>BUY FROM US AND GET YOUR</p><br></br><p style={{color:'black', fontWeight:'bold', fontSize:'35px'}}>Exciting Bundle</p></>;

   

    return (
        <div className='grid place-items-center '>
        <div className="carousel w-full ">
  <div id="item1" className="carousel-item w-full ">
      
    <img src={carousel1} className="w-full" style={{height:'350px',opacity:'0.75'}} alt=""/>
    <div id="dvText1" className="centered">{carousel1Text}</div>
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src={carousel2} className="w-full" style={{height:'350px',opacity:'0.5'}} alt=""/>
    {/* <div className="centered">{carousel2Text}</div> */}
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src={carousel3} className="w-full" style={{height:'350px',opacity:'0.5'}} alt="" />
    {/* <div className="centered">{carousel3Text}</div> */}
  </div> 
  <div id="item4" className="carousel-item w-full">
    <img src={carousel4} className="w-full" style={{height:'350px',opacity:'0.5',color:'black'}} alt=""/>
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2 top-2">
  <a href="#item1" className="btn btn-xs btn-accent">1</a> 
  <a  href="#item2" className="btn btn-xs btn-accent">2</a> 
  <a href="#item3" className="btn btn-xs btn-accent">3</a> 
  <a href="#item4" className="btn btn-xs btn-accent">4</a>
</div>
</div>
    );
};

export default Banner;