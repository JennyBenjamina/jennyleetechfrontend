import { ColumnDef } from "@tanstack/react-table";
import { WeightData } from "types/WeightData";

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
