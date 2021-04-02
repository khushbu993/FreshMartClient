import React from 'react';
import Header from '../Header/Header';
import Products from '../Products/Products';
import './Home.css';

const Home = () => {
    return (
        <div className="home container">
            <Header></Header>
            <Products></Products>
        </div>
    );
};

export default Home;