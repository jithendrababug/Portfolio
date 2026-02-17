import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import profilePic from "../assets/Jithendra Babu G.jpeg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("hero");
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

    const offset = 84;
    const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-md">
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <a href="#hero" onClick={handleNavClick} className="flex items-center gap-3">
          <img
            src={profilePic}
            alt="Profile"
            className="w-9 h-9 rounded-full border border-white/15 object-cover"
          />
          <span className="font-semibold text-white/90">
            Jithendra Babu G
          </span>
        </a>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-2 font-medium">
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
                        ? "text-white"
                        : "text-white/70 hover:text-white"
                    }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-lg bg-white/10"
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

        {/* Mobile button */}
        <button
          ref={buttonRef}
          onClick={() => setIsOpen((p) => !p)}
          className="md:hidden inline-flex items-center justify-center rounded-lg border border-white/10
                     bg-white/5 backdrop-blur px-3 py-2 text-white"
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
              initial={reduceMotion ? false : { opacity: 0, y: -8, scale: 0.98 }}
              animate={reduceMotion ? {} : { opacity: 1, y: 0, scale: 1 }}
              exit={reduceMotion ? {} : { opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.18 }}
              className="md:hidden absolute top-full right-6 mt-3 w-64 rounded-2xl border border-white/10
                         bg-black/60 backdrop-blur shadow-xl"
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
                            ? "bg-white/10 text-white"
                            : "text-white/80 hover:bg-white/10"
                        }`}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}