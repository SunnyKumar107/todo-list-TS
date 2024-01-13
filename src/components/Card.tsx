import React from "react";

type CardProps = {
  card: {
    name: string;
    email: string;
    id: number;
  }[];
  handleClick: (id: number) => void;
};

const Card = (props: CardProps) => {
  const cards = props.card;

  return (
    <div className="flex flex-wrap justify-around">
      {cards.map((e) => (
        <div
          className="bg-slate-100 flex items-start justify-around flex-col  m-8 text-gray-700  h-40 w-60 p-2 rounded-md shadow-slate-500 shadow-md"
          key={e.id}
        >
          <h1 className=" text-2xl ">{e.name}</h1>
          <h1>{e.email}</h1>
          <button
            onClick={() => props.handleClick(e.id)}
            className="bg-red-500 text-gray-100 font-bold px-2 py-1 rounded-md hover:bg-red-600 active:bg-gray-100 active:text-red-600 border-2 border-red-500"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Card;
