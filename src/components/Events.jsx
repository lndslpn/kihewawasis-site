function loadEvents() {
  const modules = import.meta.glob("../content/events/*.json", { eager: true });
  return Object.entries(modules)
    .map(([path, mod]) => {
      const slug = path.split("/").pop().replace(/\.[^.]+$/, "");
      return { slug, ...(mod.default || {}) };
    })
    .sort((a, b) => {
      const aDate = new Date(a.date || 0).getTime();
      const bDate = new Date(b.date || 0).getTime();
      return aDate - bDate;
    });
}

function formatDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "2-digit",
  });
}

export default function Events() {
  const events = loadEvents();

  return (
    <main
      className="w-full min-h-screen"
      style={{ background: "linear-gradient(135deg, #f3f2f6 0%, #f7f5fb 95%)" }}
    >
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-20">
        <h1 className="text-3xl md:text-4xl font-sans italic text-indigo-800 text-center">
          Upcoming Events
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 mt-12 md:mt-14">
          {events.map((event) => {
            const moreInfoLink = event.moreInfoUrl?.trim();
            const buttonLink = (event.buttonUrl || event.moreInfoUrl || "").trim();
            const hasButton = Boolean(buttonLink);

            return (
              <article
                key={event.slug}
                className="border border-indigo-100 bg-white shadow-sm max-w-[360px] w-full mx-auto"
              >
                {event.image && (
                  <div className="bg-white">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-[320px] object-cover"
                    />
                  </div>
                )}

                <div className="px-6 py-6 text-center flex flex-col items-center gap-3">
                  {event.tag && (
                    <span className="px-3 py-[6px] border border-indigo-200 text-[11px] uppercase tracking-[0.08em] text-indigo-700 bg-indigo-50">
                      {event.tag}
                    </span>
                  )}

                  <h2 className="text-[18px] font-sans italic text-indigo-800 leading-6">
                    {event.title}
                  </h2>

                  <div className="text-[13px] text-indigo-900/80">
                    {formatDate(event.date)}
                    {event.location ? ` | ${event.location}` : ""}
                  </div>

                  {moreInfoLink && (
                    <a
                      href={moreInfoLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[13px] text-indigo-700 underline"
                    >
                      More info
                    </a>
                  )}

                  {hasButton ? (
                    <a
                      href={buttonLink}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-block w-32 bg-[#5e4aa5] text-white text-[13px] py-3 tracking-[0.05em]"
                    >
                      {event.buttonText || "Details"}
                    </a>
                  ) : (
                    <span className="mt-2 inline-block w-32 bg-[#c7c3da] text-white text-[13px] py-3 tracking-[0.05em] cursor-not-allowed opacity-70">
                      {event.buttonText || "Details"}
                    </span>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
