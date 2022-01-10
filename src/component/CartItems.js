
import {useContext} from 'react'
import './cartItems.css'
import CartContext from './context/CartContext';
const CartItems = ({item}) => {

  const {removeItem,increase,decrease} = useContext(CartContext)
  
  
    console.log(item);
    return (
        <div className='flex'>
        
        <div className='cart__items'>
         
            <h3 className='name'>{item.name}</h3>
            <img src={item.image} alt="no items" />

        </div>
        <div className='cart__button'>
            <button className='increase' onClick={()=>increase(item)}>increase</button>
            <br/>
            <span>{item.qty}</span>
            <br/>
            <button className='decrease' onClick={()=>decrease(item)}>decrease</button>
            <br/>
            <button className='remove' onClick={()=>removeItem(item._id)}>remove</button>
        </div>

        </div>
    )
}

export default CartItems
