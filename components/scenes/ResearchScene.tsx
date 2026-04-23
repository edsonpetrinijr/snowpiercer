"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Tab = "home" | "about" | "bio" | "works-cited";

const TABS: { id: Tab; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "bio", label: "Bio" },
  { id: "works-cited", label: "Works Cited" },
];

function HomeTab() {
  return (
    <div className="flex flex-col">
      {/* Hero image */}
      <div className="relative w-full h-[70vh] overflow-hidden">
        <img
          src="/poster.jpg"
          alt="Snowpiercer poster"
          className="w-full h-full object-cover object-top"
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col items-center text-center gap-3">
          <p className="text-xs text-amber-400 tracking-widest uppercase font-mono">
            Interactive Exhibit
          </p>
          <h1 className="text-5xl font-bold tracking-tight drop-shadow-lg">
            Snowpiercer
          </h1>
          <p className="text-zinc-300 text-base max-w-xl leading-relaxed">
            The Architecture of Control — a digital exhibit on social inequality,
            class division, and structural injustice.
          </p>
        </div>
      </div>

      {/* Intro text */}
      <div className="max-w-2xl mx-auto px-6 py-10 flex flex-col gap-4 text-center">
        <p className="text-zinc-400 leading-relaxed">
          Directed by Bong Joon-ho, <em>Snowpiercer</em> (2013) is more than a
          dystopian thriller — it is a precise map of how power designs space,
          controls bodies, and manufactures consent.
        </p>
        <p className="text-zinc-500 text-sm">
          Use the tabs above to explore our research, learn about the authors, and
          find our sources.
        </p>
      </div>
    </div>
  );
}

const ABOUT_SECTIONS = [
  {
    label: "Introduction",
    image: "/image1.png",
    imageCaption: "",
    body: [
      "Science fiction is not an imaginative exercise about the future, but rather a critical analysis of the present. This exhibit aims to dismantle the invisible power structures in Snowpiercer for movie analysis lovers, people concerned with inequality issues, and students interested in sociological discussions. We demonstrate how the power structures are related to the concepts of systemic marginalization and oppression.",
      "We intend to communicate that inequality is not something that just happens; it's a deliberate design. By curating multimodal media, ranging from visual records from the movie to simulated interactions, we want to let the audience take a peek into the life of Snowpiercer from both first-person and third-person POVs.",
    ],
  },
  {
    label: "Stance",
    image: "/image2.png",
    imageCaption: "",
    body: [
      "We argue that Snowpiercer critiques the political hegemony that is infused in education and explores the relativity between devastation and the construction of civilization.",
      "Our stance holds the argument that Snowpiercer is an experiment of sociopolitical domination. The sacred engine is not just a machine; it's the center of a sort of religion designed to have the marginalized accept their reality of being exploited as a necessary sacrifice for the common good.",
      "The main goal of our exhibition is to expose how obedience can be manufactured and how that is sustained in reality as well by the same strategies used by Wilford in the movie: the control of a space and the use of fear and emotional manipulation, especially with new generations. Additionally, we intend to shed light on Bong Joon Ho's exploration of the relativity between destructions and constructions — to what extent the destruction needs to reach in order for reconstruction to take place.",
    ],
  },
  {
    label: "Population and Resource Management",
    image: "/image3.png",
    imageCaption: "",
    body: [
      "The underlying philosophy of this space draws from Foucault's biopolitics: modern power doesn't just repress, it manages populations. In Snowpiercer, the management of life is absolute: Wilford decides who eats, who procreates, and who is sacrificed to make sure the ecosystem that exists in the train doesn't collapse. An exact number of population as precise as \"74%\" dictates the life-death of tail section (lower class) people.",
      "Meanwhile, resources are segregated between carriages as the rebels from the tail section could only use fire against front-section soldiers armed with night vision and other high-tech equipment.",
    ],
  },
  {
    label: "Political Hegemony and Education",
    body: [
      "The most critical side of Snowpiercer's depiction of manufactured inequality our exhibit intended to convey is how the classroom is not a learning space but a disciplinary institution. Obedient citizens are made there through repeated \"rituals\" in the name of school and education. The classroom and lectures in Snowpiercer served as an epitome of schools in reality where ideologies were taught and consolidated through means like impartations and social interactions.",
      "According to Michel Foucault, political hegemony thus has the chance to be instilled upon children through education as it is an effective means by which ideas and ideologies were established and practiced. And since ideologies constitute hegemony, inequality control and the ideological justifications behind it were validated and maintained through the educational system.",
      "By connecting this to real life, we invite the audience to reflect on how our own educational institutions can, in some cases, act as hegemonizing places for the sustaining of pre-established orders and values instead of safe spaces for free thinking.",
    ],
  },
];

