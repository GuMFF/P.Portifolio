import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20 px-4">
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Projetos
          </h2>
          <p className="text-gray-400 text-lg">
            Em breve: destaques dos seus projetos e links para repositórios ou demos.
          </p>
        </div>
      </RevealOnScroll>
    </section>
  );
};
