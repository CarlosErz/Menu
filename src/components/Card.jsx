import '../components/components.css'
import PropTypes from 'prop-types';

export function Card({ TitleCard, DescriptionCard, PriceCard, ImgCard,onClick }) {

  return (
    <>
      <section className="Card" >


          <header className="Card_Content" onClick={onClick}>
            <div className="Card_img_content">
               <img src={ImgCard} alt={TitleCard} className="Card_img" />
            </div>
          
          <h1 className="Card_title">{TitleCard}</h1>
          <p className="Card_description">{DescriptionCard}</p>
         
          
          </header>
           <div className="Card_flex">
            <button className="Card_agg">
              +
            </button>
            <p className="Card_price">
            {PriceCard}
          </p>
          </div>
      </section> 
    </>
  )
}
Card.propTypes = {
  TitleCard: PropTypes.string.isRequired,
  DescriptionCard: PropTypes.string.isRequired,
  PriceCard: PropTypes.any.isRequired,
  ImgCard: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
