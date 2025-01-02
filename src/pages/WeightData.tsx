import { useEffect, useState } from "react";
import axiosInstance from "api/axiosInstance";
import { WeightData } from "../types/WeightData.ts";

import { columns } from "../components/WeightData/columns";
import { DataTable } from "../components/WeightData/data-table";
import { WeightDataChart } from "../components/WeightData/WeightDataChart.tsx";
import useAuth from "hooks/useAuth.tsx";

function WeightDataPage() {
  const { activeUser } = useAuth();
  const [data, setData] = useState<WeightData[]>([]);

  // if (activeUser) {
  const id = activeUser.userId;
  useEffect(() => {
    try {
      const fetchData = async () => {
        // this is the API call to get the weight data for SPECIFIC userId
        // use query parameter
        const response = await axiosInstance.get(
          "/weightData/getUserWeightData?userId=" + id
        );
        console.log(response);
        response.data = response.data.map((item: WeightData) => {
          return {
            ...item,
            date: new Date(item.date).toLocaleDateString(),
          };
        });
        setData(response.data);
      };
      fetchData();
    } catch (error) {
      console.log("error", error);
    }
  }, [activeUser]);
  // }

  return (
    <div className="container mx-auto py-10">
      <WeightDataChart data={data} />
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export default WeightDataPage;
