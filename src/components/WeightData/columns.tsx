import { ColumnDef } from "@tanstack/react-table";
import { WeightData } from "types/WeightData";

export const columns: ColumnDef<WeightData>[] = [
  {
    accessorKey: "date",
    header: "Date",
    sortingFn: (rowA, rowB, columnId) => {
      const dateA = new Date(rowA.getValue(columnId));
      const dateB = new Date(rowB.getValue(columnId));
      return dateB.getTime() - dateA.getTime(); // Descending order
    },
    cell: ({ getValue }) => {
      const date = new Date(getValue() as string);
      return date.toLocaleDateString(); // Format date
    },
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
