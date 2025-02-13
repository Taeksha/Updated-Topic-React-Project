import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/slices/CartSlice';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Your Cart</h2>
      <div className="product-grid"  style={{display:"flex", justifyContent:"space-around", alignContent:"center", flexWrap:"wrap"}}>
      {cartItems.map(item => (
       <div key={item.id} style={{border: "1px solid black" , height:"600px" ,width:"400px",padding:"30px",margin:"30px"}}>
       <img src={item.image} style={{width:"400px",height:"500px"}} />
       <h3>{item.title}</h3>
       <p>Quantity: {item.quantity}</p>
       <button onClick={() => dispatch(removeFromCart(item.id))}>
         Remove
       </button>
     </div>
      ))}
      </div>
    </div>
  );
};

export default Cart;