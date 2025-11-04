import { Play, Users } from "lucide-react";
import Image from "next/image";

export function HeroBanner() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-emerald-500/70 via-emerald-600/60 to-slate-900/80 p-8 shadow-xl shadow-emerald-800/50">
      <div className="absolute -top-32 -right-24 h-64 w-64 rounded-full bg-emerald-300/40 blur-3xl" />
      <div className="absolute -bottom-16 left-12 h-36 w-36 rotate-12 rounded-full bg-white/10 blur-3xl" />

      <div className="relative flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="space-y-4">
          <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/90">
            Spotify Clone Experience
          </span>
          <h1 className="text-4xl font-bold leading-tight text-white drop-shadow-md md:text-5xl">
            Dive back into the tracks you love.
          </h1>
          <p className="max-w-xl text-base text-white/80 md:text-lg">
            Continue your vibe with freshly curated mixes, handcrafted playlists,
            and AI-powered DJ sessions built entirely in the browser.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/80">
            <div className="flex -space-x-2 overflow-hidden">
              {[21, 17, 23, 7].map((img) => (
                <Image
                  key={img}
                  className="h-9 w-9 rounded-full border-2 border-emerald-300/80 object-cover"
                  src={`https://i.pravatar.cc/48?img=${img}`}
                  alt="Listener avatar"
                  width={36}
                  height={36}
                />
              ))}
            </div>
            <span className="flex items-center gap-2 rounded-full border border-white/30 px-3 py-1">
              <Users className="h-4 w-4" /> 2.3M monthly listeners
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-105">
            <Play className="h-5 w-5" />
            Play
          </button>
          <button className="rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10">
            Follow
          </button>
        </div>
      </div>
    </section>
  );
}
