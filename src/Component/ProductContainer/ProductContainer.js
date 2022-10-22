import React, { useEffect, useState } from 'react';
import './ProductContainer.css'
import Product from '../Product/Product'
import Cart from '../Cart/Cart';
import Search from '../Search/Search';
// import { click } from '@testing-library/user-event/dist/click';
import { addToDB } from '../Utilities/Utilities';

const ProductContainer = () => {
    const [meals, setMeals ] = useState([]);
    const [character, setCharacter] = useState('');
    const getData = (e)=>{
            setCharacter(e.target.value)
    }
    const handleClick =()=>{
        getDataFromApi();
        setCharacter('');
    }
    const addDataToCart = (id) =>{
        // console.log(productName, id);
        addToDB(id);

    }
    const handleOnClick =(idMeal)=>{
        const clickedMeal= meals.find(meal => idMeal === meal.idMeal)
        addDataToCart(idMeal)
    }
    
    const getDataFromApi =()=>{
        // fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${character}`)
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${character}`)
        .then(res => res.json())
        .then(data => setMeals(data.meals))
        .catch(error => console.log(error))
    }
 
    return (
        <div>
            <div>
                <Search getData={getData} handleClick={handleClick} character={character} ></Search>
            </div>
            <div className='products-container'>
                <div className='products-display'>
                {
                    meals.map(meal => <Product 
                        meal={meal} key={meal.idMeal}
                        handleOnClick={handleOnClick}
                        ></Product>)
                }
                    
                </div>
                <div className='cart-display'>
                <Cart></Cart>
                </div>
            </div>
        </div>
        
    );
};

export default ProductContainer;