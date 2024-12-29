import { useState } from "react";
import { InputDataCard } from "../components/InputDataCard.tsx";
import axiosInstance from "../api/axiosInstance.tsx";
import { toast } from "../@/hooks/use-toast.ts";

function Home() {
  const [weight, setWeight] = useState<number>();
  const [disposition, setDisposition] = useState<number>();
  const [date, setDate] = useState<Date>(new Date());

  const handleWeight = (weight: number) => {
    setWeight(weight);
  };

  const handleDisposition = (disposition: number) => {
    setDisposition(disposition);
  };

  const handleDate = (date: Date) => {
    setDate(date);
  };

  const handleOnClick = async () => {
    try {
      console.log(axiosInstance, "axios");
      await axiosInstance.post("/weightData/addWeightData", {
        userId: "1",
        weight: weight,
        disposition: disposition,
        date: date,
      });
      toast({
        title: "New Weight Added!",
        description: `${weight} lbs added to the database for ${date.toLocaleDateString()}`,
      });
      console.log("success");
    } catch (error) {
      toast({
        title: "Error on adding new weight!",
        description: `${error}`,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container mx-auto max-w-2xl">
      <InputDataCard
        handleWeight={handleWeight}
        handleDisposition={handleDisposition}
        handleDate={handleDate}
        handleOnClick={handleOnClick}
      />
      <div className="mt-4">
        <h3 className="font-bold">Summary:</h3>
        <p>Weight: {weight ?? "N/A"} lbs</p>
        <p>Disposition: {disposition ?? "N/A"}</p>
        <p>Date: {date ? date.toLocaleDateString() : "N/A"}</p>
      </div>
    </div>
  );
}

export default Home;
