import instagram from "./icons/instagram.png";
import linkedin from "./icons/linkedin.png";
import x from "./icons/x.png";
import { useState } from "react";
import NoteModal from "./components/NoteModal";
import { projects } from "./data/projects";
import ProjectCard from "./components/ProjectCard";

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");

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

                < br />

                <h4 className="text-xs text-white/60">Experience</h4>
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

                < br />

                <div className="mt-6">
                  <h4 className="text-xs text-white/75">Recent notes</h4>
                  <ul className="mt-3 space-y-3 text-sm">

                    <li className="flex justify-between items-start">
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setModalTitle("Note — 7 Jan, 2026");
                          setModalContent(
                            "After an arduous few months of searching in the current job market, it feels particularly rewarding (and humbling) to join such an established company at such an exciting stage (new team growing in Gothenburg)."
                          )
                          setModalOpen(true);
                        }}
                        className="cursor-pointer"
                      >
                        Starting next week at Umain (part of Eidra)!
                      </a>
                      <span className="text-xs text-white/60">7/Jan, 2026</span>
                    </li>

                    {/* 
                    <li className="flex justify-between items-start">
                      <a href="#" className="underline">
                        Note about cars
                      </a>
                      <span className="text-xs text-white/60">Aug 13, 2025</span>
                    </li>
                    */}

                  </ul>
                </div>

                < br />
                < br />

                <div className="flex space-x-4 mt-6">
                  <a href="https://www.linkedin.com/in/ricardoleitaopedro" target="_blank" rel="noreferrer">
                    <img className="w-7" src={linkedin} style={{ filter: "invert(75%)" }} alt="link to LinkedIn profile" />
                  </a>
                  <a href="https://x.com/ricardolpedro" target="_blank" rel="noreferrer">
                    <img className="w-7" src={x} style={{ filter: "invert(75%)" }} alt="link to X profile" />
                  </a>
                  <a href="https://www.instagram.com/ricardoleitaopedro/" target="_blank" rel="noreferrer">
                    <img className="w-7" src={instagram} style={{ filter: "invert(75%)" }} alt="link to Instagram profile" />
                  </a>
                </div>

                < br />
                <p className="text-xs text-white">ricardoleitaopedro@gmail.com</p>
              </div>
            </div>
          </aside>

          <section className="lg:col-span-7">
            <div className="mb-6 text-right">
              <a
                href="https://www.github.com/rlpedro"
                target="_blank"
                rel="noreferrer"
                className="text-xs md:text-sm font-semibold text-white/60 hover:text-yellow-600 transition-colors duration-200"
              >
                View all projects
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {projects.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </section>
        </div>
      </div>
      <NoteModal open={modalOpen} onClose={() => setModalOpen(false)} title={modalTitle}>
        {modalContent}
      </NoteModal>
    </div>
  );
};

export default App;
