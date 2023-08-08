
import  { useState } from 'react';
import { Card } from '../components/Card.jsx';
import { CardContent } from '..//data//CardContent.js';
import { CardExpan } from '../components/CardExpan.jsx'; 
import './style.css';
import PropTypes from 'prop-types';

export function Product({ selectedItem }) {
  const [selectedCard, setSelectedCard] = useState(null);

  const filteredCards = CardContent.filter(card => card.Section === selectedItem);

  const handleCardClick = (index) => {
    setSelectedCard(filteredCards[index]);
    console.log(filteredCards[index]);
  };
  const hideModal = () => {
    setSelectedCard(null);
    console.log('click');

  }

  return (
    <div className="product-container">
      {filteredCards.map((card, index) => (
        <Card
          key={index}
          TitleCard={card.TitleCard}
          DescriptionCard={card.DescriptionCard}
          PriceCard={card.PriceCard}
          ImgCard={card.ImgCard}
          onClick={() => handleCardClick(index)}
        />
      ))}
      <CardExpan selectedCard={selectedCard} onclick={hideModal} />
    </div>
  );
}

Product.propTypes = {
  selectedItem: PropTypes.string,
};
