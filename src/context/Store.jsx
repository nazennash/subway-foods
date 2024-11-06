import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const Store = createContext(null);

export const StoreProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productId) => {
    if (!cartItems[productId]) {
      setCartItems((prevItems) => ({
        ...prevItems,
        [productId]: 1,
      }));
    } else {
      setCartItems((prevItems) => ({
        ...prevItems,
        [productId]: prevItems[productId] + 1,
      }));
    }
  };

  const minusItemFromCart = (productId) => {
    setCartItems((prevItems) => ({
      ...prevItems,
      [productId]: Math.max(prevItems[productId] - 1, 0),
    }));
  };

  const clearCart = () => {
    setCartItems({});
  };

  const getTotalPrice = () =>
    products
      .filter((product) => cartItems[product.id] > 0)
      .reduce((acc, product) => acc + product.price * cartItems[product.id], 0)
      .toFixed(2);

  const getTotalCartAmount = () =>
    (
      products
        .filter((product) => cartItems[product.id] > 0)
        .reduce(
          (acc, product) => acc + product.price * cartItems[product.id],
          0
        ) + 2
    ).toFixed(2);

  const totalQuantity = () =>
    products
      .filter((product) => cartItems[product.id] > 0)
      .reduce((acc, product) => acc + cartItems[product.id], 0);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "https://api.escuelajs.co/api/v1/products/"
      );
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

  useEffect(() => {
    fetchProducts();
    console.log(cartItems);
  }, [cartItems]);

  return (
    <Store.Provider
      value={{
        products,
        cartItems,
        addItemToCart,
        minusItemFromCart,
        clearCart,
        getTotalPrice,
        totalQuantity,
        getTotalCartAmount,
      }}
    >
      {children}
    </Store.Provider>
  );
};
