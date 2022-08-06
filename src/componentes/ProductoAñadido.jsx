import React from 'react'
import { ACTIONS } from '../App'

export const ProductoAñadido = ({ nombre, precio, dispatch, id, product }) => {


  return (
    <div className='añadido'>
        <div className='product-name'>
            <span>{ nombre }</span>
            <button
              onClick={ () => dispatch({type: ACTIONS.DELETE, payload: {id: product.id}}) } 
              className='quitar'>
              x
            </button>
        </div>
        <span className='product-price'>${ precio }</span>
        
    </div>
  )
}
