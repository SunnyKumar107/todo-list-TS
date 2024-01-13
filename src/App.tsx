import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Card from "./components/Card";

function App() {
  const cards = [
    {
      name: "Asim",
      email: "asim@gmail.com",
      id: 1,
    },
    {
      name: "Gowtham",
      email: "gowtham@gmail.com",
      id: 2,
    },
    {
      name: "Paras",
      email: "Paras@gmail.com",
      id: 3,
    },
  ];

  const [card, setCard] = useState(cards);

  return (
    <div className="bg-gray-100 h-[100vh] flex flex-col items-center">
      <Header />
      <Form handleClick={(newData) => setCard([newData, ...card])} />
      <Card card={card} />
    </div>
  );
}

export default App;
