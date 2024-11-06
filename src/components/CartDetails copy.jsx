import React, { useContext } from "react";
import { Store } from "../context/Store";

export const CartDetails = () => {
  const { cartItems, addItemToCart, minusItemFromCart, clearCart } =
    useContext(Store);

  const handleAddItem = (product) => {
    addItemToCart(product);
  };

  const handleRemoveItem = (product) => {
    minusItemFromCart(product);
  };

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <div className="m-2 md:m-0 container mx-auto">
      <h2 className="text-xl font-bold mb-4">Cart Details</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul className="space-y-4">
            {cartItems.map((item, index) => (
              <li key={index} className="flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover mr-4"
                  />
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.price} USD</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleRemoveItem(item)}
                    className="bg-red-500 text-white p-2 rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => handleAddItem(item)}
                    className="bg-green-500 text-white p-2 rounded"
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <button
              onClick={handleClearCart}
              className="w-full bg-blue-500 text-white py-2 rounded"
            >
              Clear Cart
            </button>
            <button className="w-full mt-4 bg-yellow-500 text-white py-2 rounded">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
