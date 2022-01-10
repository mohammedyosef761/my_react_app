import { SHOW_HIDE_CART,ADD_TO_CART , REMOVE_ITEM ,INCREASE ,DECREASE} from './Types';

import products from '../../data';

const CartReducer = (state,action)=>{
    switch(action.type){
        case SHOW_HIDE_CART:
            return {
                ...state,
                showCart: !state.showCart,
            }
        case ADD_TO_CART :

            action.payload.btn="Done"
            const payl= action.payload
            const item2=state.cartItems.find(ele=>ele._id ===payl._id);
          


            if(!item2){
            return {
                ...state,
                cartItems :[...state.cartItems,action.payload]
            }
        }
        else{
            return{
                ...state
            }
        }
            case REMOVE_ITEM:
                products.map(item=> item._id===action.payload?
                    item.btn="add to cart"
                    :''
                )
                
                // state.cartItems[index].btn;
               
                // return{
                //     ...state,
                //     cartItems:state.cartItems.map(item=>item._id === action.payload
                //         ?{
                //             ...item,
                //             btn:'add to cart'
                //         }
                //         :"Done"
                //         )
                // }
                           
                return{
                    ...state,
                   cartItems: state.cartItems.filter(item=>(
                        item._id !== action.payload
                   ))
                  
                }
            case INCREASE:
                const { payload } = action;
                const item = state.cartItems.find(
                  product => product._id === payload._id,
                );
                console.log(item);
              
                if (item) {
                  return {
                    ...state,
                    cartItems: state.cartItems.map(item => item._id === payload._id
                      ? {
                        ...item,
                        qty: item.qty + 1,
                      }
                      : item
                    ),
                    // totalPrice: state.totalPrice + payload.price,
                  };
                }
              
                return {
                  ...state,
                  cartItems: [...state.cartItems, payload],
                //   totalPrice: state.totalPrice + payload.price,
                };
               
                case DECREASE:
                    const  payloa = action.payload;
                    const item1 = state.cartItems.find(
                        product=>product._id === payloa._id
                    )
                    if(item1 &&item1.qty>1){
                        return{
                            ...state,
                            cartItems: state.cartItems.map(item=>item._id ===payloa._id ?
                                {
                                    ...item1,
                                    qty:item.qty-1,
                                }
                                :item
                                ),
                        }
                    }
                    else if(item1.qty===1){
                        return{
                            ...state,
                            cartItems: state.cartItems.map(item=>item._id ===payloa._id ?
                                {
                                    ...item1,
                                    qty:item.qty,
                                }
                                :item
                                ),
                        }
                    }
                    return {
                        ...state,
                        cartItems:[...state.cartItems , payloa]
                    }
                default:
                    return state
    }

}
export default CartReducer;