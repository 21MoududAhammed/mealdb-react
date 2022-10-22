const addToDB = ( id) =>{
    const shoppingCart = {};
    let cart = {};
    let localStorageShopingCart =JSON.parse(localStorage.getItem('shopping-cart')) ;

    if(!localStorageShopingCart ){
        const shoppingCart = {};
        shoppingCart[`${id}`] = 1;
        cart = JSON.stringify(shoppingCart);
    } 
    else if(!localStorageShopingCart[`${id}`]){
        localStorageShopingCart[`${id}`] = 1;
        cart = JSON.stringify(localStorageShopingCart);
    }
    else{
        localStorageShopingCart[`${id}`] += 1;
         cart = JSON.stringify(localStorageShopingCart);
    }
    localStorage.setItem('shopping-cart', cart);
}

export{ addToDB }