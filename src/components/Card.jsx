import '../components/components.css'
import PropTypes from 'prop-types';

export function Card({ TitleCard, DescriptionCard, PriceCard, ImgCard,onClick,AdtoCard }) {

  return (
    <>
      <section className="Card" >


          <header className="Card_Content" onClick={onClick}>
            <div className="Card_img_content">
               <img src={ImgCard} alt={TitleCard} className="Card_img" />
            </div>
          
          <h3 className="Card_title">{TitleCard}</h3>
          <p className="Card_description">{DescriptionCard}</p>
         
          
          </header>
           <div className="Card_flex">
            <button className="Card_agg" onClick={AdtoCard}>
              +
            </button>
            <p className="Card_price">
            <span>$ </span> 
             {PriceCard}
          </p>
          </div>
      </section> 
    </>
  )
}
Card.propTypes = {
  TitleCard: PropTypes.string,
  DescriptionCard: PropTypes.string,
  PriceCard: PropTypes.any,
  ImgCard: PropTypes.string,
  onClick: PropTypes.func,
  AdtoCard: PropTypes.func,
};
