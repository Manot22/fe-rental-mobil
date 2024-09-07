"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { IoMdMenu } from "react-icons/io";
import { link } from "fs";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "tentang kami",
    path: "/tentangKami",
  },
  {
    name: "daftar mobil",
    path: "/daftarMobil",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const MobNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger>
        <IoMdMenu />
      </SheetTrigger>
      <SheetContent>
        {/* LOGO */}
        <div className="font-bold text-xl flex justify-center items-center my-16">
          <Link href="/">
            <h1 className="text-indigo-500">
              Renbi <span>.</span>
            </h1>
          </Link>
        </div>
        {/* Navbar */}
        <nav className="flex flex-col justify-center items-center gap-8 ">
          {links.map((link, index) => {
            return (
              <Link
                key={index}
                href={link.path}
                className={`${
                  link.path === pathname &&
                  "text-indigo-500 border-b-2 border-indigo-500"
                } capitalize hover:text-indigo-700 font-medium transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobNav;
