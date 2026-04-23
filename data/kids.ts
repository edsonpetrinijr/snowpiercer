export type Kid = {
  id: string;
  name: string;
  section: "tail" | "middle" | "front";
  position: { x: number; y: number }; // percentage
  color: string;
  dialogue: string;
  curtisDialogue: string;
};

export const KIDS: Kid[] = [
  {
    id: "mia",
    name: "Mia",
    section: "tail",
    position: { x: 10, y: 40 },
    color: "#ef4444",
    dialogue: "We live in the tail. There are hundreds of us packed into a few cars. Last winter, my brother got sick — there were no doctors back here.",
    curtisDialogue: "This is manufactured scarcity. Michel Foucault argued that power controls populations not through brute force, but by shaping what feels 'normal.' The tail's suffering isn't an accident — it's a design. Real World: We see this in how healthcare is rationed in many societies: not because medicine is scarce, but because access is deliberately limited to maintain order.",
  },
  {
    id: "clara",
    name: "Clara",
    section: "tail",
    position: { x: 24, y: 34 },
    color: "#f97316",
    dialogue: "My parents boarded when the world ended. They call us freeloaders. We didn't pay for a ticket — we just wanted to survive.",
    curtisDialogue: "That's Political Hegemony. Wilford turned survival into debt. The 'freeloader' label makes exploitation feel like fairness. Real World: This mirrors how 'bootstraps' rhetoric is used — framing poverty as personal failure to mask the structural conditions that create it.",
  },
  {
    id: "michel",
    name: "Michel",
    section: "middle",
    position: { x: 65, y: 30 },
    color: "#eab308",
    dialogue: "I'm from the middle cars. We have real food — not great, but real. Sometimes I wonder if ignoring the tail makes us just as guilty.",
    curtisDialogue: "That instinct is correct. Passive complicity keeps systems alive. The middle benefits just enough to have no incentive to revolt, but not enough to threaten those at the top. Real World: The 'middle class buffer' — a deliberate social structure that absorbs discontent and protects elite power from mass resistance.",
  },
  {
    id: "ethan",
    name: "Ethan",
    section: "front",
    position: { x: 75, y: 34 },
    color: "#22c55e",
    dialogue: "We have a garden car. Real vegetables. My father says the train must have order. Without hierarchy, everyone dies.",
    curtisDialogue: "Hierarchy presented as natural law — that's Ideological Naturalization. The powerful convince everyone that their dominance is inevitable, even necessary. Real World: 'Trickle-down economics' sells the same idea: inequality is the engine, not the flaw. Remove it and everything collapses — a claim that conveniently protects those at the top.",
  },
  {
    id: "nina",
    name: "Nina",
    section: "front",
    position: { x: 96, y: 34 },
    color: "#06b6d4",
    dialogue: "I've never been cold. Not once on this train. There are children in the tail my age — I've never met them.",
    curtisDialogue: "Proximity blindness. Frantz Fanon wrote that colonizer comfort depends on the colonized remaining invisible. When you never see the cost of your privilege, you never question it. Real World: Global supply chains work exactly this way — cheap electronics and clothes exist because the labor that makes them happens somewhere you'll never visit.",
  },
];
