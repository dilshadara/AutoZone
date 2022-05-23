import React from 'react';
import Banner from './Banner/Banner';
import BusinessSummary from './BusinessSummary';


const Home = () => {
    return (
        <div className='h-screen'>
            <Banner></Banner>
            <BusinessSummary></BusinessSummary>
            
        </div>
    );
};

export default Home;