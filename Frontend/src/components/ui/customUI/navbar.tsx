import Link from "next/link";
import Logo from "./logo";

const Navbar = () => {
  return (
    <nav className="border-b border-slate-200/80 bg-white/70 backdrop-blur-md sticky top-0 z-50 px-6 py-4 flex justify-between items-center max-w-7xl mx-auto w-full">
      <div className="flex items-center gap-2">
        <Link href={"/"}>
          <Logo />
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Link
          href="/login"
          className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
        >
          Sign In
        </Link>
        <Link
          href="/register"
          className="text-sm font-medium bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg shadow-sm shadow-indigo-600/10 transition-all hover:-translate-y-0.5"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
