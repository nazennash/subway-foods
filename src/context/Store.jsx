import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const Store = createContext(null);

export const StoreProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

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
  }, []);

  return <Store.Provider value={{ products }}>{children}</Store.Provider>;
};
