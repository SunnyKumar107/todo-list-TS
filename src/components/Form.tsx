import React from "react";
import { useState } from "react";

type FormProps = {
  handleClick: (newData: { name: string; email: string; id: number }) => void;
};

const Form = (props: FormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const newData = {
    name: name,
    email: email,
    id: Math.floor(Math.random() * 1000),
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  const clickHandler = () => {
    props.handleClick(newData);
    setName("");
    setEmail("");
  };

  return (
    <div className=" flex justify-center mt-5">
      <form onSubmit={handleSubmit} className="flex items-center space-x-3">
        <input
          className="border-2 hover:border-purple-400  focus:outline-purple-400 px-3 h-10 rounded-md text-gray-700 text-sm"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border-2 hover:border-purple-400 focus:outline-purple-400 px-3 h-10 rounded-md text-5m text-gray-700"
          type="text"
          placeholder="Email or Phone no."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="bg-purple-500 text-white py-1 px-4 rounded-md hover:bg-purple-600 hover:cursor-pointer font-bold active:bg-white active:text-purple-600 border-2 border-purple-500"
          onClick={clickHandler}
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default Form;
