import instagram from "../icons/instagram.png";
import linkedin from "../icons/linkedin.png";
import x from "../icons/x.png";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/ricardoleitaopedro",
    src: linkedin,
    alt: "link to LinkedIn profile",
  },
  {
    href: "https://x.com/ricardolpedro",
    src: x,
    alt: "link to X profile",
  },
  {
    href: "https://www.instagram.com/ricardoleitaopedro/",
    src: instagram,
    alt: "link to Instagram profile",
  },
];

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

const SidebarContact = () => (
  <div className="pr-8 pb-8 pl-8 bg-transparent">
    <h1
      className="text-base md:text-lg text-yellow-600 font-semibold tracking-tight"
      style={{ letterSpacing: "-0.02em" }}
    >
      ricardo leitão pedro
    </h1>

    <p className="mt-4 text-sm text-white/75 leading-relaxed">
      {introLines.map((line, index) => (
        <span key={line}>
          {line}
          {index < introLines.length - 1 && <br />}
        </span>
      ))}
    </p>

    <h4 className="mt-8 text-xs text-white/60">Experience</h4>
    {experienceList.map((experience) => (
      <p key={`${experience.role}-${experience.company}`} className="mt-4 text-sm text-white/75">
        <em>{experience.role}</em>
        {experience.company ? ` @ ${experience.company}` : ""}, {experience.years}
        <br />
        {experience.detail}
      </p>
    ))}

    <div className="mt-6">
      <h4 className="text-xs text-white/60">Interests</h4>
      <p className="text-sm mt-2 text-white/75">{interestList.join(", ")}</p>
    </div>

    <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-white/75">
      {socialLinks.map(({ href, src, alt }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noreferrer"
          className="group transition duration-200 hover:bg-yellow-600/10"
        >
          <img className="w-7 transition duration-200 group-hover:opacity-90" src={src} style={{ filter: "invert(75%)" }} alt={alt} />
        </a>
      ))}
      <span className="whitespace-nowrap">ricardoleitaopedro@gmail.com</span>
    </div>
  </div>
);

export default SidebarContact;
