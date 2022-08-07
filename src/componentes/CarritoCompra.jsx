import React, { useState } from 'react'
import { ModalFinalizarCompra } from './ModalFinalizarCompra'
import { ProductoAñadido } from './ProductoAñadido'

export const CarritoCompra = ({ pagar, setPagar, agregados, dispatch }) => {

  const [ isOpen, setIsOpen ] = useState(false)  

  return (
      <>
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
                            pagar={ pagar }
                            setPagar={ setPagar }
                        />
                    ))
                }
                <div className='finalizar-compra'>
                    <span>TOTAL: $ { pagar }</span>
                    <button
                        onClick={ () => setIsOpen(true)}
                        className='pagar'>
                        PAGAR
                    </button>
                </div>   
            </div>
        </div>
        <ModalFinalizarCompra open={ isOpen } productsAdded={ agregados } close={setIsOpen} />
      </>
    
    
  )
}
