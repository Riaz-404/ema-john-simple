import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // const totalPrice = cart.reduce((total, pd) => total + pd.price, 0);

    let totalPrice = 0;

    for(let i = 0; i < cart.length; i++) {
        const product = cart[i];
        totalPrice += product.price;
    }

    let shipping = 0;
    if(totalPrice > 35){
        shipping = 0;
    }
    else if(totalPrice > 15){
        shipping = 4.99;
    }
    else if(totalPrice > 0){
        shipping = 12.99;
    }
    
    const tax = (totalPrice/10).toFixed(2);
    

    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items ordered: {cart.length}</p>
            <p>Product Price: {totalPrice}</p>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p><small>Tax + VAT: {tax}</small></p>
            <p>Total Price: {totalPrice + shipping + Number(tax)}</p>
        </div>
    );
};

export default Cart;