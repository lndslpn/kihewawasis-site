import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import gofundmeLogo from "../assets/home/gofundme.png";

const GOFUNDME_URL ="https://www.gofundme.com/f/kihew-awasis-wakamik-indigenous-birth-alberta/";

const links = [
  { href: "/", label: "Home" },
  { href: "/connect-with-us", label: "Connect With Us" },
  { href: "/request-care", label: "Request Care" },
  { href: "/events-calendar", label: "Events Calendar" },
  { href: "/newsletter", label: "Newsletter" },
  { href: "/groups", label: "Groups" },
  { href: "/members", label: "Members" },
];

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50",
        "bg-header",
        "supports-[backdrop-filter]:backdrop-blur-md",
        scrolled ? "shadow-sm" : "",
      ].join(" ")}
    >
  <div className="mx-auto max-w-6xl px-6 relative h-28">
    {/* HAMBURGER — mobile only */}
    <button className="lg:hidden absolute left-6 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-deeppurple/5"
      aria-label="Toggle menu"
      onClick={() => setOpen((v) => !v)}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-deeppurple">
        {open ? (
          <path
            fillRule="evenodd"
            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 11-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
            clipRule="evenodd"
          />
        ) : (
          <path
            fillRule="evenodd"
            d="M3.75 5.25a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75zm0 6a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75zm0 6a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75z"
            clipRule="evenodd"
          />
        )}
      </svg>
    </button>

      {/* DESKTOP NAV — unchanged */}
      <nav className="hidden lg:flex h-16 items-center justify-center">

        <div className="flex items-center gap-5 mt-11 whitespace-nowrap" style={{ paddingRight: "120px" }}>
            {links.map((l) => {
              const isActive =
                location.pathname === l.href ||
                (l.href !== "/" && location.pathname.startsWith(l.href));

              return (
                <Link
                  key={l.href}
                  to={l.href}
                  className={[
                    "group relative inline-block px-2 pt-4 pb-2",
                    "font-sans font-extralight italic text-[24px]",
                    "transition-colors",
                    isActive
                      ? "text-deeppurple"
                      : "text-headertext hover:text-deeppurple",
                  ].join(" ")}
                >
                  {/* TOP UNDERLINE */}
                  <span
                    className={[
                      "absolute left-0 right-0 mx-auto",
                      "top-1",
                      "h-[4px] rounded-full bg-deeppurple",
                      "transition-opacity duration-200",
                      isActive
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100",
                    ].join(" ")}
                    style={{ width: "calc(100% - 20px)" }}
                    aria-hidden="true"
                  />
                  {l.label}
                </Link>
              );
            })}
          </div>
      </nav>

        {/* GOFUNDME */}
        <a
          href={GOFUNDME_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Donate on GoFundMe"
          title="Donate on GoFundMe"
          className="absolute right-6 top-1/2 -translate-y-1/2">
          <img src={gofundmeLogo} alt="GoFundMe" className="h-18 w-18 rounded-full shadow-sm hover:scale-105 transition-transform"/>
        </a>
  </div>

      {open && (
        <div className="lg:hidden border-t border-deeppurple/10 bg-header pt-11 pb-6">
          <nav className="mx-auto max-w-6xl px-6 py-4 flex flex-col gap-2">
            {links.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 font-sans italic text-[18px] text-headertext hover:text-deeppurple hover:bg-deeppurple/5"
              >
                {l.label}
              </Link>
            ))}

            <a
              href={GOFUNDME_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-2 rounded-md px-3 py-2 font-sans italic text-[18px] text-deeppurple hover:bg-deeppurple/5"
            >
              Donate (GoFundMe)
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}