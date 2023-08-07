import {Card} from '../components/Card.jsx'
import { CardContent } from '..//data//CardContent.js'
import './style.css'
import PropTypes from 'prop-types';

export function Product({ selectedItem }) {
  const filteredCards = CardContent.filter(card => card.Section === selectedItem);

  return (
    <div className="product-container">
      {filteredCards.map((card, index) => (
        <Card
          key={index}
          TitleCard={card.TitleCard}
          DescriptionCard={card.DescriptionCard}
          PriceCard={card.PriceCard}
          ImgCard={card.ImgCard}
        />
      ))}
    </div>
  )
}
Product.propTypes = {
  selectedItem: PropTypes.string
}
