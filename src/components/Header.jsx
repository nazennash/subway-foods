import { BsArrowRight } from "react-icons/bs";
import image from "../assets/image2.jpg";

export const Header = () => {
  return (
    <div className="m-2 md:m-0">
      <div className="relative w-full h-auto flex ">
        <img
          src={image}
          alt="Food"
          className="w-full h-60 md:h-96 object-cover rounded-xl "
        />
        <div className="absolute inset-0 p-5 flex flex-col gap-5 justify-center bg-gray-900 bg-opacity-50 rounded-xl  text-white">
          <div className="flex flex-col gap-3 md:gap-5 max-w-lg">
            <p className="text-3xl md:text-4xl font-bold">
              Satisfy your cravings and order the food you love here
            </p>
            <p className="text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              laboriosam pariatur, saepe accusamus blanditiis et.
            </p>
          </div>
          <button className="w-32 md:w-40 bg-white text-black font-semibold py-2 rounded-3xl hover:bg-gray-200 transition duration-300 flex items-center gap-2 justify-center">
            <span>Check out</span> <BsArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};
