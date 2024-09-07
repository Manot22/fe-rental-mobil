import Link from "next/link";
import Nav from "@/components/Nav";
import MobNav from "@/components/MobNav";

const Header = () => {
  return (
    <header className="py-4 xl:py-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* LOGO */}
        <div className="font-bold text-xl flex justify-between items-center">
          <Link href="/">
            <h1 className="text-indigo-500">
              Renbi <span>.</span>
            </h1>
          </Link>
        </div>
        {/* NAVBAR */}
        <div className="hidden md:flex">
          <Nav />
        </div>
        {/* Mobile Nav */}
        <div className="md:hidden flex text-2xl">
          <MobNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
