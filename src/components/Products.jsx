import React, { useContext } from "react";
import { Store } from "../context/Store";
import { BiMinus, BiPlus } from "react-icons/bi";

export const Products = ({ selectedCategory, setSelectedCategory }) => {
  const { products, addItemToCart, minusItemFromCart, cartItems } =
    useContext(Store);

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category.id === selectedCategory)
    : products;

  return (
    <div className="mt-5 p-3">
      <div className="mb-2 flex justify-between items-center">
        <div>
          <span className="font-bold text-xl">Products | </span>
          {!selectedCategory && (
            <span className="text-gray-700">
              Filter by clicking on categories above
            </span>
          )}
        </div>
        <div>
          {selectedCategory && (
            <button
              onClick={() => setSelectedCategory(null)}
              className="text-gray-700"
            >
              Reset filter
            </button>
          )}
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-4 gap-x-2">
        {filteredProducts.slice(0, 10).map((product) => (
          <div
            key={product.id}
            className="shadow-md rounded flex flex-col space-y-2 p-2 mx-auto hover:transform hover:scale-105 hover:shadow-xl hover:duration-300"
          >
            <img
              src={product.images}
              alt={product.title}
              className="w-48 flex mx-auto rounded-t-xl"
            />
            <div>
              <p className="font-semibold">
                {product.title.length > 20 ? (
                  <h3>{product.title.slice(0, 15)}...</h3>
                ) : (
                  <h3>{product.title}</h3>
                )}
              </p>
              <div className="flex items-center justify-between">
                <h3>${product.price}</h3>
                <div>
                  {cartItems[product.id] ? (
                    <div className="flex items-center gap-2">
                      <BiPlus onClick={() => addItemToCart(product.id)} />
                      <span>{cartItems[product.id]}</span>
                      <BiMinus onClick={() => minusItemFromCart(product.id)} />
                    </div>
                  ) : (
                    <BiPlus onClick={() => addItemToCart(product.id)} />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
