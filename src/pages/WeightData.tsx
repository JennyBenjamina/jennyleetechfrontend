import { useEffect, useState } from "react";
import axiosInstance from "api/axiosInstance";
import { WeightData } from "../types/WeightData.ts";

import { columns } from "../components/WeightData/columns";
import { DataTable } from "../components/WeightData/data-table";
import { WeightDataChart } from "../components/WeightData/WeightDataChart.tsx";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../components/ui/pagination.tsx";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../components/ui/select";

import useAuth from "hooks/useAuth.tsx";

const ROWS_PER_PAGE = 10; // Number of rows per page

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
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Reverse the data for most recent first
  const reversedData = [...data].reverse();

  const totalPages = Math.ceil(reversedData.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentData = reversedData.slice(startIndex, startIndex + rowsPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPageButtons = 5;

    if (totalPages <= maxPageButtons) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pageNumbers.push(1, 2, 3, 4, 5);
      } else if (currentPage > totalPages - 3) {
        pageNumbers.push(
          totalPages - 4,
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pageNumbers.push(
          currentPage - 2,
          currentPage - 1,
          currentPage,
          currentPage + 1,
          currentPage + 2
        );
      }
    }

    return (
      <>
        {currentPage > 3 && totalPages > maxPageButtons && (
          <>
            <PaginationItem>
              <PaginationLink onClick={() => handlePageClick(1)}>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          </>
        )}
        {pageNumbers.map((number) => (
          <PaginationItem key={number}>
            <PaginationLink
              onClick={() => handlePageClick(number)}
              className={`${
                currentPage === number ? "active" : ""
              } pagination-link cursor-pointer`}
            >
              {number}
            </PaginationLink>
          </PaginationItem>
        ))}
        {currentPage < totalPages - 2 && totalPages > maxPageButtons && (
          <>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                className="cursor-pointer"
                onClick={() => handlePageClick(totalPages)}
              >
                {totalPages}
              </PaginationLink>
            </PaginationItem>
          </>
        )}
      </>
    );
  };

  return (
    <div className="container mx-auto py-10">
      {/* Chart Component */}
      <WeightDataChart data={data} />

      {/* Rows Per Page Selector */}
      <div className="flex items-center justify-between mt-12">
        <div className="flex items-center gap-2">
          <label htmlFor="rowsPerPage" className="text-sm font-medium">
            Rows per page:
          </label>
          <Select
            value={rowsPerPage.toString()}
            onValueChange={(value) => {
              setRowsPerPage(Number(value));
              setCurrentPage(1); // Reset to the first page
            }}
          >
            <SelectTrigger className="w-20">
              <SelectValue placeholder={rowsPerPage.toString()} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">5</SelectItem>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="50">50</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Pagination className="mt-4">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                className="cursor-pointer"
                onClick={handlePrevious}
              />
            </PaginationItem>
            {renderPageNumbers()}
            <PaginationItem>
              <PaginationNext className="cursor-pointer" onClick={handleNext} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>

      {/* Data Table Component */}
      <DataTable columns={columns} data={currentData} />
    </div>
  );
}

export default WeightDataPage;
