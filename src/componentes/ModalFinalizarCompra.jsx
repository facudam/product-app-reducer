import React from 'react'
import  ReactDOM  from 'react-dom'

export const ModalFinalizarCompra = ({ productsAdded, open, close }) => {

  // Si no est√° abierto que retorne nada
  if(!open) return null

  // Caso contrario retornar√° todo:
  return ReactDOM.createPortal(
    <div>
      <div className='pantalla'></div>
      <div className='modal'>
        <div className='tittle-button'>
          <p>¬°Felicitaciones! Los siguientes productos ya son tuyos:</p>
          <button
          onClick={ () => close(false) }
          className='btn-close'
        >x</button>
        </div>
        
        <ul>
          { 
            productsAdded.map(producto => (
              <li className='li'>{producto.name}</li>
            ))
          }
        </ul>
      </div>
    </div>,
    document.getElementById('portal')
  )
}
