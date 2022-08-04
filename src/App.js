import { CarritoCompra } from "./componentes/CarritoCompra";
import { Producto } from "./componentes/Producto";

const productosImg = ['https://http2.mlstatic.com/D_Q_NP_691046-MLA50019833718_052022-AB.webp', 'https://http2.mlstatic.com/D_Q_NP_602877-MLA50047804334_052022-AB.webp', 'https://http2.mlstatic.com/D_NQ_NP_886158-MLA46737528644_072021-W.webp', 'https://http2.mlstatic.com/D_NQ_NP_779590-MLA48534785753_122021-W.webp', 'https://http2.mlstatic.com/D_NQ_NP_735614-MLA44229767935_122020-W.webp'];


function App() {

  
  return (
    <>
      <h1>Selecciona el producto que quieras llevar</h1>
      <div className="main-container">
        <Producto img={ productosImg[0] } price={116000} />
        <Producto img={ productosImg[1] } price={86000} />
        <Producto img={ productosImg[2] } price={58000} />
        <Producto img={ productosImg[3] } price={10000} />
        <Producto img={ productosImg[4] } price={50000} />
      </div>
      <CarritoCompra />
    </>
    
  );
}

export default App;
