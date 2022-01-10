// import { useContext } from 'react';


import './productItem.css';
import CartContext from './context/CartContext';
import { useContext } from 'react';
const ProductItem = ({item}) => {
  const { addToCart} = useContext(CartContext);
    return (
        <div className='productCard'>
            <h2 className='text_product'>{item.name}</h2>
            <img src={item.image} alt="no image"/>
            <h3 className='price'>{item.price} $</h3>
            <button className='btn' id="btn" onClick={()=>addToCart(item)} > {item.btn} </button>
        </div>
    )
}

export default ProductItem
