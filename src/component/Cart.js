import {useContext } from 'react'
import CartContext from './context/CartContext';
import './cart.css';
import CartItems from './CartItems';
import {v4 as uuidv4} from 'uuid'

import products from '../data';

// let cartItems = [products[0],products[1] ];
// let showCart=1;

function financial(x) {
    return Number.parseFloat(x).toFixed(2);
  }

export const Cart = () => {
     const { showCart , cartItems }  = useContext(CartContext )
     console.log(cartItems);
    return (
        <>
        {  showCart && (
        <div className='cart__wrapper'>
               {
                cartItems.length === 0 ? (<h2 className='no__items'>there is no items</h2>)
                :( 
                    <div>
                    { cartItems.map(item=>(
                    <CartItems item={item} key={uuidv4()}/>
                ))}
                </div>
                
                )
               }
              <span className='total__price'>total price :{financial(cartItems.reduce((amount,item)=>item.price*item.qty +amount,0))}$</span>
        </div> )
     
       }
       </>
    )
}
