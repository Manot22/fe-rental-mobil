import Link from "next/link";

const Header = () => {
  return (
    <header className="py-4 xl:py-8">
      <div className="container mx-auto font-bold text-xl">
        <Link href="/">
          <h1>
            Renbi <span>.</span>
          </h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
