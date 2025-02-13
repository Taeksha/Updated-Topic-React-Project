import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const cartCount = useSelector(state => state.cart?.items?.length || 0);

  return (
    <nav style={{display:"flex", justifyContent:"space-evenly", alignItems:"center",width:"1900px", height:"100px", backgroundColor:"white", margin:"0px"}}>
      <Link to='/'><img src='https://www.westside.com/cdn/shop/files/w-logo.png?v=1687335574&width=140'></img></Link>
      <Link to="/Men" style={{textDecoration:"none", color:"black"}}>MEN</Link>
      <Link to="/products" style={{textDecoration:"none", color:"black"}}>WOMEN</Link>
      <Link to="/About" style={{textDecoration:"none", color:"black"}}>CHILDREN</Link>
      <Link to="/cart" style={{textDecoration:"none", color:"black"}}>Cart ({cartCount})</Link>
    </nav>
  );
};

export default Navbar;