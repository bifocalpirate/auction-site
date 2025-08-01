import React from "react";
import { AiOutlineCar } from "react-icons/ai";

export default function NavBar() {
  return (
    <header
      className="sticky top-0 z-50 flex justify-between
        bg-white p-5 items-center text-gray-800 shadow-md shadow-neutral-300">
      <div className="items-center gap-2 flex text-3xl font-semibold text-red-500">
        <AiOutlineCar size={34} />
        <div className="text-2xl ">Carsties Auctions</div>
      </div>
      <div>Search</div>
      <div>Login</div>
    </header>
  );
}
