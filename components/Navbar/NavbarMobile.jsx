"use client";

import { CiMenuKebab } from "react-icons/ci";

import Link from "next/link";
import { state } from "@/store";
import SideMenu from "../side-menu";
import NavMobileContent from "./side-bar-content-navbar";

const ListOfLinks = [
  {
    href: "/courses",
    name: "Courses",
  },
  {
    href: "/coming-soon",
    name: "Blogs",
  },
  {
    href: "/coming-soon",
    name: "Community",
  },
];

const NavbarForMobile = () => {
  return (
    <nav className="flex justify-between border-b-[1px] border-foreground w-full h-[60px] items-center">
      <SideMenu>
        <NavMobileContent/>
      </SideMenu>
      <div className="h-full border-r w-[160px] flex justify-center items-center">
        <Link
          href={"/"}
          className="text-2xl text-center text-foreground font-[600] cursor-pointer"
        >
          Learnera
        </Link>
      </div>
      <div
        className="h-full border-l w-[60px] flex justify-center items-center"
        onClick={() => {
          state.sideMenu = true;
        }}
      >
        <CiMenuKebab className="text-foreground cursor-pointer" size={26} />
      </div>
    </nav>
  );
};

export default NavbarForMobile;
