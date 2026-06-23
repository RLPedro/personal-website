import brumaLogo from "../icons/bruma.png";

const BrumaCard = ({ post }) => (
  <a
    href={post.link}
    target="_blank"
    rel="noreferrer"
    className="group flex flex-col overflow-hidden border border-white/10 bg-[#111214] transition hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20 md:flex-row md:max-h-48"
  >
    <div className="relative h-44 w-full overflow-hidden bg-neutral-900 md:h-auto md:w-56 shrink-0">
      <img
        src={post.image}
        alt="Latest Bruma post preview"
        className="h-full w-full object-cover object-center transition duration-500 ease-out group-hover:scale-105"
        loading="lazy"
      />
    </div>
    <div className="p-5 flex flex-col justify-center gap-3">
      <div className="flex items-center gap-3 text-[0.625rem] uppercase tracking-[0.28em] text-yellow-600">
        <div className="flex h-8 w-8 items-center justify-center bg-white/5">
          <img src={brumaLogo} alt="Bruma logo" className="h-6 w-6 object-contain" />
        </div>
        Bruma
      </div>
      <div>
        <h2 className="text-xl font-semibold text-white">{post.title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-white/70 line-clamp-3">{post.subtitle}</p>
      </div>
    </div>
  </a>
);

export default BrumaCard;
