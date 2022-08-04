import React from 'react'
import { ProductoAñadido } from './ProductoAñadido'

export const CarritoCompra = () => {

    function totalCompra () {
        console.log('hola')
    }

  return (
    <div className='carrito-container'>
        <h2>Carrito de compras</h2>
        <div className='carrito'>
            <ProductoAñadido producto={'Mouse inalámbrico'} precio={2500}/>
            <ProductoAñadido producto={'Teclado gamer'} precio={6000} />
            <div className='finalizar-compra'>
                <span>Total:${ totalCompra }2500</span>
                <button className='pagar'>PAGAR</button>
            </div>   
        </div>
    </div>
    
  )
}
