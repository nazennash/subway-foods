import React, { useContext } from "react";
import { Store } from "../context/Store";
import { BiMinus, BiPlus } from "react-icons/bi";
import { useNavigate } from "react-router";

export const CartDetails = () => {
  const {
    products,
    addItemToCart,
    minusItemFromCart,
    cartItems,
    clearCart,
    getTotalPrice,
    getTotalCartAmount,
  } = useContext(Store);

  const navigate = useNavigate();

  return (
    <>
      <div className="p-4">
        <div className="text-center border-b py-3 mb-4">
          <p className="font-bold text-xl tracking-wide">Cart Details</p>
        </div>

        <div className="grid gap-4">
          {cartItems.length === 0 ? (
            <div className="text-center">No items in cart</div>
          ) : (
            products.map(
              (product) =>
                cartItems[product.id] > 0 && (
                  <div
                    key={product.id}
                    className="grid grid-cols-3 gap-4 items-center border-b py-3"
                  >
                    <img
                      src={product.images[0]}
                      alt={product.title}
                      className="w-20 col-span-1"
                    />
                    <div className="col-span-1">
                      <p className="text-lg font-semibold">{product.title}</p>
                      <p className="text-gray-500">${product.price}</p>
                    </div>
                    <div className="flex items-center gap-2 justify-end col-span-1">
                      <button onClick={() => minusItemFromCart(product.id)}>
                        <BiMinus />
                      </button>
                      <span>{cartItems[product.id]}</span>
                      <button onClick={() => addItemToCart(product.id)}>
                        <BiPlus />
                      </button>
                    </div>
                  </div>
                )
            )
          )}
        </div>

        <div className="mt-6">
          <div className="border-t pt-4">
            <p className="font-bold text-lg">Cart Totals</p>
            <div className="flex justify-between mt-2">
              <span>Subtotal:</span>
              <span>$ {getTotalPrice()}</span>
            </div>

            <div className="flex justify-between">
              <span>Tax:</span>
              <span>$2.00</span>
            </div>
            <div className="flex justify-between font-bold text-xl mt-4">
              <span>Total:</span>
              <span>${getTotalCartAmount()}</span>
            </div>
            <button
              onClick={clearCart}
              className="w-full bg-red-500 text-white px-4 py-2 rounded-md mt-4"
            >
              Clear Cart
            </button>
            <button
              onClick={() => navigate("/order")}
              className="w-full bg-green-600 text-white px-4 py-2 rounded-md mt-4"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
