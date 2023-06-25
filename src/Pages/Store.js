import React from 'react'
import Header from '../Components/Header/Header'
import Productslist from '../Components/Products/Productslist'
import CartState from '../store/CartState'

export default function Store() {
  return (
    <CartState>

    <Header/>
    <Productslist/>
    </CartState>
  )
}
