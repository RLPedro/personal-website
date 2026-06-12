import { useEffect, useState } from "react";
import fantasticariaCover from "./images/album-covers/fantasticaria.jpg";
import ilGiocoCover from "./images/album-covers/il-gioco.jpg";
import arteMinima1Cover from "./images/album-covers/arte-minima-1.jpg";
import arteMinima2Cover from "./images/album-covers/arte-minima-2.png";
import { projects } from "./data/projects";
import ProjectCard from "./components/ProjectCard";
import BrumaCard from "./components/BrumaCard";
import SidebarContact from "./components/SidebarContact";

const FEED_URL = "https://brumanotes.substack.com/feed";
const DEFAULT_BRUMA_POST = {
  title: "A thought on (not) listening",
  subtitle: "Conversations are harder, but some of us might have an advantage.",
  link: "https://brumanotes.substack.com/p/a-thought-on-not-listening",
  image:
    "https://substackcdn.com/image/fetch/$s_!sgit!,f_auto,q_auto:best,fl_progressive:steep/https%3A%2F%2Fbrumanotes.substack.com%2Fapi%2Fv1%2Fpost_preview%2F198602636%2Ftwitter.jpg%3Fversion%3D4",
};

const introLines = [
  "Software engineer based in Gothenburg, Sweden.",
  "Classical musician in a previous life.",
  "Dad.",
];

const experienceList = [
  {
    role: "Full Stack & AI engineer",
    company: "Umain (Eidra)",
    years: "2026-",
    detail: "Building agentic workflows and AI-driven solutions.",
  },
  {
    role: "Front-end developer",
    company: "Sensys Gatso",
    years: "2022-2025",
    detail: "Built Flux UI serving Traffikverket and responsible for the Puls' user interface serving clients worldwide.",
  },
  {
    role: "Full-stack developer",
    company: "</salt>",
    years: "2021-2023",
    detail: "Educated in the 'hardest bootcamp in the world', then worked as consultant.",
  },
  {
    role: "Lutenist & singer",
    company: "",
    years: "2009-",
    detail: "Recorded a solo album and performed around the world.",
  },
];

const interestList = [
  "Intelligence (human and artificial)",
  "technology",
  "cultural history",
  "philosophy",
];

const musicCards = [
  {
    href: "https://ricardoleitaopedro.bandcamp.com/album/fantasticaria",
    src: fantasticariaCover,
    alt: "Fantasticaria album cover",
  },
  {
    href: "https://www.arteminima.org/",
    src: arteMinima2Cover,
    alt: "arte-minima-2 album cover",
  },
  {
    href: "https://www.arteminima.org/",
    src: arteMinima1Cover,
    alt: "arte-minima-1 album cover",
  },
  {
    href: "https://outhere-music.com/en/artists/concerto-di-margherita",
    src: ilGiocoCover,
    alt: "il-gioco album cover",
  },
];

const fetchText = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`);
  }
  return await response.text();
};

const stripHtml = (html) => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent?.trim() || "";
};

const extractImageFromHtml = (html) => {
  const match = /<img[^>]+src=["']([^"']+)["']/i.exec(html);
  return match?.[1] || "";
};

const parseLatestPost = (text) => {
  const xml = new DOMParser().parseFromString(text, "application/xml");
  const item = xml.querySelector("item");
  if (!item) {
    return DEFAULT_BRUMA_POST;
  }

  const title = item.querySelector("title")?.textContent?.trim() || DEFAULT_BRUMA_POST.title;
  const link = item.querySelector("link")?.textContent?.trim() || DEFAULT_BRUMA_POST.link;
  const rawSubtitle =
    item.querySelector("description")?.textContent ||
    item.querySelector("content\\:encoded")?.textContent ||
    DEFAULT_BRUMA_POST.subtitle;
  const subtitle = stripHtml(rawSubtitle) || DEFAULT_BRUMA_POST.subtitle;
  const image =
    item.querySelector("enclosure")?.getAttribute("url") ||
    item.querySelector("media\\:content")?.getAttribute("url") ||
    extractImageFromHtml(item.querySelector("content\\:encoded")?.textContent || "") ||
    DEFAULT_BRUMA_POST.image;

  return { title, subtitle, link, image };
};

const App = () => {
  const [latestPost, setLatestPost] = useState(DEFAULT_BRUMA_POST);

  useEffect(() => {
    const fetchLatestPost = async () => {
      try {
        let text = await fetchText(FEED_URL);
        setLatestPost(parseLatestPost(text));
      } catch (primaryError) {
        try {
          const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(FEED_URL)}`;
          const text = await fetchText(proxyUrl);
          setLatestPost(parseLatestPost(text));
        } catch (proxyError) {
          console.error("Failed to load latest Bruma post:", proxyError || primaryError);
        }
      }
    };

    fetchLatestPost();
  }, []);

  return (
    <div className="min-h-screen text-white antialiased bg-neutral-800">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <aside className="lg:col-span-5">
            <div className="sticky top-8">
              <SidebarContact />
            </div>
          </aside>

          <section className="lg:col-span-7 space-y-10">
            <BrumaCard post={latestPost} />

            <div className="border-t border-white/10 pt-10">
              <p className="text-xs uppercase tracking-[0.28em] text-yellow-600">Music</p>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                {musicCards.map((card) => (
                  <a
                    key={card.href}
                    href={card.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group overflow-hidden border border-white/10 bg-[#111214] transition"
                  >
                    <div className="aspect-square bg-neutral-900">
                      <img
                        src={card.src}
                        alt={card.alt}
                        className="h-full w-full object-cover object-center transition duration-500 ease-out group-hover:scale-105"
                      />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="border-t border-white/10 pt-10">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-yellow-600">Projects</p>
                </div>
                <a
                  href="https://www.github.com/rlpedro"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs md:text-sm font-semibold text-white/60 hover:text-yellow-600 transition-colors duration-200"
                >
                  View all projects
                </a>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {projects.map((p) => (
                  <ProjectCard key={p.id} project={p} />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default App;
