export type AtlasChapter = {
  id: string;
  index: string;
  jp: string;
  title: string;
  kicker: string;
  image: string;
  alt: string;
  body: string;
};

export const atlasChapters: AtlasChapter[] = [
  {
    id: "neural",
    index: "01",
    jp: "神経",
    title: "Neural",
    kicker: "A gigantic structure emerging from the landscape",
    image: "/art/hero-neural.png",
    alt: "A monumental neural architecture rising from a misty valley beneath a large amber sun",
    body: "Cognition, built at the scale of mountains. A single organic-geometric volume — filaments, spires, a dome like a sleeping mind — surfaces through cream haze. This is how TechX draws intelligence: not as a diagram, but as a place you could walk toward.",
  },
  {
    id: "spark",
    index: "02",
    jp: "閃光",
    title: "Spark",
    kicker: "Amber energy travelling through a futuristic city",
    image: "/art/city-spark.png",
    alt: "A river of amber energy winding through a clean geometric futuristic city in atmospheric haze",
    body: "Energy is the only accent. A filament of #CF8326 moves through monumental streets the way firelight moves through paper. The city stays still. The spark is the sentence.",
  },
  {
    id: "automaton",
    index: "03",
    jp: "機構",
    title: "Automaton",
    kicker: "Abstract robotics as architecture",
    image: "/art/robotics-architecture.png",
    alt: "A colossal machine-temple of clean geometric volumes built into a misty mountainside",
    body: "No characters. No chrome mascots. Robotics here is a shrine of joints and planes — a dormant instrument set into rock and water. Form first. Function held in reserve.",
  },
  {
    id: "genome",
    index: "04",
    jp: "遺伝子",
    title: "Genome",
    kicker: "DNA as landscape architecture",
    image: "/art/dna-landscape.png",
    alt: "Colossal DNA helix towers rising from a misty lake beneath a large orange sun",
    body: "The helix is not a metaphor pasted on a sky. It is a tower, a quay, a shoreline. Biology enters the atlas the same way stone does: slowly, at monumental scale, with mist at its feet.",
  },
  {
    id: "signal",
    index: "05",
    jp: "交信",
    title: "Signal",
    kicker: "Massive communication towers and network structures",
    image: "/art/signal-towers.png",
    alt: "Monumental communication towers linked by faint amber filaments across a misty plain",
    body: "Networks without neon. Dishes, spires, and hair-thin amber lines span a quiet plain. Distance is the subject. The message is the space between the towers.",
  },
  {
    id: "celestial",
    index: "06",
    jp: "天体",
    title: "Celestial",
    kicker: "A large orange body over clean geometry",
    image: "/art/celestial-pavilion.png",
    alt: "A stacked geometric pavilion on still water beneath an enormous amber sun",
    body: "The sun is not a backdrop. It is a character — oversized, flat, editorial — the way a woodblock print holds a moon. Architecture sits low. The sky does the work.",
  },
];

export const palette = [
  { name: "Amber energy", hex: "#CF8326" },
  { name: "Atmospheric light", hex: "#FFFCF1" },
  { name: "Depth", hex: "#1C100A" },
] as const;

export const artDirection = [
  "architectural concept art",
  "warm amber monochromatic palette",
  "retro-futurism",
  "editorial composition",
  "cinematic atmospheric haze",
  "Japanese-inspired minimal composition",
  "fine grain texture",
] as const;
