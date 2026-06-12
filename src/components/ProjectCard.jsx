import { motion as Motion } from "framer-motion";
import SmallBadge from "./SmallBadge";
import TechBadge from "./TechBadge";

const ProjectCard = ({ project }) => {
    return (
        <Motion.a
            href={project.demo ?? project.url}
            target="_blank"
            rel="noreferrer"
            className="block overflow-hidden bg-[#0f1011] border-none"
            whileHover={{ translateY: -6 }}
            whileTap={{ translateY: 0 }}
            aria-label={`${project.title} — open demo`}
        >
            <div className="relative w-full h-40 md:h-44 lg:h-40 overflow-hidden bg-[#0f1011]">
                <img
                    src={project.image}
                    alt={project.title}
                    className="
            w-full h-full
            object-cover
            object-center
            md:object-top
            scale-100
            md:scale-[1.03]
            transition-transform duration-200 ease-out
            "
                    loading="lazy"
                />
            </div>

            <div className="p-4 bg-zinc-900">
                <div className="flex flex-col h-44 md:h-48">
                    <div className="flex items-center justify-end gap-2">
                        {project.demo && <SmallBadge href={project.demo}>Demo</SmallBadge>}
                        {project.code && <SmallBadge href={project.code}>Code</SmallBadge>}
                    </div>

                    <h3 className="mt-2 text-sm md:text-sm font-semibold">{project.title}</h3>

                    <div className="mt-2">
                        <p className="text-xs md:text-sm text-white/75 leading-snug line-clamp-4">
                            {project.description}
                        </p>
                    </div>

                    <div className="mt-auto flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                            <TechBadge key={t}>{t}</TechBadge>
                        ))}
                    </div>
                </div>
            </div>
        </Motion.a>
    );
};

export default ProjectCard;
