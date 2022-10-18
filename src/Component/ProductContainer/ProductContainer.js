import React, { useEffect, useState } from 'react';
import './ProductContainer.css'
import Product from '../Product/Product'
import Cart from '../Cart/Cart';

const ProductContainer = () => {
    const [meals, setMeals ] = useState([]);
    

    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=a`)
        .then(res => res.json())
        .then(data => setMeals(data.meals))
        .catch(error => console.log(error))
    },[])
 
    return (
        <div className='products-container'>
            <div className='products-display'>
            {
                meals.map(meal => <Product 
                    meal={meal} key={meal.idMeal}
                    ></Product>)
            }
                
            </div>
            <div className='cart-display'>
               <Cart></Cart>
            </div>
        </div>
    );
};

export default ProductContainer;