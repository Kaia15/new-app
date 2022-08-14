import React from 'react'

const Count = ({quantity, handlePlus, handleMinus, handleSubTotal}) => {
    // console.log(typeof quantity)
    // console.log(quantity)
    return (
    <div>
        <button
        onClick = {handlePlus}>
        +
        </button>
        <button> {quantity} </button>
        <button
        onClick = {handleMinus}> 
        -
        </button>
    </div>
    )
}

export default Count