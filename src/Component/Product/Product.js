import './Product.css'
import React from 'react';

const Product = ({meal,handleOnClick}) => {
    const {strMealThumb,strCategory,strMeal,idMeal} = meal;
    // console.log(handleOnClick)
  
    return (
        <div className='all-products'>
            <div className='product'>
           <img src={strMealThumb} alt="" />
           <div className="product-details">
                <h2>{strMeal}</h2>
                <p>Category : {strCategory}</p>
           </div>
           
           <button onClick={()=>handleOnClick(idMeal)}  className='btn-addToCart'>
            <p>Add To Cart</p>
           </button>
          
        </div>
        </div>
        
    );
};

export default Product;