import React from "react";
import { Header } from "../components/Header";
import { ExploreMenu } from "../components/ExploreMenu";
import { Products } from "../components/Products";

export const Home = () => {
  return (
    <>
      <div className="container mx-auto">
        <Header />
        <ExploreMenu />
        <Products />
      </div>
      <div className="mt-5"></div>
    </>
  );
};
