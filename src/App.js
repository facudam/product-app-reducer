import { CarritoCompra } from "./componentes/CarritoCompra";
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
  }
];


function App() {

  
  return (
    <>
      <h1>Selecciona el producto que quieras llevar</h1>
      <div className="main-container">

        {
          PRODUCTOS.map(producto => (
            <Producto 
              key={ producto.id }
              img={ producto.img }
              price={ producto.price }
            />
          ))
        }
        
      </div>
      <CarritoCompra />
    </>
    
  );
}

export default App;
