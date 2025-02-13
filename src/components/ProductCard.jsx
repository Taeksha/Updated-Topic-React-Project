import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/CartSlice';
import description from './description';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="product-card" style={{border: "1px solid black" , height:"650px" ,width:"400px",padding:"30px",margin:"30px"}}>
      <img src={product.image} onClick={() => dispatch(description(product))} alt={product.title} style={{width:"400px",height:"500px"}} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <button onClick={() => dispatch(addToCart(product))} style={{padding:"10px", backgroundColor:"black" , color:"white" ,borderRadius:"5px" }}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;