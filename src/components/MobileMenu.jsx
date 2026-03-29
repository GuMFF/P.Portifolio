const links = [
  { href: "#home", label: "Início" },
  { href: "#about", label: "Sobre" },
  { href: "#projects", label: "Projetos" },
  { href: "#contact", label: "Contato" },
];

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      id="mobile-menu"
      className={`fixed inset-0 z-40 md:hidden flex flex-col items-center justify-center bg-black/95 backdrop-blur-sm transition-[opacity,visibility] duration-300 ${
        menuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
      }`}
      aria-hidden={!menuOpen}
    >
      <nav className="flex flex-col gap-8 text-center" aria-label="Menu mobile">
        {links.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className="text-xl text-gray-200 hover:text-blue-400 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </a>
        ))}
      </nav>
    </div>
  );
};
