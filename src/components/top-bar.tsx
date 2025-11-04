import { Bell, ChevronLeft, ChevronRight, Download, MonitorSmartphone } from "lucide-react";
import Image from "next/image";

export function TopBar() {
  return (
    <header className="flex items-center justify-between px-6 pt-6">
      <div className="flex items-center gap-2">
        <button className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900/80 text-white/80 transition hover:bg-zinc-800/80 hover:text-white">
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900/80 text-white/80 transition hover:bg-zinc-800/80 hover:text-white">
          <ChevronRight className="h-4 w-4" />
        </button>
        <div className="ml-4 rounded-full bg-white/10 px-6 py-2 text-sm text-white/80 backdrop-blur">
          Good afternoon
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="hidden items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-medium text-white/80 transition hover:border-emerald-400/60 hover:text-emerald-200 lg:flex">
          <MonitorSmartphone className="h-4 w-4" />
          Install App
        </button>
        <button className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900/80 text-white/80 transition hover:bg-zinc-800/80 hover:text-white">
          <Download className="h-4 w-4" />
        </button>
        <button className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900/80 text-white/80 transition hover:bg-zinc-800/80 hover:text-white">
          <Bell className="h-4 w-4" />
        </button>
        <div className="flex items-center gap-2 rounded-full bg-zinc-900/80 px-2 py-1 text-sm text-white/90">
          <Image
            src="https://i.pravatar.cc/48?img=32"
            alt="Profile"
            width={32}
            height={32}
            className="h-8 w-8 rounded-full"
          />
          <span className="mr-2 hidden font-semibold md:inline">Aurora</span>
        </div>
      </div>
    </header>
  );
}
