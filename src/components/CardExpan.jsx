
import PropTypes from 'prop-types';

export function CardExpan({ selectedCard , onclick}) {
  if (!selectedCard) {
    return null;
  }

  return (
    <div className="Card_expan_bg">

    
    <section className="Card_expan">
      <button className="Card_expan_btn"  onClick={onclick} >X</button>
      <h2 className='Card_expan_title'>{selectedCard.TitleCard}</h2>
      <p className='Card_expan_p'>{selectedCard.DescriptionCard}</p>
      <p className='Card_expan_p'>Price: <b>{selectedCard.PriceCard}</b> </p>
      <img className='Card_expan_img' src={selectedCard.ImgCard} alt={selectedCard.TitleCard} />
    </section>
    </div>
  );
}

CardExpan.propTypes = {
  selectedCard: PropTypes.object,
  onclick: PropTypes.func,
};
