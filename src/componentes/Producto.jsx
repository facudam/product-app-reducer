import React from 'react'

export const Producto = ({ img, price, agregar }) => {
  return (
    <div className='product-container' onClick={ agregar }>
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
