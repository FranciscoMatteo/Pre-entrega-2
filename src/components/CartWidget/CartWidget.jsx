import React from 'react'
import './CartWidget.css';

const CartWidget = () => {

  const imgCarrito = "https://cdn-icons-png.flaticon.com/512/8482/8482608.png";

  return (
    <div>
      <img className="carrito" src={imgCarrito} alt="carrito" />
      <strong className='totaldecarrito'> 5 </strong>
    </div>
  )
}

export default CartWidget