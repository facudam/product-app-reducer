import React from 'react'
import { ProductoAñadido } from './ProductoAñadido'

export const CarritoCompra = ({ totalCompra, agregados, dispatch }) => {

    

  return (
    <div className='carrito-container'>
        <h2>Carrito de compras</h2>
        <hr />
        <div className='carrito'>
            {
                //Acá agregaremos los productos añadidos
                agregados.map(agregado => (
                    <ProductoAñadido 
                        key={ agregado.id }
                        nombre={ agregado.name }
                        precio={ agregado.price }
                        id= { agregado.id }
                        dispatch={ dispatch }
                        product={ agregado }
                    />
                ))
            }
            <div className='finalizar-compra'>
                <span>TOTAL: $ { totalCompra }</span>
                <button className='pagar'>PAGAR</button>
            </div>   
        </div>
    </div>
    
  )
}
