import { Button, ButtonGroup } from "flowbite-react";
import React from "react";

type Props = {
  pageSize: number;
  setPageSize: (pageSize: number) => void;
  pageSizes: number[];
};

const pageSizes = [4, 8, 12, 16];
export default function Filters({ setPageSize, pageSize }: Props) {
  return (
    <div className="flex justify-between items-center mb-4">
      <div>
        <span className="uppercase text-sm text-gray-500 mr-2">Page size</span>
        <ButtonGroup outline>
          {pageSizes.map((value, index) => {
            return (
              <Button
                key={index}
                color={`${pageSize === value ? "red" : "gray"}`}
                onClick={() => setPageSize(value)}
                className="focus:ring-0">
                {value}
              </Button>
            );
          })}
        </ButtonGroup>
      </div>
    </div>
  );
}
