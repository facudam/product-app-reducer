
import { ACTIONS } from '../App'

export const ProductoAñadido = ({ nombre, precio, dispatch, id, product, pagar, setPagar }) => {

    

    const eliminarProducto = () => {
      dispatch({type: ACTIONS.DELETE, payload: {id: product.id}})
      setPagar(pagar - precio)
    }

  return (
    <div className='añadido'>
        <div className='product-name'>
            <span>{ nombre }</span>
            <button
              onClick={ () => 
                eliminarProducto()
              } 
              className='quitar'>
              x
            </button>
        </div>
        <span className='product-price'>${ precio }</span>
        
    </div>
  )
}
