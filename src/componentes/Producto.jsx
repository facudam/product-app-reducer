import React from 'react'

export const Producto = ({ img, price }) => {
  return (
    <div className='product-container'>
        <div>
            <img src={ img } alt='' />
        </div>
        <div className='product-container__info'>
            <span className='price'>${ price }</span>
            <span className='envio'>Envío gratis</span>
        </div>
    </div>
  )
}
