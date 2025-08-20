"use client";
import { signOut } from "@/auth";
import { Dropdown, DropdownDivider, DropdownItem } from "flowbite-react";
import { User } from "next-auth";
import Link from "next/link";
import React from "react";
import { AiFillCar, AiFillTrophy, AiOutlineLogout } from "react-icons/ai";
import { HiCog, HiUser } from "react-icons/hi2";

type Props = {
  user: User;
};
export default function UserActions({ user }: Props) {
  return (
    <>
      <Dropdown
        inline
        label={`Welcome ${user.name}`}>
        <DropdownItem icon={HiUser}>My auctions</DropdownItem>
        <DropdownItem icon={AiFillTrophy}>Auctions won</DropdownItem>
        <DropdownItem icon={AiFillCar}>Sell my car</DropdownItem>
        <DropdownItem icon={HiCog}>
          <Link href="/session">Session</Link>
        </DropdownItem>
        <DropdownDivider />
        <DropdownItem
          onClick={() => signOut({ redirectTo: "/" })}
          icon={AiOutlineLogout}>
          Logout
        </DropdownItem>
      </Dropdown>
    </>
  );
}
