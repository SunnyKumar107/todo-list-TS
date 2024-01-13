import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Card from "./components/Card";

function App() {
  const cards = [
    {
      name: "Sunny kumar",
      email: "goodluck14115@gmail.com",
      id: 1,
    },
  ];

  const [card, setCard] = useState(cards);

  type NewData = { name: string; email: string; id: number };

  const addCard = (newData: NewData) => setCard([newData, ...card]);
  const deleteCard = (id: number) => {
    const nowCard = card.filter((e) => e.id !== id);
    setCard(nowCard);
  };

  return (
    <div className=" h-[100vh] flex flex-col items-center">
      <Header />
      <Form handleClick={addCard} />
      <Card card={card} handleClick={deleteCard} />
    </div>
  );
}

export default App;
