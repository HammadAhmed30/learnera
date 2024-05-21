"use client";

import { useAuth } from "@/firebase/auth";
import { PiUserBold } from "react-icons/pi";

import Link from "next/link";
import LinkTag from "./LinkTag";
import { state } from "@/store";

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

const NavMobileContent = () => {
  const { authUser } = useAuth();

  return (
    <nav className="flex flex-col justify-evenly w-full h-[100vh] items-center px-ElementSpace  ">
      <div className="h-[75px] w-full flex justify-center items-center">
        <Link
          href={"/"}
          className="text-2xl text-center text-foreground font-[600] cursor-pointer"
        >
          Learnera
        </Link>
      </div>
      <div className="gap-ElementSpace flex flex-col items-center">
        {ListOfLinks.map((item, index) => (
          <LinkTag
            onClick={() => (state.sideMenu = false)}
            key={index}
            link={item.href}
            name={item.name}
          />
        ))}
      </div>
      <div className=" h-[75px] bg-foreground w-full flex justify-center items-center">
        {authUser ? (
          <Link
            onClick={() => (state.sideMenu = false)}
            href={"/profile"}
            className=" h-full w-full text-center flex justify-center items-center text-sm text-text-color font-[600]"
          >
            <PiUserBold className="text-background" size={22} />
          </Link>
        ) : (
          <Link
            onClick={() => (state.sideMenu = false)}
            href={"/login"}
            className=" h-full w-full text-center flex justify-center items-center text-sm text-text-color font-[600]"
          >
            Log In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavMobileContent;
