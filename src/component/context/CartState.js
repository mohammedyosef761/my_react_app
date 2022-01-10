import {useReducer} from 'react'
import CartReducer from './CartReducer'
import CartContext from './CartContext'
import { ADD_TO_CART, DECREASE, INCREASE, REMOVE_ITEM, SHOW_HIDE_CART } from './Types'



const CartState = ({children}) => {
    const initialState = {
        showCart:false,
        cartItems:[],
    };
    const [state,dispatch] = useReducer(CartReducer, initialState)
   
    const addToCart = (item)=>{
        console.log(item);
        dispatch({type:ADD_TO_CART,payload:item});
    }
    const showHideCart = ()=>{
        dispatch({type:SHOW_HIDE_CART});
    }

    const removeItem = (id)=>{
          dispatch({type:REMOVE_ITEM,payload:id});
    }

    const increase= (item)=>{
        dispatch({type:INCREASE,payload:item})
    }
    const decrease= (item)=>{
        dispatch({type:DECREASE,payload:item})
    }

    return (
        <CartContext.Provider value={{
            showCart : state.showCart,
            cartItems: state.cartItems,
            addToCart,
            removeItem,
            showHideCart,
            increase,
            decrease,
        }}>
        {children}
            
        </CartContext.Provider>
    )
}

export default CartState
