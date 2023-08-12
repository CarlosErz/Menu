import { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Card } from '../components/Card';
import { CardContent } from '../data/CardContent';
import { CardExpan } from '../components/CardExpan';

import PropTypes from 'prop-types';

export function Productos({ allProducts, setAllProducts, total, setTotal }) {
  const [selectedItem, setSelectedItem] = useState("Hotdogs");
  const [selectedCard, setSelectedCard] = useState(null);



  const filteredCards = CardContent.filter(card => card.Section === selectedItem);

  const handleCardClick = (index) => {
    setSelectedCard(filteredCards[index]);
  };

  const hideModal = () => {
    setSelectedCard(null);
  }


  const addToCart = (card) => {
    const existingProduct = allProducts.find(product => product.idcard === card.idcard);
  
    if (existingProduct) {
      const updatedProducts = allProducts.map(product =>
        product.idcard === card.idcard ? { ...product, quantity: product.quantity + 1 } : product
      );
      setAllProducts(updatedProducts);
    } else {
      const newProduct = { ...card, quantity: 1 };
      setAllProducts([...allProducts, newProduct]);
    }
    setTotal(total + card.PriceCard * card.quantity);
    
  };
  

 console.log(allProducts)



  return (
    <>
      <h1 className="title">MENÚ</h1>
      <Navbar setSelectedItem={setSelectedItem} />
      <div className="product-container">
        {filteredCards.map((card, index) => (
          <Card
            key={index}
            TitleCard={card.TitleCard}
            DescriptionCard={card.DescriptionCard}
            PriceCard={card.PriceCard}
            ImgCard={card.ImgCard}
            onClick={() => handleCardClick(index)}
            AdtoCard={() => addToCart(card)}
          />
        ))}
      </div>
      <CardExpan selectedCard={selectedCard} onclick={hideModal} />
    </>
  );
}

Productos.propTypes = {
  selectedItem: PropTypes.string,
  allProducts: PropTypes.arrayOf(
    PropTypes.shape({
      TitleCard: PropTypes.string.isRequired,
      DescriptionCard: PropTypes.string.isRequired,
      PriceCard: PropTypes.string.isRequired,
      ImgCard: PropTypes.string.isRequired,
    })
  ),
  setAllProducts: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  setTotal: PropTypes.func.isRequired,
};
