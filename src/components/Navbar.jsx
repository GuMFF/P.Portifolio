const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a
          href="#home"
          className="text-lg font-semibold bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent"
        >
          Gustavo Matos
        </a>

        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="md:hidden p-2 text-gray-300 hover:text-white rounded-lg hover:bg-white/5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
};
