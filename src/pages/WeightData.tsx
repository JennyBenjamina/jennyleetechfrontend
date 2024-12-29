import { useEffect, useState } from "react";
import axiosInstance from "api/axiosInstance";
import { WeightData } from "../types/WeightData.ts";

import { Payment, columns } from "../components/WeightData/columns";
import { DataTable } from "../components/WeightData/data-table";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ];
}

function WeightDataPage() {
  const [data, setData] = useState<WeightData[]>([]);
  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axiosInstance.get("/weightData/getWeightData");
        console.log(response);
        setData(response.data);
      };
      fetchData();
    } catch (error) {
      console.log("error", error);
    }
  }, []);

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export default WeightDataPage;
