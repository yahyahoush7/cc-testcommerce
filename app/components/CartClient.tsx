"use client";

import { useMemo, useState } from "react";
import type { Product } from "../actions";

type CartItem = {
  product: Product;
  qty: number;
};

const formatPrice = (value: number) => `$${value.toFixed(2)}`;

export default function CartClient({ products }: { products: Product[] }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const total = useMemo(
    () =>
      cart.reduce(
        (sum, item) => sum + item.product.price * item.qty,
        0
      ),
    [cart]
  );

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (!existing) {
        return [...prev, { product, qty: 1 }];
      }
      return prev.map((item) =>
        item.product.id === product.id
          ? { ...item, qty: item.qty + 1 }
          : item
      );
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.product.id === productId
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const clearCart = () => setCart([]);

  return (
    <div className="grid">
      <section className="panel">
        <h2>Products</h2>
        <ul className="list">
          {products.map((product) => (
            <li key={product.id} className="item">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <div className="cart-row">
                <span className="price">{formatPrice(product.price)}</span>
                <button onClick={() => addToCart(product)}>Add to cart</button>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="panel">
        <h2>Cart</h2>
        {cart.length === 0 ? (
          <p className="muted">Your cart is empty.</p>
        ) : (
          <>
            <ul className="list">
              {cart.map((item) => (
                <li key={item.product.id} className="item">
                  <div className="cart-row">
                    <span>
                      {item.product.name} x {item.qty}
                    </span>
                    <span className="price">
                      {formatPrice(item.product.price * item.qty)}
                    </span>
                  </div>
                  <div className="actions">
                    <button
                      className="secondary"
                      onClick={() => addToCart(item.product)}
                    >
                      Add one
                    </button>
                    <button
                      className="ghost"
                      onClick={() => removeFromCart(item.product.id)}
                    >
                      Remove one
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <p className="total">Total: {formatPrice(total)}</p>
            <button className="secondary" onClick={clearCart}>
              Clear cart
            </button>
          </>
        )}
      </section>
    </div>
  );
}
