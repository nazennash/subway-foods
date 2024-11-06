import React, { useContext } from "react";
import { Store } from "../context/Store";

export const PlaceOrderDetails = () => {
  const { getTotalCartAmount } = useContext(Store);

  return (
    <div className="p-4">
      {/* Form Section */}
      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="text"
            placeholder="Street"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
      </form>

      {/* Cart Totals Section */}
      <div className="mt-6 space-y-4">
        <div className="flex justify-between text-lg font-semibold">
          <span>Cart Totals:</span>
          <span>$ {getTotalCartAmount()}</span>
        </div>
        <div className="flex justify-between text-lg font-semibold">
          <span>Delivery Fee:</span>
          <span>$</span>
        </div>
        <div className="flex justify-between text-lg font-bold text-orange-500">
          <span>Total:</span>
          <span>${getTotalCartAmount()}</span>
        </div>
      </div>

      {/* Place Order Button */}
      <div className="mt-6">
        <button className="w-full bg-orange-500 text-white font-bold py-3 rounded-full hover:bg-orange-600 transition duration-300">
          Place Order
        </button>
      </div>
    </div>
  );
};
