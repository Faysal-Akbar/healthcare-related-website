import React from 'react';
import Banner from '../Banner/Banner';
import Department from '../Department/Department';
import LatestNews from '../LatestNews/LatestNews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Department></Department>
            <LatestNews></LatestNews>
        </div>
    );
};

export default Home;