"use client";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useCallback } from "react";
import Logo from "./Logo";
import { cn } from "@/lib/utils";

type MenuItems = {
  [key: string]: string;
};

const menuItems: MenuItems[] = [
  { item: "Courses", link: "/courses" },
  { item: "Platforms", link: "/platforms" },
  { item: "Resources", link: "/resources" },
  { item: "About", link: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const handleMenu = useCallback((action: boolean) => {
    setIsMenuOpen(action);
  }, []);
  return (
    <>
      <header
        className={cn(
          `flex items-center justify-between md:px-4 lg:px-8  shadow-primary w-full  text-white bg-hero-pattern fixed z-[97]  py-4 md:py-0`
        )}
      >
        {/* Logo to show on Desktop view */}
        <div className={cn(`pl-4  `, {})}>
          <Logo />
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            `
      absolute z-[100] md:pt-0 shadow-primary border-b border-[#FFF] flex items-center justify-between md:hidden w-[70%] transform transition duration-300 bg-hero-pattern py-4`,
            {
              "-translate-x-full": !isMenuOpen,
              "translate-x-0": isMenuOpen,
            }
          )}
        >
          {/* Logo to show on mobile view */}
          <div className={cn(` pl-4`)}>
            <Logo onClose={() => handleMenu(false)} />
          </div>
          <span
            onClick={() => handleMenu(false)}
            className={cn(`cursor-pointer pr-4`)}
          >
            {" "}
            <AiOutlineClose className="text-[#FFF]" size={24} />{" "}
          </span>
        </div>

        {/* OverLay */}
        <div
          onClick={() => handleMenu(false)}
          className={cn(
            `absolute z-[98] bg-black/40 inset-0  transition min-h-screen duration-300 md:hidden`,
            {
              "translate-x-0": isMenuOpen,
              "-translate-x-full": !isMenuOpen,
            }
          )}
        ></div>

        {/* Nav Links */}
        <nav
          className={cn(
            `flex flex-col pt-10 md:pt-0 inset-0 absolute  top-[4.5rem] md:top-0 bottom-0 min-h-screen md:min-h-fit z-[99] w-[70%] md:w-fit transform md:translate-x-0 transition duration-300 md:relative md:flex-row md:flex md:space-x-4 bg-hero-pattern md:bg-none`,
            {
              "translate-x-0": isMenuOpen,
              "-translate-x-full": !isMenuOpen,
            }
          )}
        >
          {menuItems.map((item) => (
            <Link
              onClick={() => handleMenu(false)}
              href={item.link}
              key={item.item}
              className={cn(`nav__link`, {
                "font-bold border-b-2 border-[#FFF] ": pathname === item.link,
              })}
            >
              {item.item}
            </Link>
          ))}
        </nav>

        {/* Hamburger Menu */}
        <span
          onClick={() => handleMenu(true)}
          className={cn(`md:hidden cursor-pointer pr-4`, {
            hidden: isMenuOpen,
          })}
        >
          <GiHamburgerMenu className=" text-[#FFF]" size={24} />
        </span>
      </header>
    </>
  );
}
