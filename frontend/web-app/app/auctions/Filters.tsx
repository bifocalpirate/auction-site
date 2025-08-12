import { useParamsStore } from "@/hooks/useParamStore";
import { Button, ButtonGroup } from "flowbite-react";
import React from "react";

const pageSizes = [4, 8, 12, 16];
export default function Filters() {
  const pageSize = useParamsStore((state) => state.pageSize);
  const setParams = useParamsStore((state) => state.setParams);
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
                onClick={() => setParams({ pageSize: value })}
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
