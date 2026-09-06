import { boardService } from "@/src/service/board.service";
import MyBoard from "./myBoard";
import { Board } from "@/src/types/board.type";
import Link from "next/link";
import CreateBoardDialog from "../../ui/createBoardModal";

// import Cookies from "js-cookie";

export default async function Dashboard({
  searchParams,
}: {
  searchParams: Promise<{
    boardModal: string;
  }>;
}) {
  const query = await searchParams;
  const isColumnModalOpen = query.boardModal === "true";

  const isDarkMode = false;
  const res = await boardService.getAllBoard();
  const boards: Board[] =
    "data" in res && Array.isArray(res.data) ? res.data : [];

  return (
    <main className="p-6 space-y-6">
      <div>
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">
          Your Active Boards ({boards?.length})
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Loop through created boards */}
          {boards?.map((board: Board) => (
            <MyBoard key={board.id} board={board} isDarkMode={false} />
          ))}

          {/* Dotted "Add New Board" Placeholder Box */}
          <div>
            <Link
              href={`/dashboard?boardModal=true`}
              className="w-full py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 border border-dashed transition-all duration-300 shadow-sm bg-white text-indigo-600 border-slate-200/80 hover:text-indigo-500 hover:bg-indigo-50/50 hover:border-indigo-300/80"
            >
              <span className="text-sm font-bold">＋</span> Add New Board
            </Link>

            {isColumnModalOpen && (
              <CreateBoardDialog isOpen={isColumnModalOpen} />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
