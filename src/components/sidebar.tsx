import {
  BookOpen,
  Heart,
  Home,
  ListMusic,
  MicVocal,
  Music3,
  PlaySquare,
  Radio,
  Search,
} from "lucide-react";
import Link from "next/link";

const navPrimary = [
  { icon: Home, label: "Home" },
  { icon: Search, label: "Search" },
  { icon: Radio, label: "Live" },
];

const navLibrary = [
  { icon: ListMusic, label: "Your Library" },
  { icon: Heart, label: "Liked Songs" },
  { icon: BookOpen, label: "Made For You" },
  { icon: PlaySquare, label: "Playlists" },
  { icon: MicVocal, label: "Podcasts" },
  { icon: Music3, label: "Albums" },
];

const quickPlaylists = [
  "Morning Motivation",
  "Soft Indie",
  "Rainy Day Reads",
  "Focus Flow",
  "Glow R&B",
  "Lush Electronica",
  "Acoustic Calm",
];

export function Sidebar() {
  return (
    <aside className="hidden h-full w-64 shrink-0 flex-col gap-4 rounded-3xl bg-zinc-950/90 p-6 xl:flex">
      <div className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 text-xl font-semibold text-zinc-900">
          ♫
        </div>
        Lumina
      </div>

      <nav className="flex flex-col gap-1">
        {navPrimary.map((item) => (
          <Link
            key={item.label}
            href="#"
            className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-zinc-200 transition hover:bg-zinc-800/80 hover:text-white"
          >
            <item.icon className="h-5 w-5" />
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="mt-4">
        <p className="px-3 text-xs uppercase tracking-[0.2em] text-zinc-500">
          Your Library
        </p>
        <div className="mt-3 flex flex-col gap-1">
          {navLibrary.map((item) => (
            <Link
              key={item.label}
              href="#"
              className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-zinc-400 transition hover:bg-zinc-800/80 hover:text-white"
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-6 rounded-2xl bg-zinc-900/80 p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
          Quick Picks
        </p>
        <div className="mt-3 flex flex-col gap-2">
          {quickPlaylists.map((item) => (
            <button
              key={item}
              className="w-full rounded-xl bg-zinc-800/60 px-3 py-2 text-left text-sm text-zinc-200 transition hover:bg-emerald-500/20 hover:text-emerald-200"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
