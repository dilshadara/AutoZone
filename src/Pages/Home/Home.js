import React from 'react';
import Banner from './Banner/Banner';
import BusinessSummary from './BusinessSummary';
import Review from './Review';


const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <Review></Review>
            <BusinessSummary></BusinessSummary>
            
        </div>
    );
};

export default Home;