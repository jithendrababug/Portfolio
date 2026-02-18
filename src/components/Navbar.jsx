import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import profilePic from "../assets/Jithendra Babu G.jpeg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("hero");

  // hide/show navbar while scrolling
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  // theme
  const [theme, setTheme] = useState(() =>
    document.documentElement.classList.contains("dark") ? "dark" : "light"
  );

  const reduceMotion = useReducedMotion();
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const links = useMemo(
    () => [
      { label: "Home", href: "#hero" },
      { label: "About", href: "#about" },
      { label: "Education", href: "#education" },
      { label: "Experience", href: "#experience" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
      { label: "Certifications", href: "#certifications" },
      { label: "Contact", href: "#contact" },
    ],
    []
  );

  const handleNavClick = (e) => {
    const href = e.currentTarget.getAttribute("href");
    if (!href?.startsWith("#")) return;

    e.preventDefault();
    setIsOpen(false);

    const id = href.slice(1);
    const el = document.getElementById(id);
    if (!el) return;

    const offset = 84; // sticky navbar height
    const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  // Theme toggle (premium)
  const toggleTheme = () => {
    const root = document.documentElement;
    const next = theme === "dark" ? "light" : "dark";

    root.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
    setTheme(next);
  };

  // Active section observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0.1, 0.2, 0.35, 0.5] }
    );

    links.forEach((link) => {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [links]);

  // Auto hide on scroll down, show on scroll up
  useEffect(() => {
    lastY.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;

      if (y < 40) {
        setHidden(false);
        lastY.current = y;
        return;
      }

      const goingDown = y > lastY.current;

      // avoid flicker
      if (Math.abs(y - lastY.current) > 10) {
        setHidden(goingDown);
        lastY.current = y;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu outside click + ESC
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e) => e.key === "Escape" && setIsOpen(false);

    const onMouseDown = (e) => {
      if (
        menuRef.current?.contains(e.target) ||
        buttonRef.current?.contains(e.target)
      )
        return;
      setIsOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onMouseDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onMouseDown);
    };
  }, [isOpen]);

  return (
    <motion.header
      initial={false}
      animate={hidden ? { y: -110, opacity: 0.96 } : { y: 0, opacity: 1 }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : { type: "spring", stiffness: 420, damping: 42 }
      }
      className="sticky top-0 z-50"
    >
      {/* Premium glass bar */}
      <div className="border-b border-black/5 dark:border-white/10 bg-white/55 dark:bg-black/30 backdrop-blur-xl">
        <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">
          {/* Logo */}
          <a
            href="#hero"
            onClick={handleNavClick}
            className="flex items-center gap-3"
          >
            <img
              src={profilePic}
              alt="Profile"
              className="w-9 h-9 rounded-full border border-blue-500/60 object-cover"
            />
            <span className="font-semibold text-slate-900 dark:text-blue-200">
              Jithendra Babu G
            </span>
          </a>

          {/* Desktop menu + theme toggle */}
          <div className="hidden md:flex items-center gap-2">
            <ul className="flex items-center gap-2 font-medium">
              {links.map((link) => {
                const id = link.href.slice(1);
                const isActive = active === id;

                return (
                  <li key={link.href} className="relative">
                    <a
                      href={link.href}
                      onClick={handleNavClick}
                      className={`relative px-3 py-2 rounded-lg transition
                        ${
                          isActive
                            ? "text-blue-700 dark:text-blue-300"
                            : "text-slate-700 dark:text-slate-300 hover:text-blue-700 dark:hover:text-blue-300"
                        }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 -z-10 rounded-lg bg-blue-600/10 dark:bg-blue-400/10"
                          transition={
                            reduceMotion
                              ? { duration: 0 }
                              : { type: "spring", stiffness: 420, damping: 30 }
                          }
                        />
                      )}
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Ultra-premium theme toggle */}
            <button
              onClick={toggleTheme}
              className="ml-3 relative h-9 w-[62px] rounded-full border border-black/10 dark:border-white/10
                         bg-white/70 dark:bg-white/5 backdrop-blur transition
                         shadow-sm hover:shadow-md"
              aria-label="Toggle theme"
              title="Toggle theme"
            >
              <motion.span
                layout
                transition={
                  reduceMotion
                    ? { duration: 0 }
                    : { type: "spring", stiffness: 500, damping: 32 }
                }
                className="absolute top-1 left-1 h-7 w-7 rounded-full
                           bg-gradient-to-br from-blue-600 to-indigo-600
                           shadow-lg shadow-blue-600/20
                           flex items-center justify-center text-white text-sm"
                style={{ left: theme === "dark" ? "34px" : "4px" }}
              >
                {theme === "dark" ? "🌙" : "☀️"}
              </motion.span>

              <span className="sr-only">Toggle theme</span>
            </button>
          </div>

          {/* Mobile button */}
          <button
            ref={buttonRef}
            onClick={() => setIsOpen((p) => !p)}
            className="md:hidden inline-flex items-center justify-center rounded-xl border border-black/10 dark:border-white/10
                       bg-white/70 dark:bg-white/5 backdrop-blur px-3 py-2"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? "✕" : "☰"}
          </button>

          {/* Mobile menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                ref={menuRef}
                initial={
                  reduceMotion ? false : { opacity: 0, y: -8, scale: 0.98 }
                }
                animate={reduceMotion ? {} : { opacity: 1, y: 0, scale: 1 }}
                exit={reduceMotion ? {} : { opacity: 0, y: -8, scale: 0.98 }}
                transition={{ duration: 0.18 }}
                className="md:hidden absolute top-full right-6 mt-3 w-72 rounded-2xl border border-black/10 dark:border-white/10
                           bg-white/90 dark:bg-black/60 backdrop-blur-xl shadow-2xl"
              >
                <div className="p-3">
                  {links.map((link) => {
                    const id = link.href.slice(1);
                    const isActive = active === id;

                    return (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={handleNavClick}
                        className={`block px-3 py-2 rounded-xl transition
                          ${
                            isActive
                              ? "bg-blue-600/10 text-blue-700 dark:text-blue-300 dark:bg-blue-400/10"
                              : "text-slate-800 dark:text-slate-200 hover:bg-black/5 dark:hover:bg-white/10"
                          }`}
                      >
                        {link.label}
                      </a>
                    );
                  })}

                  {/* Theme toggle inside mobile menu */}
                  <button
                    onClick={toggleTheme}
                    className="mt-3 w-full flex items-center justify-between px-3 py-2 rounded-xl border border-black/10 dark:border-white/10
                               text-slate-800 dark:text-slate-200 bg-white/70 dark:bg-white/5
                               hover:bg-black/5 dark:hover:bg-white/10 transition"
                  >
                    <span className="font-medium">Theme</span>
                    <span className="text-sm opacity-90">
                      {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
                    </span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </motion.header>
  );
}
