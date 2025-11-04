import {
  Laptop2,
  List,
  Maximize2,
  Mic2,
  SkipBack,
  SkipForward,
  Volume2,
} from "lucide-react";
import { PlayCircle } from "lucide-react";
import Image from "next/image";

export function PlayerBar() {
  return (
    <footer className="sticky bottom-4 mx-auto w-[96%] max-w-5xl rounded-[32px] border border-white/10 bg-black/80 p-4 text-white/80 shadow-2xl shadow-emerald-500/10 backdrop-blur-xl md:flex md:items-center md:gap-6">
      <div className="flex flex-1 items-center gap-3">
        <Image
          src="https://images.unsplash.com/photo-1524678778953-3f9a3dfd4ab1?auto=format&fit=crop&w=200&q=80"
          alt="Current track cover"
          width={56}
          height={56}
          className="h-14 w-14 rounded-2xl object-cover"
        />
        <div>
          <p className="text-sm font-semibold text-white/90">
            LOST IN PARADISE
          </p>
          <p className="text-xs text-white/50">R!OT, Nevve</p>
        </div>
      </div>

      <div className="flex flex-1 flex-col items-center gap-2">
        <div className="flex items-center gap-5">
          <SkipBack className="h-5 w-5 text-white/60 transition hover:text-white" />
          <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black transition hover:scale-105">
            <PlayCircle className="h-8 w-8" />
          </button>
          <SkipForward className="h-5 w-5 text-white/60 transition hover:text-white" />
        </div>
        <div className="flex w-full items-center gap-3 text-xs text-white/40">
          1:24
          <div className="h-1.5 w-full rounded-full bg-white/10">
            <div className="h-full w-2/3 rounded-full bg-emerald-400" />
          </div>
          3:56
        </div>
      </div>

      <div className="hidden flex-1 items-center justify-end gap-3 text-white/50 md:flex">
        <Mic2 className="h-4 w-4 transition hover:text-white" />
        <List className="h-4 w-4 transition hover:text-white" />
        <Laptop2 className="h-4 w-4 transition hover:text-white" />
        <div className="flex items-center gap-2">
          <Volume2 className="h-4 w-4 transition hover:text-white" />
          <div className="h-1.5 w-20 rounded-full bg-white/10">
            <div className="h-full w-3/5 rounded-full bg-white/70" />
          </div>
        </div>
        <Maximize2 className="h-4 w-4 transition hover:text-white" />
      </div>
    </footer>
  );
}
