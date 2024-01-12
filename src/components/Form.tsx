import React from "react";

const Form = () => {
  return (
    <div className=" flex justify-center mt-5">
      <form className="flex items-center space-x-3">
        <input
          className="border-2 hover:border-purple-400  focus:outline-purple-400 px-3 h-10 rounded-md text-gray-700 text-sm"
          type="text"
          placeholder="Name"
        />
        <input
          className="border-2 hover:border-purple-400 focus:outline-purple-400 px-3 h-10 rounded-md text-5m text-gray-700"
          type="text"
          placeholder="Email or Phone no."
        />
        <button className="bg-purple-500 text-white py-1 px-4 rounded-md hover:bg-purple-600 hover:cursor-pointer font-bold active:bg-white active:text-purple-600 border-2 border-purple-500">
          ADD
        </button>
      </form>
    </div>
  );
};

export default Form;
