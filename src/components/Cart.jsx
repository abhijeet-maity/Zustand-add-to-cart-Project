import React from "react";
import { useCartStore } from "../store/cartStore";
import "../styles/main.scss";


function Cart() {
  const { cart, removeFromCart, clearCart } = useCartStore();

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.map((product) => (
        <div key={product.id}>
          <span>{product.name}</span>
          <button
            onClick={() => {
              removeFromCart(product.id);
            }}
          >
            Remove
          </button>
        </div>
      ))}
      {cart.length > 0 && <button className="clear-cart" onClick={clearCart}>Clear cart</button>}
    </div>
  );
}

export default Cart;
