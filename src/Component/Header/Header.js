import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='header-name'>
                <h4>FoodPanda</h4>
            </div>
            <div className='header-details'>
                <a href="/home">Home</a>
                <a href="/inventory">Inventory</a>
                <a href="/allProducts">All Products</a>
                <a href="/about">About</a>
            </div>
        </div>
    );
};

export default Header;