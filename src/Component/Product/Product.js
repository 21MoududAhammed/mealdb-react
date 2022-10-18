import './Product.css'
import React from 'react';

const Product = (props) => {
    const {strMealThumb,strCategory,strMeal} = props.meal;
  
    return (
        <div className='all-products'>
            <div className='product'>
           <img src={strMealThumb} alt="" />
           <div className="product-details">
                <h2>{strMeal}</h2>
                <p>Category : {strCategory}</p>
           </div>
           <button className='btn-addToCart'>
            <p>Add To Cart</p>
           </button>
          
        </div>
        </div>
        
    );
};

export default Product;