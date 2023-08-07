import  { useState } from 'react';
import { Navbar } from "./components/Navbar"
import { Product } from "./pages/Product"

function App() {
  const [selectedItem, setSelectedItem] = useState("Hotdogs");

  return (
    <>
     <h1   className="title">MENÚ</h1>
      <Navbar setSelectedItem={setSelectedItem} />
      <Product selectedItem={selectedItem} />
    </>
  )
}

export default App;
