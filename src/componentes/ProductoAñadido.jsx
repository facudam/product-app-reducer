import React from 'react'

export const ProductoAñadido = ({ producto, precio }) => {
  return (
    <div className='añadido'>
        <div className='product-name'>
            <span>{ producto }</span>
            <button className='quitar'>x</button>
        </div>
        <span className='product-price'>${ precio }</span>
        
    </div>
  )
}
