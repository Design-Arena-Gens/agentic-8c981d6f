export type Playlist = {
  id: string;
  title: string;
  description: string;
  color: string;
  image?: string;
  followers?: string;
  mood?: string;
};

export type Track = {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
  liked?: boolean;
};

export const primaryPlaylists: Playlist[] = [
  {
    id: "daily-mix-1",
    title: "Daily Mix 1",
    description: "MUNA, Sylvan Esso, Maggie Rogers and more",
    color: "from-emerald-500/90 to-emerald-700/80",
    followers: "452K followers",
  },
  {
    id: "today-top-hits",
    title: "Today's Top Hits",
    description: "Sabrina Carpenter is on top of the Hottest 50!",
    color: "from-lime-400/90 to-green-600/80",
    followers: "32.5M followers",
  },
  {
    id: "rapcaviar",
    title: "RapCaviar",
    description: "New music from Don Toliver, Future and more",
    color: "from-orange-500/90 to-red-600/80",
    followers: "15.7M followers",
  },
  {
    id: "lofi-beats",
    title: "lofi beats",
    description: "chill beats, lofi vibes, perfect to focus",
    color: "from-indigo-500/90 to-blue-700/80",
    followers: "5.9M followers",
  },
];

export const madeForYou: Playlist[] = [
  {
    id: "release-radar",
    title: "Release Radar",
    description: "Catch all the latest drops from artists you follow.",
    color: "from-pink-500/90 to-purple-700/80",
  },
  {
    id: "discover-weekly",
    title: "Discover Weekly",
    description: "Fresh recommendations just for you. Updated every Monday.",
    color: "from-sky-500/90 to-blue-600/80",
  },
  {
    id: "dj-hyperdrive",
    title: "DJ Hyperdrive",
    description: "An AI DJ that blends your favorites with hidden gems.",
    color: "from-rose-500/90 to-amber-600/80",
  },
  {
    id: "time-capsule",
    title: "Time Capsule",
    description: "Throwback tracks tailored to your teenage years.",
    color: "from-amber-500/90 to-yellow-600/80",
  },
];

export const trendingNow: Playlist[] = [
  {
    id: "night-drive",
    title: "Night Drive",
    description: "Synthwave, nu-disco and late-night grooves.",
    color: "from-purple-600/90 to-indigo-800/80",
    mood: "Focus",
  },
  {
    id: "terminal-vibes",
    title: "Terminal Vibes",
    description: "Futuristic electronica, glitch, IDM & ambient techno.",
    color: "from-cyan-500/90 to-sky-700/80",
    mood: "New",
  },
  {
    id: "silver-lining",
    title: "Silver Lining",
    description: "Uplifting alt-pop and euphoric indie rock anthems.",
    color: "from-slate-500/90 to-slate-800/80",
    mood: "Feel-good",
  },
  {
    id: "piano-sunrise",
    title: "Piano Sunrise",
    description: "Minimal piano pieces for gentle mornings and deep work.",
    color: "from-amber-300/90 to-orange-500/80",
    mood: "Calm",
  },
];

export const recentlyPlayed: Track[] = [
  {
    id: "track-1",
    title: "Satellite",
    artist: "Harry Styles",
    album: "Harry's House",
    duration: "3:38",
    liked: true,
  },
  {
    id: "track-2",
    title: "Bags",
    artist: "Clairo",
    album: "Immunity",
    duration: "4:21",
  },
  {
    id: "track-3",
    title: "Hard To Imagine",
    artist: "The Neighbourhood",
    album: "Hard To Imagine The Neighbourhood Ever Changing",
    duration: "3:17",
  },
  {
    id: "track-4",
    title: "Illicit Affairs",
    artist: "Taylor Swift",
    album: "folklore",
    duration: "3:10",
    liked: true,
  },
  {
    id: "track-5",
    title: "Sodium",
    artist: "Bones",
    album: "USE ME",
    duration: "2:33",
  },
];
