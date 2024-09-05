"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="container mx-auto flex gap-8 py-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
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
  );
};

export default Nav;
