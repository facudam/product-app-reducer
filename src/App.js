import { useReducer, useState } from "react";
import { CarritoCompra } from "./componentes/CarritoCompra";
//import { ModalFinalizarCompra } from "./componentes/ModalFinalizarCompra";
import { Producto } from "./componentes/Producto";


const PRODUCTOS = [
  {
    id: 1,
    nombre: 'Laptop',
    img: 'https://http2.mlstatic.com/D_Q_NP_691046-MLA50019833718_052022-AB.webp',
    price: 116000
  },
  {
    id: 2,
    nombre: 'Celular',
    img: 'https://http2.mlstatic.com/D_Q_NP_602877-MLA50047804334_052022-AB.webp',
    price: 86000
  },
  {
    id: 3,
    nombre: 'Monitor',
    img: 'https://http2.mlstatic.com/D_NQ_NP_886158-MLA46737528644_072021-W.webp',
    price: 58000
  },
  {
    id: 4,
    nombre: 'Gabinete',
    img: 'https://http2.mlstatic.com/D_NQ_NP_779590-MLA48534785753_122021-W.webp',
    price: 10000
  },
  { 
    id: 5,
    nombre: 'Silla gamer',
    img: 'https://http2.mlstatic.com/D_NQ_NP_735614-MLA44229767935_122020-W.webp',
    price: 50000
  },
  {
    id: 6,
    nombre: 'Bicicleta',
    img: 'https://http2.mlstatic.com/D_Q_NP_821251-MLA50966199061_082022-AB.webp',
    price: 57000
  }
];

export const ACTIONS = {
  ADD: 'add',
  DELETE: 'delete',
}

const productReducer = (state, action) => {
  switch(action.type) {
    case ACTIONS.ADD:
      return [...state, action.payload ];
    case ACTIONS.DELETE:
      return state.filter( product => product.id !== action.payload.id )
    default:
      return state;
  }
}




function App() {

  const [ productsAdded, dispatch ] = useReducer( productReducer, [] );
  const [ pagar, setPagar ] = useState(0);

  const agregarAlCarrito = (id, name, price) => {

    const productoAgregado = {
      id,
      name,
      price,
    }

    dispatch({
      type: ACTIONS.ADD,
      payload: productoAgregado
    })

    setPagar( pagar + productoAgregado.price)
  }

  return (
    <>
      <h1>Selecciona el producto que quieras llevar</h1>
      <div className="main-container">

        {
          PRODUCTOS.map(producto => (
            <Producto
              agregar={ ()=> agregarAlCarrito(producto.id, producto.nombre, producto.price) }
              key={ producto.id }
              img={ producto.img }
              price={ producto.price }
            />
          ))
        }
        
      </div>
      <CarritoCompra 
        pagar={ pagar } 
        setPagar={ setPagar }
        agregados={ productsAdded } 
        dispatch={ dispatch  }
        productsAdded={ productsAdded }
      />
      
    </>
    
  );
}

export default App;