function AboutTab() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10 flex flex-col gap-10">
      <div className="flex flex-col gap-2 border-b border-zinc-800 pb-8">
        <p className="text-xs text-amber-400 uppercase tracking-widest font-mono">
          Interactive Exhibit
        </p>
        <h2 className="text-3xl font-bold">The Architecture of Control</h2>
        <p className="text-zinc-500 text-sm">
          A critical analysis of power, inequality, and education in{" "}
          <em>Snowpiercer</em>
        </p>
      </div>

      {ABOUT_SECTIONS.map((section) => (
        <div key={section.label} className="flex flex-col gap-4">
          <h3 className="text-xs text-zinc-500 uppercase tracking-widest font-mono">
            {section.label}
          </h3>

          {"image" in section && section.image && (
            <figure className="w-full rounded-xl overflow-hidden">
              <img
                src={section.image}
                alt={section.imageCaption as string}
                className="w-full object-cover max-h-72"
                draggable={false}
              />
              <figcaption className="text-xs text-zinc-600 italic px-1 pt-2">
                {section.imageCaption as string}
              </figcaption>
            </figure>
          )}

          <div className="flex flex-col gap-4">
            {section.body.map((para, i) => (
              <p key={i} className="text-zinc-300 text-base leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

const AUTHORS = [
  {
    name: "Edson Petrini",
    major: "Computer Engineering",
    bio: "",
    photo: null,
  },
  {
    name: "Gloria Purcell",
    major: "Civil Engineering",
    bio: "",
    photo: null,
  },
  {
    name: "Lucy Yang",
    major: "Biochemistry",
    bio: "",
    photo: null,
  },
  {
    name: "Hersh Pamnani",
    major: "Mechanical Engineering",
    bio: "",
    photo: null,
  },
];

function AuthorCard({ author }: { author: typeof AUTHORS[number] }) {
  return (
    <div className="flex gap-5 p-5 rounded-xl border border-zinc-800 bg-zinc-900/50">
      {/* Photo */}
      <div className="shrink-0 w-20 h-20 rounded-full bg-zinc-800 border border-zinc-700 overflow-hidden flex items-center justify-center">
        {author.photo ? (
          <img src={author.photo} alt={author.name} className="w-full h-full object-cover" />
        ) : (
          <svg className="w-10 h-10 text-zinc-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
          </svg>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-col gap-1.5 min-w-0">
        <p className="font-semibold text-white">{author.name}</p>
        <p className="text-xs text-amber-400 uppercase tracking-widest font-mono">
          {author.major}
        </p>
        {author.bio && <p className="text-zinc-400 text-sm leading-relaxed mt-1">{author.bio}</p>}
      </div>
    </div>
  );
}

function BioTab() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10 flex flex-col gap-8">
      <div className="flex flex-col gap-1 border-b border-zinc-800 pb-6">
        <p className="text-xs text-amber-400 uppercase tracking-widest font-mono">
          The Team
        </p>
        <h2 className="text-3xl font-bold">Authors</h2>
        <p className="text-zinc-500 text-sm">
          The people behind The Architecture of Control.
        </p>
      </div>

      <div className="grid gap-4">
        {AUTHORS.map((author) => (
          <AuthorCard key={author.name + author.major} author={author} />
        ))}
      </div>
    </div>
  );
}

const SOURCES = [
  {
    type: "Film — Primary Source",
    citation: (
      <>
        Bong, Joon-ho, director. <em>Parasite</em>. CJ Entertainment, 2019.
      </>
    ),
    annotation:
      "Directed by Bong Joon-ho, Parasite tells the story of the struggling Kim family as they gradually embed themselves in the lives of the wealthy Park family. The film highlights sharp contrasts in lifestyle and opportunity, showing how deeply class inequality shapes everyday experience. Its cinematography and careful use of space (especially the difference between the semi-basement apartment and the modern mansion) act as visual metaphors for social hierarchy.",
  },
  {
    type: "Journal Article — Secondary Source",
    citation: (
      <>
        Kim, Kyung-Hyun. "Socioeconomic Divides in Bong Joon-ho's Parasite:
        Verticality and Urban Space." <em>Journal of Korean Cinema Studies</em>,
        vol. 15, no. 2, 2020, pp. 45–62.
      </>
    ),
    annotation:
      "Kim examines how Parasite uses verticality and architectural design to convey class differences. The article explains the symbolism of stairs and floor levels. This source will support analysis of cinematography and spatial metaphors in the video essay.",
  },
  {
    type: "Online Article — Secondary Source",
    citation: (
      <>
        Paiella, Gabriella. "Parasite Director Bong Joon-ho on the Art of Class
        Warfare." <em>GQ</em>, 8 October 2019,{" "}
        <a
          href="https://www.gq.com/story/parasite-director-bong-joon-ho-interview"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 text-zinc-300 hover:text-white"
        >
          https://www.gq.com/story/parasite-director-bong-joon-ho-interview
        </a>
        .
      </>
    ),
    annotation:
      "In this interview, Bong Joon-ho discusses his intentions behind Parasite, particularly the film's portrayal of class conflict as a form of \"class warfare.\" He reflects on the universality of economic inequality and explains how specific cinematic choices reinforce the film's themes. This source provides valuable insight into the director's perspective, helping contextualize the film's social commentary and supporting analysis with authorial intent.",
  },
  {
    type: "YouTube Video — Secondary Source",
    citation: (
      <>
        Sinjun Chapman. "Crossing the Line: Analyzing How Parasite Frames
        Class." <em>YouTube</em>, 11 December 2024,{" "}
        <a
          href="https://www.youtube.com/watch?v=LmrsDjm9mCQ"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 text-zinc-300 hover:text-white"
        >
          https://www.youtube.com/watch?v=LmrsDjm9mCQ
        </a>
        .
      </>
    ),
    annotation:
      "This video essay explores how spatial design and cinematography communicate social hierarchy. It provides visual examples and scene breakdowns suitable for inclusion as clips or references in the essay.",
  },
];

function WorksCitedTab() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10 flex flex-col gap-8">
      <div>
        <h2 className="text-2xl font-bold">Annotated Bibliography</h2>
        <p className="text-xs text-zinc-500 uppercase tracking-widest font-mono mt-1">
          MLA Format
        </p>
      </div>

      {SOURCES.map((source, i) => (
        <div key={i} className="flex flex-col gap-3">
          <p className="text-xs text-amber-400 uppercase tracking-widest font-mono">
            {i + 1}. {source.type}
          </p>
          <p className="text-zinc-200 text-sm leading-relaxed pl-6 -indent-6">
            {source.citation}
          </p>
          {source.annotation && (
            <p className="text-zinc-500 text-sm leading-relaxed italic border-l border-zinc-700 pl-4">
              {source.annotation}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

type Props = { onBack?: () => void };

export default function ResearchScene({ onBack }: Props) {
  const [active, setActive] = useState<Tab>("home");

  return (
    <motion.div
      className="w-full h-full overflow-auto bg-zinc-950 text-white flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Top nav */}
      <nav className="sticky top-0 z-10 border-b border-zinc-800 bg-zinc-950/90 backdrop-blur px-6 flex gap-1 items-end">
        {onBack && (
          <button
            onClick={onBack}
            className="mr-2 py-3 text-sm text-zinc-500 hover:text-zinc-200 transition-colors"
          >
            ← Back
          </button>
        )}
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className="relative px-4 py-3 text-sm font-medium transition-colors"
            style={{ color: active === tab.id ? "#fff" : "#71717a" }}
          >
            {tab.label}
            {active === tab.id && (
              <motion.span
                layoutId="tab-underline"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400"
              />
            )}
          </button>
        ))}
      </nav>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="flex-1"
        >
          {active === "home" && <HomeTab />}
          {active === "about" && <AboutTab />}
          {active === "bio" && <BioTab />}
          {active === "works-cited" && <WorksCitedTab />}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
