import React, { useContext, useState } from "react";
import { Store } from "../context/Store";
import { BiMinus, BiPlus } from "react-icons/bi";

export const Products = () => {
  const { products } = useContext(Store);
  const [itemCounts, setItemCounts] = useState({});

  const incrementCount = (productId) => {
    setItemCounts((prevCounts) => ({
      ...prevCounts,
      [productId]: (prevCounts[productId] || 0) + 1,
    }));
  };

  const decrementCount = (productId) => {
    setItemCounts((prevCounts) => ({
      ...prevCounts,
      [productId]: Math.max((prevCounts[productId] || 0) - 1, 0),
    }));
  };

  return (
    <>
      <div className="mt-5 p-3">
        <div>
          <div className="mb-2">
            <span className="font-bold text-xl">Products | </span>
            <span className="text-gray-700">
              Filter by clicking on categories above
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 ">
            {products.slice(0, 10).map((product) => (
              <div
                key={product.id}
                className="shadow-md rounded flex flex-col space-y-2 p-2 mx-auto"
              >
                <img
                  src={product.images}
                  alt={product.title}
                  className="w-48 flex mx-auto rounded-t-xl"
                />
                <div className="">
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
                      {itemCounts[product.id] ? (
                        <div className="flex items-center gap-2">
                          <BiPlus onClick={() => incrementCount(product.id)} />
                          <span>{itemCounts[product.id]}</span>
                          <BiMinus onClick={() => decrementCount(product.id)} />
                        </div>
                      ) : (
                        <BiPlus onClick={() => incrementCount(product.id)} />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
