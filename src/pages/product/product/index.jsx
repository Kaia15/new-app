import React, { useEffect, useMemo, useState } from 'react' 
import { useContext } from 'react'
import { StoreContext } from '../../../context/context'
import AddToTotal from './add/add'
import { items } from '../../../data/list'
import Count from './countbutton/count'
import Cart from '../../cart/cart'
import { unstable_batchedUpdates } from 'react-dom'

const Product = ({id}) => {
    // console.log(items[id])
    // console.log(typeof id)
    const [quantity, setQuantity] = useState(0);
    const [subtotal, setSubtotal] = useState(0);
    const { cart, setCart } = useContext(StoreContext)
    const [item, setItem] = useState({})
    /*const [cart, setCart] = useState([])
    const a = useContext(StoreContext)
    useEffect(() => setCart(a), [])
    */
    // const [a,b] = useContext(StoreContext)
    // console.log(a,b)

    const handlePlus = () => {
        setQuantity(prev => {
        return prev + 1
        })
    }

    const handleMinus = () => {
        if (quantity <= 0) setQuantity(0)
        else setQuantity(prev => {
            return prev - 1
        })
    }
    const handleCart = () =>  {
        // setCart([1,2])
        // b(() => {return [1,2,3]})

        setCart(prev => {
           let matched = item['id']
           let updated = prev.filter(i => i['id'] !== matched)
           let a = prev.filter(i => i['id'] === matched)
           if (typeof a[0] !== 'undefined') {
            a[0]['quantity'] += item['quantity']
            a[0]['subtotal'] += item['subtotal']
            updated.push(a[0])
           } else {
            updated = [...updated,item]
           }
           return updated
        })
        // setQuantity(0)
    }

    useMemo(() => {
        setSubtotal(quantity * items[id].price)
        setItem(prev => {
            return {...prev, id: id, price: items[id].price, quantity: quantity, subtotal: subtotal}
        })
    }, [id, quantity, subtotal])
    // console.log(item)
    // console.log(cart)
    
    // console.log(quantity)
    
    return (
        <div>
            <Count quantity={quantity} handleMinus={handleMinus} handlePlus={handlePlus}/>
            <AddToTotal handleCart={handleCart} />
        </div>
        
    )
}

export default Product