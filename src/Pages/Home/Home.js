import React from 'react';
import Banner from './Banner/Banner';
import BusinessSummary from './BusinessSummary';
import Reviews from './Reviews';



const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <Reviews></Reviews>
            <BusinessSummary></BusinessSummary>
            
        </div>
    );
};

export default Home;