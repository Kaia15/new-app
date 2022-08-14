import React from 'react'
import { items } from '../../data/list'
import Item from './itemcart/itemcart'
import ClearCart from './clearcartbutton/clearcart'

const RenderCart = ({cart, handleDelete, handleClearCart}) => {
    return (
    <div>
        {cart.map((item,i) => {
            let id = item.id
            let srcItem = items[id]
            return (
            <Item key = {id} id = {id} srcItem = {srcItem} handleDelete = {handleDelete} item = {item} />
            )
        })}
        <ClearCart handleClearCart={handleClearCart}/>
    </div>
    )
}

export default RenderCart