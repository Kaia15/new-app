import React from 'react'
import ItemStyle from './itemcart.module.css'

const Item = ({ id, srcItem, handleDelete, item }) => {
    return (
        <div key={id} className = {ItemStyle.item_container}>
            <div className="form-check" key={id}>
                <input
                id="check"
                type="checkbox"
                
                />
                <label htmlFor="check"> {srcItem['title']} </label>
            </div>
            <p className={ItemStyle.item_style}>ID: {item.id} </p>
            <p className={ItemStyle.item_style}>Quantity: {item.quantity} </p>
            <p className={ItemStyle.item_style}>Price: {item.price} </p>
            <p className={ItemStyle.item_style}>Subtotal: {item.subtotal} </p>
            <button
                onClick={() => handleDelete(id)}>
                Delete
            </button>
        </div>
    )
}

export default Item