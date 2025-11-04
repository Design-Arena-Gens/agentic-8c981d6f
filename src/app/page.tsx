import { ActivityPanel } from "@/components/activity-panel";
import { HeroBanner } from "@/components/hero-banner";
import { PlayerBar } from "@/components/player-bar";
import { PlaylistCard } from "@/components/playlist-card";
import { Sidebar } from "@/components/sidebar";
import { TopBar } from "@/components/top-bar";
import { TrackRow } from "@/components/track-row";
import {
  madeForYou,
  primaryPlaylists,
  recentlyPlayed,
  trendingNow,
} from "@/lib/data";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#030303] text-white">
      <div className="flex flex-1 gap-6 overflow-hidden px-4 pb-28 pt-4 md:px-6 md:pt-6">
        <Sidebar />
        <main className="glass flex w-full flex-1 flex-col overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-slate-950/90 via-slate-950/40 to-slate-900/60 backdrop-blur-xl">
          <TopBar />
          <div className="scroll-area flex-1 overflow-y-auto px-6 pb-16 pt-8">
            <HeroBanner />

            <section className="mt-10 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">Jump back in</h2>
                <button className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50 transition hover:text-white/80">
                  View All
                </button>
              </div>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {primaryPlaylists.map((playlist) => (
                  <PlaylistCard key={playlist.id} playlist={playlist} />
                ))}
              </div>
            </section>

            <section className="mt-14 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">Made For You</h2>
                <button className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50 transition hover:text-white/80">
                  View All
                </button>
              </div>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {madeForYou.map((playlist) => (
                  <PlaylistCard key={playlist.id} playlist={playlist} />
                ))}
              </div>
            </section>

            <section className="mt-14 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">
                  Trending right now
                </h2>
                <button className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50 transition hover:text-white/80">
                  View All
                </button>
              </div>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {trendingNow.map((playlist) => (
                  <PlaylistCard key={playlist.id} playlist={playlist} />
                ))}
              </div>
            </section>

            <section className="mt-14 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">
                  Recently played
                </h2>
                <button className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50 transition hover:text-white/80">
                  View All
                </button>
              </div>
              <ul className="space-y-2 rounded-3xl border border-white/5 bg-white/5 p-4 backdrop-blur-xl">
                {recentlyPlayed.map((track, index) => (
                  <TrackRow key={track.id} index={index} track={track} />
                ))}
              </ul>
            </section>
          </div>
        </main>
        <ActivityPanel />
      </div>

      <PlayerBar />
    </div>
  );
}
