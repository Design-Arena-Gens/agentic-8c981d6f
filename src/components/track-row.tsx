import { Heart } from "lucide-react";
import type { Track } from "@/lib/data";

interface TrackRowProps {
  index: number;
  track: Track;
}

export function TrackRow({ index, track }: TrackRowProps) {
  return (
    <li className="grid grid-cols-[auto,1fr,auto] items-center gap-4 rounded-2xl px-4 py-3 text-sm text-white/80 transition hover:bg-white/5">
      <div className="flex items-center gap-4">
        <span className="w-6 text-center text-xs font-semibold text-white/40">
          {index + 1}
        </span>
        <div>
          <p className="font-medium text-white/90">{track.title}</p>
          <p className="text-xs text-white/50">{track.artist}</p>
        </div>
      </div>
      <span className="hidden text-xs tracking-wide text-white/50 md:block">
        {track.album}
      </span>
      <div className="flex items-center gap-4">
        {track.liked ? (
          <Heart className="h-4 w-4 fill-emerald-400 text-emerald-400" />
        ) : (
          <Heart className="h-4 w-4 text-white/30 transition hover:text-white/80" />
        )}
        <span className="text-xs font-medium text-white/60">
          {track.duration}
        </span>
      </div>
    </li>
  );
}
