import React, { useState } from "react";
import { Header } from "../components/Header";
import { ExploreMenu } from "../components/ExploreMenu";
import { Products } from "../components/Products";
import { Footer } from "../components/Footer";

export const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  return (
    <>
      <div className="container mx-auto">
        <Header />
        <ExploreMenu setSelectedCategory={setSelectedCategory} />
        <Products
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
      <Footer />
    </>
  );
};
