function loadNews() {
  const modules = import.meta.glob("../content/newsletter/*.json", { eager: true });
  return Object.entries(modules)
    .map(([path, mod]) => {
      const slug = path.split("/").pop().replace(/\.[^.]+$/, "");
      return { slug, ...(mod.default || {}) };
    })
    .sort((a, b) => new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime());
}

function formatDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function Newsletter() {
  const issues = loadNews();

  return (
    <main
      className="w-full min-h-screen"
      style={{ background: "linear-gradient(135deg, #d8d0e9 0%, #e7e2f3 95%)" }}
    >
      <section className="max-w-5xl mx-auto px-6 py-14 md:py-20">
        <div className="text-center mb-8">
          <div className="text-[13px] text-indigo-700 font-sans italic">Be in the Know</div>
          <h1 className="text-3xl md:text-4xl font-sans italic text-indigo-800 mt-1">
            Newsletter
          </h1>
        </div>

        <div className="flex flex-col gap-10 items-center">
          {issues.length === 0 && (
            <div className="text-indigo-900 font-sans italic text-[15px]">No issues yet.</div>
          )}

          {issues.map((issue) => (
            <article
              key={issue.slug}
              className="w-full max-w-3xl bg-white shadow-md border border-indigo-100"
            >
              <div className="px-6 pt-6 pb-4 text-left">
                <div className="text-[12px] text-indigo-500 mb-2">
                  <a href="#" className="underline">
                    All Posts
                  </a>
                </div>
                <p className="text-2xl font-sans italic text-indigo-800 mb-2">{issue.title}</p>
                <div className="text-[12px] text-indigo-700 flex items-center gap-2 flex-wrap">
                  {issue.author && <span>{issue.author}</span>}
                  {issue.date && (
                    <>
                      <span>•</span>
                      <span>{formatDate(issue.date)}</span>
                    </>
                  )}
                  {issue.readTime && (
                    <>
                      <span>•</span>
                      <span>{issue.readTime}</span>
                    </>
                  )}
                </div>
              </div>

              {issue.coverImage && (
                <div className="bg-white">
                  {(() => {
                    const pages = Array.isArray(issue.pages) && issue.pages.length > 0
                      ? issue.pages.map((p) => p.pageImage).filter(Boolean)
                      : [issue.coverImage];
                    return pages.map((imgSrc, idx) => (
                      <img
                        key={`${issue.slug}-page-${idx}`}
                        src={imgSrc}
                        alt={`${issue.title} page ${idx + 1}`}
                        className="w-full"
                        loading="lazy"
                      />
                    ));
                  })()}
                </div>
              )}

              {issue.summary && (
                <div className="px-6 py-4 text-[14px] text-indigo-900/80 font-sans">
                  {issue.summary}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
