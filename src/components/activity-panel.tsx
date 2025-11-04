import Image from "next/image";
import { Activity, Wifi } from "lucide-react";

const activity = [
  {
    name: "Liam Chen",
    status: "Listening on Web Player",
    track: "Golden Hour",
    artist: "JVKE",
    progress: 62,
  },
  {
    name: "Maya Patel",
    status: "On Echo Dot",
    track: "Cloud 9",
    artist: "Beach Bunny",
    progress: 35,
  },
  {
    name: "Diego Rivera",
    status: "Listening on iPhone",
    track: "Sunset Lover",
    artist: "Petit Biscuit",
    progress: 78,
  },
];

export function ActivityPanel() {
  return (
    <aside className="hidden h-full w-72 shrink-0 rounded-3xl bg-black/60 p-6 text-white/80 backdrop-blur-xl 2xl:flex">
      <div className="flex w-full flex-col gap-6">
        <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.3em]">
          <span>Friend Activity</span>
          <Activity className="h-4 w-4 text-emerald-300/80" />
        </div>

        <div className="rounded-2xl bg-white/5 p-4 text-xs text-white/60">
          <p className="font-medium text-white/80">Never miss a moment</p>
          <p className="mt-1 leading-relaxed">
            See what your friends are playing in real time. Connect Spotify to
            Discord or follow friends to start.
          </p>
          <button className="mt-3 w-full rounded-xl bg-emerald-500 px-3 py-2 text-xs font-semibold text-black transition hover:bg-emerald-400">
            Connect a Device
          </button>
        </div>

        <div className="flex flex-col gap-4">
          {activity.map((entry, index) => (
            <div
              key={entry.name}
              className="rounded-2xl bg-white/5 p-4 transition hover:bg-white/10"
            >
              <div className="flex items-center gap-3">
                <Image
                  src={`https://i.pravatar.cc/64?img=${index + 12}`}
                  alt={entry.name}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full border border-white/20"
                />
                <div>
                  <p className="text-sm font-semibold text-white/90">
                    {entry.name}
                  </p>
                  <p className="flex items-center gap-1 text-[11px] uppercase tracking-[0.2em] text-white/40">
                    <Wifi className="h-3 w-3" /> {entry.status}
                  </p>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <p className="text-sm font-medium text-white/90">
                  {entry.track}
                </p>
                <p className="text-xs text-white/50">{entry.artist}</p>
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/40">
                  <div className="h-1.5 flex-1 rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-emerald-400"
                      style={{ width: `${entry.progress}%` }}
                    />
                  </div>
                  {entry.progress}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
