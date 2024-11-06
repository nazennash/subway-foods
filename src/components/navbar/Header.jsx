import image from "../../assets/imag1.jpg";

export const Header = () => {
  return (
    <>
      <div className="relative w-full h-auto flex">
        <img
          src={image}
          alt=""
          className="w-full h-96 object-cover rounded-lg "
        />
        <div className="absolute p-5 flex flex-col gap-5 h-full w-full justify-center">
          <div className="flex flex-col gap-5">
            <p className="text-3xl font-bold max-w-72">
              Order your favourite food here
            </p>
            <p className="max-w-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              laboriosam pariatur, saepe accusamus blanditiis et. Porro, impedit
              odit. Fuga esse tempore ullam, omnis eos vero facilis delectus
              nostrum assumenda tempora.
            </p>
          </div>
          <button className="text-black w-3/12 bg-white p-2 rounded-3xl">
            View Menu
          </button>
        </div>
      </div>
    </>
  );
};
