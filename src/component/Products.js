import React from 'react'
import products from '../data'
import { Cart } from './Cart';
import ProductItem from './ProductItem';
import './products.css'

const Products = () => {
    console.log(products);
    return (
        <div className='products'>
         <Cart/>
        {products.map(item=>{
            return(
                <ProductItem  item={item} key={item._id}/>
            )
        })}
       
            
        </div>
    )
}

export default Products
