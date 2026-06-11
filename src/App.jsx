import brumaLogo from "./icons/bruma.png";
import fantasticariaCover from "./images/album-covers/fantasticaria.jpg";
import ilGiocoCover from "./images/album-covers/il-gioco.jpg";
import arteMinima1Cover from "./images/album-covers/arte-minima-1.jpg";
import arteMinima2Cover from "./images/album-covers/arte-minima-2.png";
import instagram from "./icons/instagram.png";
import linkedin from "./icons/linkedin.png";
import x from "./icons/x.png";
import { projects } from "./data/projects";
import ProjectCard from "./components/ProjectCard";

const BRUMA_IMAGE =
  "https://substackcdn.com/image/fetch/$s_!sgit!,f_auto,q_auto:best,fl_progressive:steep/https%3A%2F%2Fbrumanotes.substack.com%2Fapi%2Fv1%2Fpost_preview%2F198602636%2Ftwitter.jpg%3Fversion%3D4";
const BRUMA_POST_URL = "https://brumanotes.substack.com/p/a-thought-on-not-listening";

const App = () => {
  return (
    <div className="min-h-screen text-white antialiased bg-neutral-800">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <aside className="lg:col-span-5">
            <div className="sticky top-8">
              <div className="pr-8 pb-8 pl-8 bg-transparent">
                <h1
                  className="text-base md:text-lg text-yellow-600 font-semibold tracking-tight"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  ricardo leitão pedro
                </h1>

                <p className="mt-4 text-sm text-white/75 leading-relaxed">
                  Software engineer based in Gothenburg, Sweden.<br />
                  Classical musician in a previous life.
                  Dad.
                </p>

                <h4 className="mt-8 text-xs text-white/60">Experience</h4>
                <p className="mt-4 text-sm text-white/75">
                  <em>Full Stack & AI engineer</em> @ Umain (Eidra), 2026-<br />
                  Building agentic workflows and AI-driven solutions.
                </p>
                <p className="mt-4 text-sm text-white/75">
                  <em>Front-end developer</em> @ Sensys Gatso, 2022-2025 <br />
                  Built Flux UI serving Traffikverket and responsible for the Puls' user interface serving clients worldwide.
                </p>
                <p className="mt-4 text-sm text-white/75">
                  <em>Full-stack developer</em> @ {"</salt>"}, 2021-2023<br />
                  Educated in the "hardest bootcamp in the world", then worked as consultant.
                </p>
                <p className="mt-4 text-sm text-white/75">
                  <em>Lutenist & singer</em>, 2009-<br />
                  Recorded a solo album and performed around the world.
                </p>

                <div className="mt-6">
                  <h4 className="text-xs text-white/60">Interests</h4>
                  <p className="text-sm mt-2 text-white/75">
                    Intelligence (human and artificial),
                    technology,
                    cultural history,
                    philosophy.
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-white/75">
                  <a
                    href="https://www.linkedin.com/in/ricardoleitaopedro"
                    target="_blank"
                    rel="noreferrer"
                    className="group transition duration-200 hover:bg-yellow-600/10"
                  >
                    <img className="w-7 transition duration-200 group-hover:opacity-90" src={linkedin} style={{ filter: "invert(75%)" }} alt="link to LinkedIn profile" />
                  </a>
                  <a
                    href="https://x.com/ricardolpedro"
                    target="_blank"
                    rel="noreferrer"
                    className="group transition duration-200 hover:bg-yellow-600/10"
                  >
                    <img className="w-7 transition duration-200 group-hover:opacity-90" src={x} style={{ filter: "invert(75%)" }} alt="link to X profile" />
                  </a>
                  <a
                    href="https://www.instagram.com/ricardoleitaopedro/"
                    target="_blank"
                    rel="noreferrer"
                    className="group transition duration-200 hover:bg-yellow-600/10"
                  >
                    <img className="w-7 transition duration-200 group-hover:opacity-90" src={instagram} style={{ filter: "invert(75%)" }} alt="link to Instagram profile" />
                  </a>
                  <span className="whitespace-nowrap">ricardoleitaopedro@gmail.com</span>
                </div>

              </div>
            </div>
          </aside>

          <section className="lg:col-span-7 space-y-10">
            <a
              href={BRUMA_POST_URL}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col overflow-hidden border border-white/10 bg-[#111214] transition hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20 sm:flex-row"
            >
              <div className="relative h-56 w-full overflow-hidden bg-neutral-900 sm:h-auto sm:w-72 shrink-0">
                <img
                  src={BRUMA_IMAGE}
                  alt="Latest Bruma post preview"
                  className="h-full w-full object-cover object-center transition duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col justify-center gap-4">
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-yellow-600">
                  <div className="flex h-8 w-8 items-center justify-center bg-white/5">
                    <img src={brumaLogo} alt="Bruma logo" className="h-6 w-6 object-contain" />
                  </div>
                  Bruma
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-white">A thought on (not) listening</h2>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    Latest Bruma post from Substack about listening, attention, and conversation.
                  </p>
                </div>
              </div>
            </a>

            <div className="border-t border-white/10 pt-10">
              <p className="text-xs uppercase tracking-[0.28em] text-yellow-600">Music</p>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                <a
                  href="https://ricardoleitaopedro.bandcamp.com/album/fantasticaria"
                  target="_blank"
                  rel="noreferrer"
                  className="group overflow-hidden border border-white/10 bg-[#111214] transition"
                >
                  <div className="aspect-square bg-neutral-900">
                    <img
                      src={fantasticariaCover}
                      alt="Fantasticaria album cover"
                      className="h-full w-full object-cover object-center transition duration-500 ease-out group-hover:scale-105"
                    />
                  </div>
                </a>
                <a
                  href="https://www.arteminima.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="group overflow-hidden border border-white/10 bg-[#111214] transition"
                >
                  <div className="aspect-square bg-neutral-900">
                    <img
                      src={arteMinima2Cover}
                      alt="arte-minima-2 album cover"
                      className="h-full w-full object-cover object-center transition duration-500 ease-out group-hover:scale-105"
                    />
                  </div>
                </a>
                <a
                  href="https://www.arteminima.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="group overflow-hidden border border-white/10 bg-[#111214] transition"
                >
                  <div className="aspect-square bg-neutral-900">
                    <img
                      src={arteMinima1Cover}
                      alt="arte-minima-1 album cover"
                      className="h-full w-full object-cover object-center transition duration-500 ease-out group-hover:scale-105"
                    />
                  </div>
                </a>
                <a
                  href="https://outhere-music.com/en/artists/concerto-di-margherita"
                  target="_blank"
                  rel="noreferrer"
                  className="group overflow-hidden border border-white/10 bg-[#111214] transition"
                >
                  <div className="aspect-square bg-neutral-900">
                    <img
                      src={ilGiocoCover}
                      alt="il-gioco album cover"
                      className="h-full w-full object-cover object-center transition duration-500 ease-out group-hover:scale-105"
                    />
                  </div>
                </a>
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
