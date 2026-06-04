import pythiaScreenshot from "../images/pythia/screenshot.png";
import podcastScreenshot from "../images/podcast-research-assistant/screenshot.png";
import neuroSignalScreenshot from "../images/neuro-signals/screenshot2.png";
import politicalDiscourseScreenshot from "../images/political-discourse/screenshot.png";
import brumaConsultancyScreenshot from "../images/bruma-consultancy/screenshot.png";

export const projects = [
    {
        id: 1,
        title: "Pythia - AI-powered deal intelligence platform",
        description: "Multi-agent platform automating company due diligence. Generates confidence-scored briefings with an interactive chat.",
        tech: ["Next.js", "React", "TypeScript", "Mastra", "SQLite", "Tailwind"],
        image: pythiaScreenshot,
        code: "https://github.com/ricardo-pedro-umain/pythia",
    },
    {
        id: 2,
        title: "Podcast Research Assistant - semantic transcript search",
        description: "Local tool to ingest YouTube podcasts, index transcripts, and query them via semantic search.",
        tech: ["Next.js", "React", "TypeScript", "Mastra", "SQLite", "Tailwind"],
        image: podcastScreenshot,
        code: "https://github.com/ricardo-pedro-umain/podcast-research-assistant",
    },
    {
        id: 3,
        title: "Neural Signals - live brainwave visualizer",
        description: "Full-stack app streaming EEG-like data over websockets and rendering both a 2D oscilloscope and an interactive 3D brain model.",
        tech: ["React", "TypeScript", "WebSocket", "Three.js", "Node.js", "Tailwind"],
        image: neuroSignalScreenshot,
        demo: "https://neuro-signals.onrender.com/",
        code: "https://github.com/RLPedro/neuro-signals",
    },
    {
        id: 4,
        title: "Political Discourse Dashboard - news sentiment analysis",
        description: "Full‑stack, ML‑powered app analyzing news hourly across Sweden and Portugal.",
        tech: ["React", "TypeScript", "HuggingFace", "PostgreSQL", "Node.js", "Tailwind"],
        image: politicalDiscourseScreenshot,
        demo: "https://political-discourse-news-web.vercel.app/",
        code: "https://github.com/RLPedro/political-discourse-news",
    },
    // {
    //     id: 5,
    //     title: "Bruma Consultancy",
    //     description: "Static website for Bruma Consultancy adverstising tech services.",
    //     tech: ["React", "TypeScript", "Next.js", "Vite", "Tailwind"],
    //     image: brumaConsultancyScreenshot,
    //     demo: "https://consulting-portfolio-ruddy.vercel.app",
    //     code: "https://github.com/RLPedro/consulting-portfolio",
    // },
];
