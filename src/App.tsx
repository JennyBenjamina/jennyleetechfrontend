import { useState } from "react";
import { Navigation } from "./components/Navigation.tsx";
import { InputDataCard } from "./components/InputDataCard.tsx";

import "./App.css";

function App() {
  const [weight, setWeight] = useState<number>();
  const [disposition, setDisposition] = useState<number>();
  const [date, setDate] = useState<Date>();

  const handleWeight = (weight: number) => {
    setWeight(weight);
  };

  const handleDisposition = (disposition: number) => {
    setDisposition(disposition);
  };

  const handleDate = (date: Date) => {
    setDate(date);
    console.log("i'm in ", date);
  };

  return (
    <div className="App">
      <Navigation />
      <div className="container mx-auto max-w-2xl">
        <InputDataCard
          handleWeight={handleWeight}
          handleDisposition={handleDisposition}
          handleDate={handleDate}
        />
        <div className="mt-4">
          <h3 className="font-bold">Summary:</h3>
          <p>Weight: {weight ?? "N/A"} lbs</p>
          <p>Disposition: {disposition ?? "N/A"}</p>
          <p>Date: {date ? date.toLocaleDateString() : "N/A"}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
