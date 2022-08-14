import React from 'react'
import { useState, useReducer, useEffect } from 'react'
import { setItem, addItem } from '../cart/actions/actions'
import reducer, {initState} from '../cart/reducer/reducer'
import { items } from '../../data/list'
import { StoreContext } from '../../context/context'
import { useContext } from 'react'
import RenderCart from './index'


const Cart = () => {
    const {cart, setCart} = useContext(StoreContext)
    console.log(cart)
    const handleDelete = (id) => {
        setCart(prev => {
            let afterDelete = prev.filter((item) => item['id'] !== id)
            return afterDelete
        })
    }
    const handleClearCart = () => {
        setCart([])
    }
    return (
    <RenderCart cart = {cart} handleDelete = {handleDelete} handleClearCart = {handleClearCart}/>
    )
}

export default Cart