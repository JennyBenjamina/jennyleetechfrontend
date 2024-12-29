"use client";

import { ColumnDef } from "@tanstack/react-table";
import { WeightData } from "types/WeightData";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const columns: ColumnDef<WeightData>[] = [
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "weight",
    header: "Weight",
  },
  {
    accessorKey: "disposition",
    header: "Disposition",
  },
];
