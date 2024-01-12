import React from "react";

const Form = () => {
  return (
    <div className=" flex justify-center mt-5">
      <form className="flex items-center space-x-3">
        <input
          className="border-2 hover:border-purple-400 px-3 h-10 rounded-md "
          type="text"
          placeholder="Name"
        />
        <input
          className="border-2 hover:border-purple-400 px-3 h-10 rounded-md "
          type="text"
          placeholder="Email or Phone no."
        />
        <button className="bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 hover:cursor-pointer font-bold">
          ADD
        </button>
      </form>
    </div>
  );
};

export default Form;
