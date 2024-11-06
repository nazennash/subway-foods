import React, { useEffect, useState } from "react";
import axios from "axios";

export const ExploreMenu = ({ setSelectedCategory }) => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "https://api.escuelajs.co/api/v1/categories/"
      );
      const data = response.data;

      const filteredCategories = data
        .filter((category) => category.image)
        .reduce((acc, current) => {
          if (!acc.some((item) => item.name === current.name)) {
            acc.push(current);
          }
          return acc;
        }, []);

      setCategories(filteredCategories);
    } catch (error) {
      console.error("Error fetching categories", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <div className="mt-5 flex flex-col p-3 gap-3" id="explore-menu">
        <div>
          <p className="font-bold text-xl tracking-wide">Explore our menu</p>
          <p className="max-w-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem veniam
            eaque quasi perferendis laboriosam, corrupti harum explicabo! Id
            itaque voluptatum,
          </p>
        </div>

        <div className="flex flex-row gap-5 overflow-x-auto scrollbar-hide mt-5">
          {categories.map((category) => (
            <div key={category.id}>
              <div
                className="w-28 flex items-center flex-col"
                onClick={() => setSelectedCategory(category.id)}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="object-contain rounded-full"
                />
                <div>
                  <p className="font-bold">{category.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
