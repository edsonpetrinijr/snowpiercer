export type Kid = {
  id: string;
  name: string;
  section: "tail" | "middle" | "front";
  position: { x: number; y: number }; // percentage
  color: string;
  dialogue: string;
};

export const KIDS: Kid[] = [
  {
    id: "mia",
    name: "Mia",
    section: "tail",
    position: { x: 10, y: 40 },
    color: "#ef4444",
    dialogue: "We live in the tail. There are hundreds of us packed into a few cars. Last winter, my brother got sick — there were no doctors back here.",
  },
  {
    id: "clara",
    name: "Clara",
    section: "tail",
    position: { x: 24, y: 34 },
    color: "#f97316",
    dialogue: "My parents boarded when the world ended. They call us freeloaders. We didn't pay for a ticket — we just wanted to survive.",
  },
  {
    id: "michel",
    name: "Michel",
    section: "middle",
    position: { x: 65, y: 30 },
    color: "#eab308",
    dialogue: "I'm from the middle cars. We have real food — not great, but real. Sometimes I wonder if ignoring the tail makes us just as guilty.",
  },
  {
    id: "ethan",
    name: "Ethan",
    section: "front",
    position: { x: 75, y: 34 },
    color: "#22c55e",
    dialogue: "We have a garden car. Real vegetables. My father says the train must have order. Without hierarchy, everyone dies.",
  },
  {
    id: "nina",
    name: "Nina",
    section: "front",
    position: { x: 96, y: 34 },
    color: "#06b6d4",
    dialogue: "I've never been cold. Not once on this train. There are children in the tail my age — I've never met them.",
  },
];
