import React from "react";

const Card = () => {
  return (
    <div className="flex items-center justify-center space-x-20 mt-8 text-gray-700 bg-white h-20 w-1/2 rounded-md shadow-md">
      <h1 className=" text-2xl ">Sunny Kumar</h1>
      <h1>goodluck14115@gmail.com</h1>
      <button className="bg-red-500 text-gray-100 font-bold px-2 py-1 rounded-md hover:bg-red-600 active:bg-gray-100 active:text-red-600 border-2 border-red-500">
        Remove
      </button>
    </div>
  );
};

export default Card;
