"use client";
import { useParamsStore } from "@/hooks/useParamStore";
import { ChangeEvent, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function Search() {
  const setParamst = useParamsStore((state) => state.setParams);
  const [value, setValue] = useState("");
  const searchTerm = useParamsStore((state) => state.searchTerm);

  useEffect(() => {
    if (searchTerm === "") setValue("");
  }, [searchTerm]);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  function handleSearch() {
    setParamst({ searchTerm: value });
  }
  return (
    <div className="flex w-[50%] items-center border-2 border-gray-300 rounded-full py-2 shadow-sm">
      <input
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
        onChange={handleChange}
        value={value}
        type="text"
        placeholder="Search for cars by make, model and colour"
        className="flex-grow 
                    text-sm
                    text-gray-700
                   pl-5 
                   bg-transparent
                   border-transparent
                   focus:border-transparent
                   focus:ring-0
                   focus:outline-none"
      />
      <button onClick={handleSearch}>
        <FaSearch
          size={34}
          className="bg-red-400 p-2 text-white rounded-full cursor-pointer mx-2"
        />
      </button>
    </div>
  );
}
