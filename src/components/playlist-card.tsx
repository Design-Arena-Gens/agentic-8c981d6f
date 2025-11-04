import { Play } from "lucide-react";
import type { Playlist } from "@/lib/data";

interface PlaylistCardProps {
  playlist: Playlist;
}

export function PlaylistCard({ playlist }: PlaylistCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-3xl bg-gradient-to-br p-[1px] shadow-lg shadow-black/40 transition hover:-translate-y-1 hover:shadow-emerald-500/30">
      <div className={`relative h-full rounded-[22px] bg-gradient-to-br ${playlist.color} p-6`}>
        <div className="flex h-full flex-col justify-between">
          <div className="space-y-3">
            {playlist.mood ? (
              <span className="inline-flex items-center rounded-full bg-white/20 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
                {playlist.mood}
              </span>
            ) : null}
            <h3 className="text-xl font-semibold text-white drop-shadow-sm">
              {playlist.title}
            </h3>
            <p className="text-sm text-white/80">{playlist.description}</p>
          </div>
          <div className="mt-6 flex items-center justify-between text-xs text-white/70">
            {playlist.followers ? <p>{playlist.followers}</p> : <div />}
            <button className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-zinc-900 opacity-0 shadow-lg transition group-hover:translate-y-0 group-hover:opacity-100 md:opacity-100">
              <Play className="ml-1 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
