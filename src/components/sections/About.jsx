import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 px-4">
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Sobre mim
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Sou desenvolvedor full stack focado em construir interfaces claras e backends confiáveis.
            Gosto de aprender tecnologias novas e entregar código que seja fácil de manter.
          </p>
        </div>
      </RevealOnScroll>
    </section>
  );
};
