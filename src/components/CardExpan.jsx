
import PropTypes from 'prop-types';

export function CardExpan({ selectedCard, onclick }) {
  if (!selectedCard) {
    return null;
  }

  return (
    <div className="Card_expan_bg">

      <section className="Card_expan">
        <div className="Card_expan_btnlef">

          <h2 className='Card_expan_title'>{selectedCard.TitleCard}</h2><button className="Card_expan_btn" onClick={onclick} >✕</button>
          </div>


        <p className='Card_expan_p'>Precio: <b>{selectedCard.PriceCard}</b> </p>
        <img className='Card_expan_img' src={selectedCard.ImgCard} alt={selectedCard.TitleCard} />
        <h3>Ingredientes</h3>
        <ul className="Card_expan_list">
          {selectedCard.Ingredientes.map((ingrediente) => (
            <li key={ingrediente.id}>
              {ingrediente.name}
            </li>
          ))}
        </ul>

      </section>
    </div>
  );
}

CardExpan.propTypes = {
  selectedCard: PropTypes.object,
  onclick: PropTypes.func,
};
