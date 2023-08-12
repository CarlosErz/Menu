import PropTypes from 'prop-types';

export function Pedido({ allProducts, setAllProducts, total,setTotal }) {


  const Remove = (card) => {
    const result = allProducts.filter(
      product => product.idcard !== card.idcard
    );
    setAllProducts(result);
  };
  const reduceQuantity = (card) => {

    if (card.quantity > 1) {
      const updatedProducts = allProducts.map((product) =>
        product.idcard === card.idcard
          ? { ...product, quantity: product.quantity - 1}
          : product
      );
      setAllProducts(updatedProducts);
      setTotal(total - parseFloat(card.PriceCard));

    } else {
      const result = allProducts.filter(
        (product) => product.idcard !== card.idcard
      );
      setAllProducts(result);
      setTotal(total + card.PriceCard * card.quantity);
    }
  };

  const addcuantity = (card) => {
    const updatedProducts = allProducts.map((product) =>
      product.idcard === card.idcard
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    setAllProducts(updatedProducts);
    setTotal(total + parseFloat(card.PriceCard));
  }



    return (
      <>
        <div className="order">
          <h1 className="title">PEDIDO</h1>
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
                        precio: <span>{card.PriceCard}</span>
                      </p>
                    </header>
                    <div className="order_btn">
                      <button className="order_agg" onClick={()=> addcuantity(card)}>+</button>
                      <p className="order_count" >{card.quantity}</p>
                      <button className="order_remove" onClick={() => reduceQuantity(card)}>-</button>
                    </div>
                  </div>

                ))}

              </div>
              <div className="order_total">
                <p>Total: <span>{total}</span></p>
              </div>
            </>
          ) : (
            <p className="order_empty">
              No hay productos en tu pedido
            </p>
          )

          }

        </div>
      </>
    );
  }
  Pedido.propTypes = {
    allProducts: PropTypes.array.isRequired,
    total: PropTypes.number.isRequired,
    setAllProducts: PropTypes.func.isRequired,
    setTotal: PropTypes.func.isRequired,
  };