import { useState} from "react";
import { Productos } from "./pages/Productos";
import { Pedido } from "./pages/Pedido";
import { Pague404 } from "./pages/Pague404";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [allProducts, setAllProducts] = useState(
    JSON.parse(localStorage.getItem('cartProducts')) || []
  );
  const [total, setTotal] = useState(
    parseFloat(localStorage.getItem('cartTotal')) || 0
  );
  const {countproducts, setCountproducts} = useState(0);
  

  return (
 
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Pague404 />} />
          <Route path="/" element={<Productos 
           allProducts={allProducts}
           setAllProducts={setAllProducts}
            total={total}
            setTotal={setTotal}
            countproducts={countproducts}
            setCountproducts={setCountproducts}
      
          />} />
          <Route path="/Pedido" element={<Pedido
            allProducts={allProducts}
            setAllProducts={setAllProducts}
             total={total}
             setTotal={setTotal}
             countproducts={countproducts}
             setCountproducts={setCountproducts}
       
          
          />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
