import React from 'react';
import Banner from './Banner/Banner';
import BusinessSummary from './BusinessSummary';
import HotOffer from './HotOffer';
import NewArrivals from './NewArrivals';
import Reviews from './Reviews';
import Tools from './Tools';



const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <Tools></Tools>
            <NewArrivals></NewArrivals>
            <HotOffer></HotOffer>
            <Reviews></Reviews>
            <BusinessSummary></BusinessSummary>
            
        </div>
    );
};

export default Home;