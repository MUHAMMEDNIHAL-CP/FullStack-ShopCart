import React, { useEffect, useState } from 'react'
import CartItem from './CartItem'
import CartSummary from './CartSummary'
import api from '../../api'
import Spinner from '../ui/Spinner'
import useCartData from '../../hooks/useCartData'

const CartPage = ({setNumberCartItems}) => {

    const {cartitems, setCartItems, cartTotal, setCartTotal, loading, tax} = useCartData()


    if(loading) {
        return <Spinner loading={loading} />
    }

    if(cartitems.length < 1){
        return <div className='alert alert-primary' role='alert' style={{ marginTop: '110px', marginBottom: '50px' }}>
            Cart is empty
            </div>
    }

  return (
    <div className='container' style={{height: '70vh', overflow: 'scroll', marginTop: '100px'}} >
        <h5 className='mb-4'>Shopping Cart</h5>
        <div className='row'>
            <div className='col-md-8'>
                {cartitems.map(item => <CartItem key={item.id} 
                item={item} 
                cartitems={cartitems} 
                setCartTotal={setCartTotal} 
                setCartItems={setCartItems}
                setNumberCartItems={setNumberCartItems} />)}
            </div>

            <CartSummary cartTotal={cartTotal} tax={tax} />
        </div>
    </div>
  )
}

export default CartPage