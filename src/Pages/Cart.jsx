import React, { useContext } from 'react'
import CartItems from '../Components/CartItems/CartItems'
import { ShopContext } from '../Context/ShopContext'


export default function Cart() {
  const {all_product,cartItems,removeFromCart} = useContext(ShopContext)
  return (
    <div>
      <CartItems/>
    </div>
  )
}
