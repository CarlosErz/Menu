
import PropTypes from 'prop-types';
import plato from '../assets/Plato404.svg'

export function Pedido({ allProducts, setAllProducts, total, setTotal }) {


  const updateCartAndLocalStorage = (updatedProducts) => {
    setAllProducts(updatedProducts);
    const updatedTotal = updatedProducts.reduce(
      (accumulator, product) => accumulator + parseFloat(product.PriceCard) * product.quantity,
      0
    );
    setTotal(updatedTotal);
    localStorage.setItem('cartProducts', JSON.stringify(updatedProducts));
    localStorage.setItem('cartTotal', updatedTotal.toString());
  };

  const removeProduct = (card) => {
    const updatedProducts = allProducts.filter(
      product => product.idcard !== card.idcard
    );
    updateCartAndLocalStorage(updatedProducts);
  };

  const reduceQuantity = (card) => {
    if (card.quantity > 1) {
      const updatedProducts = allProducts.map((product) =>
        product.idcard === card.idcard
          ? { ...product, quantity: product.quantity - 1 }
          : product
      );
      updateCartAndLocalStorage(updatedProducts);
    } else {
      removeProduct(card); // Si la cantidad es 1, eliminamos el producto
    }
  };

  const addQuantity = (card) => {
    const updatedProducts = allProducts.map((product) =>
      product.idcard === card.idcard
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    updateCartAndLocalStorage(updatedProducts);
  };

  return (
    <>
      <div className="order">
        <h1 className="title">ORDEN</h1>
        {allProducts.length ? (
          <>
            <div className="order_content">
              {allProducts.map((card) => (
                <div className="order_products" key={card.idcard}>
                  <img src={card.ImgCard} alt="" className="order_img" />
                  <header className="order_header">
                    <h3 className="order_title">
                      {card.TitleCard}
                    </h3>
                    <p className="order_price">
                      Precio:  <b>$ {card.PriceCard}</b>
                    </p>
                  </header>
                  <div className="order_btn">
                    <button className="order_remove" onClick={() => reduceQuantity(card)}>-</button>
                    <p className="order_count">{card.quantity}</p>
                    <button className="order_agg" onClick={() => addQuantity(card)}>+</button>
                    <button className="order_delete" onClick={() => removeProduct(card)}>Eliminar</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="order_total">
              <p>Total : $ <span>{total}</span></p>
            </div>
          </>
        ) : (
          <div className='order_empty_content'>
          <p className="order_empty_title">
           
            Perecio de hambre
          </p> 
          <p className="order_empty_subtitle">
           
            Orden vacía
          </p> 
          <img className='NotPague_img order_color' src={plato} alt="" />
          </div>
          
        )}
      </div>
    </>
  );
}

Pedido.propTypes = {
  allProducts: PropTypes.array.isRequired,
  setAllProducts: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  setTotal: PropTypes.func.isRequired,
};
