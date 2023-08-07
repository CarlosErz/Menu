import '../components/components.css'
import PropTypes from 'prop-types';

export function Card({TitleCard, DescriptionCard, PriceCard, ImgCard}) {

  return (
    <>
      <section className="Card">
        <header className="Card_Content">
          <img src={ImgCard} alt="Descripción de la imagen" className="Card_img" />
          
        </header>
        <h1 className="Card_title">{TitleCard}</h1>
        <p className="Card_description">{DescriptionCard}</p>
          <p className="Card_price">
            {PriceCard}
          </p>

      </section>
    </>
  )
}
Card.propTypes = {
  TitleCard: PropTypes.string.isRequired,
  DescriptionCard: PropTypes.string.isRequired,
  PriceCard: PropTypes.any.isRequired,
  ImgCard: PropTypes.string.isRequired,
};
