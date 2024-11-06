import React from "react";
import { Header } from "../components/navbar/Header";
import { ExploreMenu } from "../components/navbar/ExploreMenu";

export const Home = () => {
  return (
    <>
      <div className="container mx-auto">
        <Header />
        <ExploreMenu />
      </div>
      <div className="mt-5"></div>
    </>
  );
};
