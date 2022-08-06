import React from 'react'
import { ProductoAñadido } from './ProductoAñadido'

export const CarritoCompra = ({ totalCompra, agregados }) => {

    

  return (
    <div className='carrito-container'>
        <h2>Carrito de compras</h2>
        <hr />
        <div className='carrito'>
            {
                //Acá agregaremos los productos añadidos
                
            }
            <div className='finalizar-compra'>
                <span>Total:$ { totalCompra }</span>
                <button className='pagar'>PAGAR</button>
            </div>   
        </div>
    </div>
    
  )
}
