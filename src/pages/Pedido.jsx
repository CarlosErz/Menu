
import PropTypes from 'prop-types';


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
            <figure className='NotPague_img order_color' alt="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={362}
                height={80}
                fill="none"
              >
                <g filter="url(#a)">
                  <ellipse cx={181} cy={47.5} fill="#fff" rx={177} ry={24.5} />
                </g>
                <path
                  fill="#E08455"
                  d="M53 19C53 8.507 61.507 0 72 0h219c10.493 0 19 8.507 19 19v10c0 10.493-8.507 19-19 19H72c-10.493 0-19-8.507-19-19V19Z"
                />
                <path
                  fill="#9B4E3E"
                  d="M40.613 18.222c.78-8.837 8.296-15.545 17.165-15.319L179 6l122.128-3.898c10.324-.33 18.872 7.95 18.872 18.28 0 10.228-8.389 18.468-18.616 18.284L180.5 36.5H57.349c-9.862 0-17.603-8.454-16.736-18.278Z"
                />
                <path
                  fill="#7F392F"
                  fillRule="evenodd"
                  d="M46.703 7a16.77 16.77 0 0 0-6.637 11.95c-.542 6.143 2.282 11.75 6.885 15.09.536.313 1.1.603 1.692.86a42.047 42.047 0 0 0 6.81 2.275c.444.036.895.054 1.35.054h123.151l120.884 2.166c10.227.183 18.616-8.057 18.616-18.285 0-.599-.029-1.19-.085-1.774a45.73 45.73 0 0 1-1.022.636l-.001.001c-.254.156-.546.334-.801.494-.379.237-.843.532-1.307.857a15.12 15.12 0 0 0-1.71 1.375c-.03.029-.337.32-2.105.832-.425.123-.868.242-1.41.387l-.05.014c-.502.134-1.096.293-1.696.466-1.234.356-2.788.853-4.388 1.61-3.324 1.575-7.615 2.282-12.907 3.154h-.001c-.895.148-1.819.3-2.771.462-4.824.82-10.12.968-15.916.867-2.13-.037-4.516-.117-6.973-.2-3.663-.122-7.486-.25-10.865-.25-19.313 0-38.343-1.175-57.793-2.811-9.005-.758-18.066-.848-26.742-.934-1.942-.02-3.864-.038-5.763-.065-2.909-.04-5.853-.378-9.356-.78l-.136-.015c-3.404-.39-7.353-.839-11.439-.839-1.77 0-3.264-.114-5.087-.254-1.023-.079-2.15-.166-3.487-.244-2.005-.118-4.059-.05-5.614.003l-.768.024c-1.828.054-3.026.04-4.033-.103l-1.22-.176c-4.576-.66-9.891-1.427-15.295-1.427-1.741 0-3.464.006-5.168.012-9.332.033-18.143.065-26.773-.922-2.33-.266-4.545-.424-6.533-.56l-.397-.028c-1.879-.129-3.518-.242-5.129-.412-3.28-.348-6.02-.9-8.738-2.051a3.23 3.23 0 0 1-.125-.1c-.253-.214-.607-.56-1.078-1.089-.466-.525-.949-1.12-1.501-1.816l-.343-.434c-.348-.442-.745-.946-1.129-1.415a35.733 35.733 0 0 1-.495-.96c-.1-.2-.214-.428-.363-.72l-.028-.055c-.164-.33-.833-1.667-1.701-2.72A9.452 9.452 0 0 0 46.703 7ZM51 15.09v.073-.074Z"
                  clipRule="evenodd"
                />
                <rect width={257} height={48} x={53} y={13} fill="#F9A96E" rx={19} />
                <path
                  stroke="#3E0B2E"
                  strokeWidth={3}
                  d="m86.003 45.879 9-8m.076 9.305-9-7m-.076-12.305 9-8m.076 9.305-9-7"
                />
                <path
                  fill="#E18458"
                  fillOpacity={0.7}
                  d="M53.01 31.684c-.006.213-.01.427-.01.642v10c0 10.494 8.507 19 19 19h219c10.493 0 19-8.506 19-19v-10c0-.787-.048-1.564-.141-2.326-1.896 2.315-3.797 4.539-5.756 6.657-.687.434-1.372.821-2.061 1.16-3.076 1.517-5.862 2.677-8.542 3.337-4.268 1.049-8.175 1.988-11.734 2.374-9.854 1.07-19.949 1.28-30.37 1.497l-2.826.06c-7.129.153-14.232.456-21.232.76l-.972.043c-6.697.292-13.298.58-19.894.747-2.923.074-5.847.23-8.624.377-.467.025-.93.05-1.388.073-3.243.17-6.307.312-9.33.321-6.409.021-12.804.13-19.204.32-2.491.074-5.033.133-7.612.193-8.813.204-18.052.418-27.091 1.278-3.864.368-7.843.931-11.574 1.459-1.683.238-3.317.469-4.866.671-2.411.316-4.781.702-6.997 1.064l-.075.012c-2.231.364-4.308.703-6.378.979-2.453.327-4.552.238-7.344.12a155.462 155.462 0 0 0-5.17-.156c-3.233-.034-6.07-.324-8.698-1.02-3.972-1.051-7.866-2.411-11.763-4.03-1.234-.513-2.183-1.002-2.928-1.504l-.032-.026a17.892 17.892 0 0 1-.182-.15l-.033-.027-.289-.24a16.7 16.7 0 0 0-1.42-1.058 75.12 75.12 0 0 1-.25-.364l-.017-.023c-.098-.144-.224-.328-.348-.505a20.64 20.64 0 0 0-.497-.683c-1.283-1.682-2.607-3.296-3.837-4.79l-.336-.407a196.832 196.832 0 0 1-3.18-3.925 8.958 8.958 0 0 0-3.998-2.91Z"
                />
                <path
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeWidth={4}
                  d="M58.379 26.3c1.062-1.982 2.874-3.586 4.519-5.077.336-.305 1.07-.342 1.512-.49m10.825-.464h.31"
                />
                <defs>
                  <filter
                    id="a"
                    width={362}
                    height={57}
                    x={0}
                    y={23}
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      result="hardAlpha"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dy={4} />
                    <feGaussianBlur stdDeviation={2} />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_50_108" />
                    <feBlend
                      in="SourceGraphic"
                      in2="effect1_dropShadow_50_108"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>

            </figure>
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
