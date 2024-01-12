import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Card from "./components/Card";

function App() {
  return (
    <div className="bg-gray-100 h-[100vh] flex flex-col items-center">
      <Header />
      <Form />
      <Card />
    </div>
  );
}

export default App;
