import {useContext} from 'react'
import CartContext from './context/CartContext'
import './Navbar.css'


const Navbar = () => {
    const { showHideCart,cartItems } =useContext(CartContext)
    return (
        <nav >
            <h1>shopping card</h1> 
            <div className='cart-btn'>
            <span >
                  <i className="fa fa-shopping-cart fa-4x" aria-hidden="true" onClick={showHideCart}></i>
            </span>
            <span className='number'>{cartItems.length}</span>
            </div>

        </nav>
    )
}

export default Navbar
