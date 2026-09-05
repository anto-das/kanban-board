import DashboardSidebar from "@/src/component/ui/dashboardSidebar";
import Logo from "@/src/component/ui/logo";
import SidebarFooter from "@/src/component/ui/sidebarFooter";
import Link from "next/link";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const isDarkMode = false;
  return (
    <div>
      <header
        className={`px-6 py-4 flex justify-between items-center border-b transition-colors duration-300 ${
          isDarkMode
            ? "bg-[#131926] border-slate-800"
            : "bg-white border-slate-200"
        }`}
      >
        <div>
          <h1 className="text-xl font-bold tracking-tight">
            User Workspace Hub
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Manage your structural project pipelines and view your board roles
            here.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <button
            // onClick={() => setIsDarkMode(!isDarkMode)}
            className={`px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all hover:scale-105 ${
              isDarkMode
                ? "bg-slate-800 border-slate-700 text-yellow-400"
                : "bg-white border-slate-200 text-indigo-600 shadow-sm"
            }`}
          >
            {isDarkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
          <button
            //   onClick={handleCreateBoard}
            className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-sm transition-all"
          >
            + Create Board
          </button>
        </div>
      </header>
      {/* 💾 Sidebar Component */}
      <div className="flex">
        <aside
          className={`w-64 border-r hidden md:flex flex-col p-5 justify-between transition-colors duration-300 ${isDarkMode ? "bg-[#131926] border-slate-800" : "bg-white border-slate-200"} `}
        >
          <div className="space-y-6">
            {/* Logo */}
            <Link href={"/"} className="flex items-center gap-2 px-2">
              <Logo />
            </Link>

            {/* Navigation Links */}
            <DashboardSidebar />
          </div>

          {/* User Account Info & Logout Button */}
          <SidebarFooter />
        </aside>

        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
