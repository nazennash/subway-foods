import React, { useContext } from "react";
import { Store } from "../context/Store";

export const Products = () => {
  const { products } = useContext(Store);
  console.log(products);
  return (
    <>
      <div className="mt-5 p-3">
        <div>
          <div className="mb-2">
            <span className="font-bold text-xl">Products | </span>
            <span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
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
                  className="w-48 flex mx-auto"
                />
                <div>
                  <p className="font-semibold">
                    {product.title.length > 20 ? (
                      <h3>{product.title.slice(0, 15)}...</h3>
                    ) : (
                      <h3>{product.title}</h3>
                    )}
                  </p>
                  <h3>${product.price}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
