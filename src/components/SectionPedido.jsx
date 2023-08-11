
import PropTypes from 'prop-types';

export function SectionPedido({ orderItems, onRemoveFromOrder }) {
  return (
    <div className="order-section">
      <h2>Resumen del Pedido</h2>
      {orderItems.map((item, index) => (
        <div key={index} className="order-item">
          <p>{item.TitleCard}</p>
          <p>Cantidad: {item.cantidad}</p>
          <p>Precio: {item.PriceCard}</p>
          <button onClick={() => onRemoveFromOrder(index)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
}

SectionPedido.propTypes = {
  orderItems: PropTypes.array.isRequired,
  onRemoveFromOrder: PropTypes.func.isRequired,
};
